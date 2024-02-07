"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43325],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return t?n.createElement(f,c(c({ref:r},d),{},{components:t})):n.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),o=t(86010),a=t(67294),c=t(16550),i=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,c.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(i.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},90228:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const c={},i="ECONOMY",l={unversionedId:"excel/reference/economy/index",id:"excel/reference/economy/index",title:"ECONOMY",description:"Menus",source:"@site/content/excel/reference/economy/index.mdx",sourceDirName:"excel/reference/economy",slug:"/excel/reference/economy/",permalink:"/excel/reference/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/economy/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SYMBOL_MAP",permalink:"/excel/reference/regulators/sec/symbol_map"},next:{title:"ECONOMY.GDP",permalink:"/excel/reference/economy/gdp/"}},s={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy"},"ECONOMY"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"GDP",description:"forecast, real, nominal",url:"economy/gdp",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"FRED_SEARCH",description:"Search for FRED series or economic releases by ID or string. This does not return the observation...",url:"economy/fred_search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"CALENDAR",description:"Economic Calendar.",url:"economy/calendar",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"BALANCE_OF_PAYMENTS",description:"Balance of Payments Reports.",url:"economy/balance_of_payments",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"MONEY_MEASURES",description:"Money Measures.",url:"economy/money_measures",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"FRED_SERIES",description:"Get data by series ID from FRED.",url:"economy/fred_series",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"CPI",description:"Consumer Price Index (CPI). Returns either the rescaled index value, or a rate of change...",url:"economy/cpi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"RISK_PREMIUM",description:"Historical Market Risk Premium.",url:"economy/risk_premium",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);