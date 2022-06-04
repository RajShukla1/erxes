(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6369],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},53097:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"creating-first-user",title:"Creating first user"},s={unversionedId:"administrator/creating-first-user",id:"administrator/creating-first-user",isDocsHomePage:!1,title:"Creating first user",description:"The following steps are required prior using the system.",source:"@site/docs/administrator/creating-first-user.md",sourceDirName:"administrator",slug:"/administrator/creating-first-user",permalink:"/administrator/creating-first-user",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/administrator/creating-first-user.md",version:"current",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590116873,formattedLastUpdatedAt:"5/22/2020",frontMatter:{id:"creating-first-user",title:"Creating first user"},sidebar:"docs",previous:{title:"Documentation Guide",permalink:"/developer/documentation_guide"},next:{title:"Environment variables",permalink:"/administrator/environment-variables"}},l=[{value:"Create admin user",id:"create-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following steps are required prior using the system."),(0,i.kt)("h2",{id:"create-admin-user"},"Create admin user"),(0,i.kt)("p",null,"The below command will create first admin user with a random password.\nThe password will be printed in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn initProject\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"username: admin@erxes.io\npassword: ********\n")),(0,i.kt)("h2",{id:"load-initial-data"},"Load initial data"),(0,i.kt)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data, and reset the admin password.\nThe password will be printed in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn loadInitialData\n")),(0,i.kt)("p",null,"If you do not want to load sample data then you can run the following command just to load permissions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn loadPermission\n")))}u.isMDXComponent=!0}}]);