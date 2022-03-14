window.plugins = [
  {
    name: 'cards',
    port: 3003,
    scope: 'cards',
    url: 'http://localhost:3003/remoteEntry.js',
    exposes: {
      './routes': './src/routes.tsx',
      './settings': './src/Settings.tsx',
      './propertyGroupForm': './src/propertyGroupForm.tsx',
      './segmentForm': './src/segmentForm.tsx'
    },
    routes: {
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'cards',
      module: './routes'
    },
    propertyGroupForm: './propertyGroupForm',
    segmentForm: './segmentForm',

    menus: [
      {
        text: 'Sales Pipeline',
        url: '/deal',
        icon: 'icon-piggy-bank',
        location: 'mainNavigation',
        permission: 'showDeals'
      },
      {
        text: 'Task',
        url: '/task',
        icon: 'icon-file-check-alt',
        location: 'mainNavigation',
        permission: 'showConversations'
      },
      {
        text: 'Ticket',
        url: '/ticket/board',
        icon: 'icon-ticket',
        location: 'mainNavigation',
        permission: 'showTickets'
      },
      {
        text: 'Growth Hacking',
        url: '/growthHack',
        icon: 'icon-idea',
        location: 'mainNavigation',
        permission: 'showGrowthHacks'
      },
      {
        text: 'Sales Pipelines',
        to: '/settings/boards/deal',
        image: '/images/icons/erxes-25.png',
        location: 'settings',
        scope: 'cards',
        action: 'dealsAll',
        permissions: [
          'dealBoardsAdd',
          'dealBoardsEdit',
          'dealBoardsRemove',
          'dealPipelinesAdd',
          'dealPipelinesEdit',
          'dealPipelinesUpdateOrder',
          'dealPipelinesRemove',
          'dealPipelinesArchive',
          'dealPipelinesArchive',
          'dealStagesAdd',
          'dealStagesEdit',
          'dealStagesUpdateOrder',
          'dealStagesRemove'
        ]
      },
      {
        text: 'Task Pipelines',
        to: '/settings/boards/task',
        image: '/images/icons/erxes-13.svg',
        location: 'settings',
        scope: 'cards',
        action: 'tasksAll',
        permissions: [
          'taskBoardsAdd',
          'taskBoardsEdit',
          'taskBoardsRemove',
          'taskPipelinesAdd',
          'taskPipelinesEdit',
          'taskPipelinesUpdateOrder',
          'taskPipelinesRemove',
          'taskPipelinesArchive',
          'taskPipelinesCopied',
          'taskStagesAdd',
          'taskStagesEdit',
          'taskStagesUpdateOrder',
          'taskStagesRemove',
          'tasksAll'
        ]
      },
      {
        text: 'Ticket Pipelines',
        to: '/settings/boards/ticket',
        image: '/images/icons/erxes-19.svg',
        location: 'settings',
        scope: 'cards',
        action: 'ticketsAll',
        permissions: [
          'ticketBoardsAdd',
          'ticketBoardsEdit',
          'ticketBoardsRemove',
          'ticketPipelinesAdd',
          'ticketPipelinesEdit',
          'ticketPipelinesUpdateOrder',
          'ticketPipelinesRemove',
          'ticketPipelinesArchive',
          'ticketPipelinesCopied',
          'ticketStagesAdd',
          'ticketStagesEdit',
          'ticketStagesUpdateOrder',
          'ticketStagesRemove'
        ]
      },
      {
        text: 'Growth Hacking Templates',
        to: '/settings/boards/growthHack',
        image: '/images/icons/erxes-12.svg',
        location: 'settings',
        scope: 'cards',
        action: 'growthHacksAll',
        permissions: [
          'growthHackTemplatesAdd',
          'growthHackTemplatesEdit',
          'growthHackTemplatesRemove',
          'growthHackTemplatesDuplicate',
          'showGrowthHackTemplates'
        ]
      }
    ]
  },

  {
    name: 'segments',
    port: 3013,
    exposes: { './routes': './src/routes.tsx' },
    routes: {
      url: 'http://localhost:3013/remoteEntry.js',
      scope: 'segments',
      module: './routes'
    },
    menus: [
      {
        text: 'Segments',
        url: '/segments/customer',
        icon: 'icon-chart-pie-alt',
        location: 'mainNavigation',
        permission: 'showSegments'
      }
    ]
  },

  {
    name: "logs",
    port: 3040,
    exposes: { "./routes": "./src/routes.tsx" },
    routes: {
      url: "http://localhost:3040/remoteEntry.js",
      scope: "logs",
      module: "./routes",
    },
    menus: [
      {
        text: "logs",
        to: "/settings/logs",
        image: "/images/icons/erxes-33.png",
        location: "settings",
        scope: "logs",
        component: "./settings",
        action: "",
        permissions: [],
      },
    ],
  },

  {
    name: "knowledgeBase",
    port: 3004,
    exposes: {
      "./routes": "./src/routes.tsx"
    },
    routes: {
      url: "http://localhost:3004/remoteEntry.js",
      scope: "knowledgeBase",
      module: "./routes",
    },
    menus: [
      {
        text: 'Knowledge Base',
        url: '/knowledgeBase',
        icon: 'icon-book-open',
        location: "mainNavigation",
        permission: "showConversatshowKnowledgeBaseions",
      }
    ],
  }
];
