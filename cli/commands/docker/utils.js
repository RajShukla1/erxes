const fs = require("fs");
const fse = require("fs-extra");
const yaml = require("yaml");
const { log, execCommand, filePath, execCurl } = require("../utils");

const commonEnvs = (configs) => {
  const db_server_address = configs.db_server_address;
  const redis = configs.redis || {};
  const rabbitmq = configs.rabbitmq || {};
  const rabbitmq_host = `amqp://${rabbitmq.user}:${rabbitmq.pass}@${rabbitmq.server_address || db_server_address}:5672/${rabbitmq.vhost}`;

  return {
    DEBUG: "erxes*",
    NODE_ENV: "production",
    REDIS_HOST: db_server_address,
    REDIS_PORT: 6379,
    REDIS_PASSWORD: redis.password || "",
    RABBITMQ_HOST: rabbitmq_host,
    ELASTICSEARCH_URL: `${db_server_address}:9200`,
    ENABLED_SERVICES_PATH: "/data/enabled-services.js",
    MESSAGE_BROKER_PREFIX: rabbitmq.prefix || ''
  };
};

const cleaning = async () => {
  await execCommand("docker rm $(docker ps -a -q -f status=exited)", true);
  await execCommand("docker rmi $(docker images -f dangling=true -q)", true);
  await execCommand("docker volume rm $(docker volume ls -q -f dangling=true)", true);
};

const mongoEnv = (configs, plugin) => {
  const mongo = configs.mongo || {};
  const db_server_address = configs.db_server_address;

  let db_name = mongo.db_name || 'erxes';

  if (plugin && plugin.db_name) {
    db_name = plugin.db_name;
  }

  const mongo_url = `mongodb://${mongo.username}:${mongo.password}@${db_server_address}:27017/${db_name}?authSource=admin&replicaSet=rs0`;

  return mongo_url;
}

const healthcheck = { test: ["CMD", "curl", "-i", "http://localhost:80/health"] };
const deploy = {
      mode: "replicated",
      replicas: 2,
      update_config: {
        order: "start-first",
        failure_action: "rollback",
        delay: "5s"
      }
}

const generatePluginBlock = (configs, plugin) => {
  const mongo_url = plugin.mongo_url || mongoEnv(configs, plugin);

  return {
    image: `erxes/plugin-${plugin.name}-api:federation`,
    environment: {
      PORT: plugin.port || 80,
      API_MONGO_URL: mongo_url,
      MONGO_URL: mongo_url,
      LOAD_BALANCER_ADDRESS: `http://plugin_${plugin.name}_api`,
      ...commonEnvs(configs),
    },
    volumes: ["./enabled-services.js:/data/enabled-services.js"],
    networks: ["erxes"],
    extra_hosts: [`mongo:${plugin.db_server_address || configs.db_server_address || '127.0.0.1'}`],
  };
};

module.exports.deployDbs = async (program) => {
  await cleaning();

  const configs = await fse.readJSON(filePath("configs.json"));

  const dockerComposeConfig = {
    version: "3.3",
    networks: {
      erxes: {
        driver: "overlay",
      },
    },
    services: {
    },
  };

  if (configs.kibana) {
    dockerComposeConfig.services.kibana = {
      image: "docker.elastic.co/kibana/kibana:7.6.0",
      ports: ["5601:5601"],
      networks: ["erxes"],
    };
  }

  if (configs.mongo) {
    if (!(await fse.exists(filePath("mongodata")))) {
      await execCommand("mkdir mongodata");
    }

    dockerComposeConfig.services.mongo = {
      hostname: "mongo",
      image: "mongo:4.0.20",
      ports: ["27017:27017"],
      environment: {
        MONGO_INITDB_ROOT_USERNAME: configs.mongo.username,
        MONGO_INITDB_ROOT_PASSWORD: configs.mongo.password,
      },
      networks: ["erxes"],
      volumes: ["./mongodata:/data/db"],
      command: ["--replSet", "rs0", "--bind_ip_all"],
      extra_hosts: ["mongo:127.0.0.1"]
    };
  }

  if (configs.elasticsearch) {
    if (!(await fse.exists(filePath("elasticsearchData")))) {
      await execCommand("mkdir elasticsearchData");
    }

    dockerComposeConfig.services.elasticsearch = {
      image: "docker.elastic.co/elasticsearch/elasticsearch:7.8.0",
      environment: {
        "discovery.type": "single-node",
      },
      ports: ["9200:9200"],
      networks: ["erxes"],
      volumes: ["./elasticsearchData:/usr/share/elasticsearch/data"],
      ulimits: {
        memlock: {
          soft: -1,
          hard: -1,
        },
      },
    };
  }

  if (configs.redis) {
    dockerComposeConfig.services.redis = {
      image: "redis:5.0.5",
      command: `redis-server --appendonly yes --requirepass ${configs.redis.password}`,
      ports: ["6379:6379"],
      networks: ["erxes"],
      volumes: ["./redisdata:/data"],
    };
  }

  if (configs.rabbitmq) {
    dockerComposeConfig.services.rabbitmq = {
      image: "rabbitmq:3.7.17-management",
      hostname: "rabbitmq",
      environment: {
        RABBITMQ_VM_MEMORY_HIGH_WATERMARK: "2048MiB",
        RABBITMQ_ERLANG_COOKIE: configs.rabbitmq.cookie,
        RABBITMQ_DEFAULT_USER: configs.rabbitmq.user,
        RABBITMQ_DEFAULT_PASS: configs.rabbitmq.pass,
        RABBITMQ_DEFAULT_VHOST: configs.rabbitmq.vhost,
      },
      ports: ["5672:5672", "15672:15672"],
      networks: ["erxes"],
      volumes: ["./rabbitmq-data:/var/lib/rabbitmq"],
    };
  }

  const yamlString = yaml.stringify(dockerComposeConfig);

  log("Generating docker-compose-dbs.yml ....");

  fs.writeFileSync(filePath("docker-compose-dbs.yml"), yamlString);

  log("Deploy ......");

  return execCommand(
    "docker stack deploy --compose-file docker-compose-dbs.yml erxes-dbs --with-registry-auth --resolve-image changed"
  );
};

module.exports.dup = async (program) => {
  await cleaning();

  const configs = await fse.readJSON(filePath("configs.json"));

  const main_api_domain = configs.main_api_domain || `${configs.main_app_domain}/api`;
  const subscription_url = `wss://${main_api_domain.replace("https://", "")}/graphql`;
  const widgets_domain = (configs.widgets && configs.widgets.domain) || `${configs.main_app_domain}/widgets`;
  const dashboard_domain = (configs.dashboard && configs.dashboard.domain) || `${configs.main_app_domain}/dashboard/front`;

  const NGINX_HOST = (configs.main_app_domain || "").replace("https://", "");
  const extra_hosts = [`mongo:${configs.db_server_address || '127.0.0.1'}`];

  const dockerComposeConfig = {
    version: "3.7",
    networks: {
      erxes: {
        driver: "overlay",
      },
    },
    services: {
      coreui: {
        image: "erxes/erxes:federation",
        environment: {
          REACT_APP_CDN_HOST: widgets_domain,
          REACT_APP_API_URL: main_api_domain,
          REACT_APP_DASHBOARD_URL: dashboard_domain,
          REACT_APP_API_SUBSCRIPTION_URL: subscription_url,
          NGINX_HOST,
          NODE_ENV: "production",
          REACT_APP_FILE_UPLOAD_MAX_SIZE: 524288000,
        },
        ports: ["3000:80"],
        volumes: [
          "./plugins.js:/usr/share/nginx/html/js/plugins.js",
          "./plugin-uis:/usr/share/nginx/html/js/plugins",
        ],
        networks: ["erxes"],
      },
      plugin_core_api: {
        image: "erxes/core:federation",
        environment: {
          PORT: "80",
          JWT_TOKEN_SECRET: configs.jwt_token_secret,
          LOAD_BALANCER_ADDRESS: "http://plugin_core_api",
          API_DOMAIN: main_api_domain,
          MAIN_APP_DOMAIN: configs.main_app_domain || "",
          MONGO_URL: mongoEnv(configs),
          EMAIL_VERIFIER_ENDPOINT:
            configs.email_verifier_endpoint ||
            "https://email-verifier.erxes.io",
          ENABLED_SERVICES_PATH: "/data/enabled-services.js",
          ...commonEnvs(configs),
        },
        extra_hosts,
        volumes: ["./enabled-services.js:/data/enabled-services.js"],
        networks: ["erxes"],
      },
      gateway: {
        image: "erxes/gateway:federation",
        environment: {
          PORT: "80",
          LOAD_BALANCER_ADDRESS: "http://gateway",
          JWT_TOKEN_SECRET: configs.jwt_token_secret,
          MAIN_APP_DOMAIN: configs.main_app_domain,
          API_DOMAIN: "http://plugin_core_api",
          WIDGETS_DOMAIN: widgets_domain,
          CLIENT_PORTAL_DOMAINS: configs.client_portal_domains || "",
          MONGO_URL: mongoEnv(configs),
          ...commonEnvs(configs),
        },
        volumes: ["./enabled-services.js:/data/enabled-services.js"],
        healthcheck,
        deploy,
        extra_hosts,
        ports: ["3300:80"],
        networks: ["erxes"],
      },
      workers: {
        image: "erxes/workers:federation",
        environment: {
          PORT: "80",
          JWT_TOKEN_SECRET: configs.jwt_token_secret,
          LOAD_BALANCER_ADDRESS: "http://plugin_worker_api",
          MONGO_URL: mongoEnv(configs),
          ...commonEnvs(configs),
        },
        volumes: ["./enabled-services.js:/data/enabled-services.js"],
        extra_hosts,
        networks: ["erxes"],
      },
      essyncer: {
        image: "erxes/erxes-essyncer:federation",
        environment: {
          ELASTICSEARCH_URL: `http://${configs.db_server_address}:9200`,
          MONGO_URL: mongoEnv(configs),
        },
        volumes: ["./essyncerData:/data/essyncerData"],
        extra_hosts,
        networks: ["erxes"],
      },
    },
  };

  if (configs.widgets) {
    dockerComposeConfig.services.widgets = {
      image: "erxes/erxes-widgets:federation",
      environment: {
        PORT: "3200",
        ROOT_URL: widgets_domain,
        API_URL: main_api_domain,
        API_SUBSCRIPTIONS_URL: subscription_url,
      },
      ports: ["3200:3200"],
      networks: ["erxes"],
    };
  }

  if (configs.dashboard) {
    dockerComposeConfig.services.dashboard = {
      image: "erxes/dashboard:federation",
      environment: {
        PORT: "80",
        JWT_TOKEN_SECRET: configs.jwt_token_secret,
        MONGO_URL: mongoEnv(configs),
        ...commonEnvs(configs),
      },
      volumes: ["./enabled-services.js:/data/enabled-services.js"],
      extra_hosts,
      networks: ["erxes"],
    };

    dockerComposeConfig.services["dashboard-front"] = {
      image: "erxes/erxes-dashboard-front:develop",
      ports: ["4200:80"],
      environment: {
        REACT_APP_API_URL: main_api_domain,
        REACT_APP_API_SUBSCRIPTION_URL: subscription_url,
        REACT_APP_DASHBOARD_API_URL: `https://${NGINX_HOST}/dashboard/api`,
        REACT_APP_DASHBOARD_API_TOKEN: configs.dashboard.api_token,
        NGINX_HOST,
      },
      networks: ["erxes"],
    };
  }

  log("Downloading pluginsMap.js from s3 ....");

  await execCurl(
    "https://plugin-uis.s3.us-west-2.amazonaws.com/pluginsMap.js",
    "pluginsMap.js"
  );

  const pluginsMap = require(filePath("pluginsMap.js"));

  const enabledPlugins = [];
  const uiPlugins = [];

  for (const plugin of configs.plugins || []) {
    dockerComposeConfig.services[
      `plugin_${plugin.name}_api`
    ] = generatePluginBlock(configs, plugin);

    enabledPlugins.push(`'${plugin.name}'`);

    if (pluginsMap[plugin.name]) {
      uiPlugins.push(
        JSON.stringify({
          name: plugin.name,
          ...pluginsMap[plugin.name],
        })
      );
    }
  }

  log(`Emptying old plugin-uis`);

  await execCommand('rm -rf plugin-uis', true);
  await execCommand('mkdir plugin-uis', true);

  for (const plugin of configs.plugins || []) {
    const name = `plugin-${plugin.name}-ui`;

    log(`Downloading ${name} ui from s3 ....`);

    await execCommand(
      `aws s3 sync s3://plugin-uis/${name} plugin-uis/${name} --no-sign-request`
    );
  }

  log("Generating ui plugins.js ....");

  await fs.promises.writeFile(
    filePath("plugins.js"),
    `
    window.plugins = [
      ${uiPlugins.join(",")}
    ]
  `.replace(/plugin-uis.s3.us-west-2.amazonaws.com/g, NGINX_HOST)
  );

  log("Generating enabled-services.js ....");

  await fs.promises.writeFile(
    filePath("enabled-services.js"),
    `
    module.exports = [
      ${enabledPlugins.join(",")}
    ]
  `
  );

  const extraServices = configs.extra_services || {};

  for (const serviceName of Object.keys(extraServices)) {
    const service = extraServices[serviceName];

    dockerComposeConfig.services[serviceName] = {
      ...service,
      networks: ["erxes"],
    };
  }

  const yamlString = yaml.stringify(dockerComposeConfig);

  log("Generating docker-compose.yml ....");

  fs.writeFileSync(filePath("docker-compose.yml"), yamlString);

  log("Deploy ......");

  return execCommand(
    "docker stack deploy --compose-file docker-compose.yml erxes --with-registry-auth --resolve-image changed"
  );
};

module.exports.dupdate = async (program) => {
  if (process.argv.length < 4) {
    return console.log("Pass service names !!!");
  }

  const pluginNames = process.argv[3];

  for (const name of pluginNames.split(",")) {
    log(`Force updating  ${name}......`);

    if (['dashboard', 'workers', 'dashboard-front', 'widgets', 'gateway'].includes(name)) {
      await execCommand(
        `docker service update erxes_${name} --image erxes/${name}:federation`
      );
      continue;
    }

    if (name === 'coreui') {
      await execCommand(
        `docker service update erxes_coreui --image erxes/erxes:federation`
      );
      continue;
    }

    if (name === 'core') {
      await execCommand(
        `docker service update erxes_plugin_core_api --image erxes/core:federation`
      );
      continue;
    }

    await execCommand(
      `docker service update erxes_plugin_${name}_api --image erxes/plugin-${name}-api:federation`
    );

    log("Updating gateway ....");
    await execCommand(`docker service update erxes_gateway --force`);

    if (program.uis) {
      log("Syncing plugin uis from s3 ....");

      const uiname = `plugin-${name}-ui`;

      await execCommand(`rm -rf plugin-uis/${uiname}`, true);
      await execCommand(`aws s3 sync s3://plugin-uis/${uiname} plugin-uis/${uiname} --no-sign-request`);

      log("Restart core ui ....");
      await execCommand(`docker service update erxes_coreui --force`);
    }
  }
};