"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},67397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"insiders",description:"This page provides information about retrieving insider transactions for a given stock. It explains the /insiders command usage, parameters and provides examples",keywords:["insider transactions","stock data","stock ticker","buy/sell transactions","average price","/insiders command","command usage"]},s=void 0,l={unversionedId:"bot/reference/telegram/duediligence/insiders",id:"bot/reference/telegram/duediligence/insiders",title:"insiders",description:"This page provides information about retrieving insider transactions for a given stock. It explains the /insiders command usage, parameters and provides examples",source:"@site/content/bot/reference/telegram/duediligence/insiders.md",sourceDirName:"bot/reference/telegram/duediligence",slug:"/bot/reference/telegram/duediligence/insiders",permalink:"/bot/reference/telegram/duediligence/insiders",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/duediligence/insiders.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1704320018,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"insiders",description:"This page provides information about retrieving insider transactions for a given stock. It explains the /insiders command usage, parameters and provides examples",keywords:["insider transactions","stock data","stock ticker","buy/sell transactions","average price","/insiders command","command usage"]},sidebar:"tutorialSidebar",previous:{title:"financials",permalink:"/bot/reference/telegram/duediligence/financials"},next:{title:"instholdings",permalink:"/bot/reference/telegram/duediligence/instholdings"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"duediligence: insiders - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the 15 most recent insider transactions for a given stock. It will provide information such as the date of the transaction, the company insider involved, the number of shares traded, the type of transaction (buy/sell), and the average price of the transaction."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/insiders ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/insiders AMD\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);