(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[893],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16664:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(74034),a=t(79973),o=(t(67294),t(3905)),i={id:"developing-plugins",title:"Developing Plugins",sidebar_label:"Developing Plugins"},l={unversionedId:"development/developing-plugins",id:"development/developing-plugins",isDocsHomePage:!1,title:"Developing Plugins",description:"With erxes, you can create your own plugins or extend the existing ones, which would help you to enhance your experience and increase your revenue by adding the value on your products/services or selling it on our our marketplace. This guideline will help you to develop your own plugins.",source:"@site/docs/development/developing-plugins.md",sourceDirName:"development",slug:"/development/developing-plugins",permalink:"/development/developing-plugins",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/development/developing-plugins.md",version:"current",lastUpdatedBy:"Nauren Batjargal",lastUpdatedAt:1660100610,formattedLastUpdatedAt:"8/10/2022",sidebar_label:"Developing Plugins",frontMatter:{id:"developing-plugins",title:"Developing Plugins",sidebar_label:"Developing Plugins"},sidebar:"docs",previous:{title:"Mac",permalink:"/developer/mac"},next:{title:"Troubleshooting",permalink:"/development/troubleshooting"}},s=[{value:"Installing erxes",id:"installing-erxes",children:[{value:"Plugin API",id:"plugin-api",children:[]},{value:"Plugin UI",id:"plugin-ui",children:[]}]},{value:"Running erxes",id:"running-erxes",children:[]},{value:"Configuring UI",id:"configuring-ui",children:[{value:"Placing new menu in UI navigation part",id:"placing-new-menu-in-ui-navigation-part",children:[]},{value:"Installing dependencies using home brew",id:"installing-dependencies-using-home-brew",children:[]}]}],p={toc:s};function u(e){var n,t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With erxes, you can create your own plugins or extend the existing ones, which would help you to enhance your experience and increase your revenue by adding the value on your products/services or selling it on our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{href:"https://erxes.io/marketplace",target:"_blank"},"our marketplace")),". This guideline will help you to develop your own plugins."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Before you start developing your own plugins, ensure there is no plugins with the same name or similar name in our marketplace that would bring any confusion as the name would be used many places starting from your ",(0,o.kt)("inlineCode",{parentName:"li"},"API"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mutation"),", etc."),(0,o.kt)("li",{parentName:"ul"},"Name must be in small letters with no symbols and space in between."),(0,o.kt)("li",{parentName:"ul"},"Name of All your ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQL")," type, ",(0,o.kt)("inlineCode",{parentName:"li"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mutation")," must start with your plugin name. "),(0,o.kt)("li",{parentName:"ul"},"Names of your database collection also must start with your plugin name. "),(0,o.kt)("li",{parentName:"ul"},"Name of your ",(0,o.kt)("strong",{parentName:"li"},"UIroutes")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"url"),"-s also must be start with you pluging name. ")))),(0,o.kt)("h2",{id:"installing-erxes"},"Installing erxes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{href:"https://www.erxes.org/developer/ubuntu",target:"_blank"},"the installation guideline"))," to install erxes XOS, but no need to run the erxes with the same direction. "),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before running erxes you need several other actions required to develop your own plugins at erxes XOS. Please make sure you should be back straight after you install erxes XOS using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{href:"https://www.erxes.org/developer/ubuntu",target:"_blank"},"the installation guideline")),"."))),(0,o.kt)("h3",{id:"plugin-api"},"Plugin API"),(0,o.kt)("p",null,"Plugin development in API part requires the following software prerequisites to be already installed on your computer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.typescriptlang.org/"},"Typescript"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql.org/graphql-js/"},"GraphQL"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://expressjs.com"},"Express.js"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.mongodb.com"},"MongoDB"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://redis.io"},"Redis"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.rabbitmq.com"},"RabbitMQ")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create new ",(0,o.kt)("inlineCode",{parentName:"li"},"API")," folder using the following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd erxes\nyarn create-plugin-api demo\n")),(0,o.kt)("h3",{id:"plugin-ui"},"Plugin UI"),(0,o.kt)("p",null,"Plugin development in UI part requires the following software prerequisites to be already installed on your computer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.typescriptlang.org/"},"Typescript"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://webpack.js.org/"},"Webpack"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org"},"ReactJS")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create new ",(0,o.kt)("inlineCode",{parentName:"li"},"UI")," folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd erxes\nyarn create-plugin-ui demo\n")),(0,o.kt)("h2",{id:"running-erxes"},"Running erxes"),(0,o.kt)("hr",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd erxes/cli\nyarn install\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"configs.json")," using the following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "jwt_token_secret": "token",\n    "client_portal_domains": "",\n    "elasticsearch": {},\n    "redis": {\n        "password": "pass"\n    },\n    "mongo": {\n        "username": "",\n        "password": ""\n    },\n    "rabbitmq": {\n        "cookie": "",\n        "user": "",\n        "pass": "",\n        "vhost": ""\n    },\n    "plugins": [\n        {\n            "name": "demo", "ui": "local"\n        }\n    ]\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Then run the following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd packages/gateway\nyarn dev\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Stop by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"ctl + c")," with the following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ../../cli\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Run the following command to start if you're using Ubuntu.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/erxes.js dev --bash --deps\n")),(0,o.kt)("p",null,"Or MacOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/erxes.js dev --deps\n")),(0,o.kt)("h2",{id:"configuring-ui"},"Configuring UI"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"placing-new-menu-in-ui-navigation-part"},"Placing new menu in UI navigation part"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add new block in menu part of ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/plugin-demo-ui/src/configs.js")," file using the foloowing command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," menus: [\n    {\n      text: 'Demos',\n      to: '/demos',\n      image: '/images/icons/erxes-18.svg',\n      location: 'settings',\n      scope: 'demo'\n    },\n\n\n    {\n      text: 'Demo new menu',\n      to: '/demos-new',\n      image: '/images/icons/erxes-18.svg',\n      location: 'mainNavigation',\n      scope: 'demo'\n    }\n  ]\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/plugin-demo-ui/src/routes.tsx")," using the following command. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import asyncComponent from '@erxes/ui/src/components/AsyncComponent';\nimport React from 'react';\nimport { Route } from 'react-router-dom';\n\nconst List = asyncComponent(() =>\n  import(/* webpackChunkName: \"List - Demos\" */ './containers/List')\n);\n\nconst New = asyncComponent(() =>\n  import(/* webpackChunkName: \"List - Demos\" */ './containers/New')\n);\n\nconst demos = ({ history }) => {\n  return <List history={history} />;\n};\n\nconst demoNew = ({ history }) => {\n  return <New />;\n};\n\nconst routes = () => {\n  return (\n    <>\n      <Route path=\"/demos/\" component={demos} />;\n      <Route path=\"/demos-new/\" component={demoNew} />;\n    </>\n  );\n};\n\nexport default routes;\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/plugin-demo-ui/src/containers/New.tsx")," file with following content.  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import React from 'react';\nimport New from '../components/New';\n\nclass NewContainer extends React.Component {\n  render() {\n    return <New {...this.props} />;\n  }\n}\n\nexport default NewContainer;\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Then run the following command to create your new ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/plugin-demo-ui/src/components/New.tsx"),"file. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import React from 'react';\n\nclass New extends React.Component {\n  render() {\n    return (\n      <div>New</div>\n    );\n  }\n}\n\nexport default New;\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/erxes.js dev --ignoreRun\n")),(0,o.kt)("h3",{id:"installing-dependencies-using-home-brew"},"Installing dependencies using home brew"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"redis"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew update\nbrew install redis\nbrew services start redis\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"rabbitmq"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew update\nbrew install rabbitmq\nbrew services start rabbitmq\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mongodb"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew tap mongodb/brew\nbrew update\nbrew install mongodb-community@5.0\nbrew services start mongodb-community@5.0\n")),(0,o.kt)("p",null,"Here you have everything in hand to develop your own plugins. If you still have questions, please contact us through ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{href:"https://github.com/erxes/erxes/discussionsGithub",target:"_blank"},"our community discussion"))," or start conversation on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",((n={href:"https://discord.com/invite/aaGzy3gQK5",target:"_blank"}).target="_blank",n),"Discord")),"! We are happy to help \ud83e\udd17\ud83e\udd17\ud83e\udd17"))}u.isMDXComponent=!0}}]);