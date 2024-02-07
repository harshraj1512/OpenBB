"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(35742);function c(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},7830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),c=r(88828);const l={title:"c5m",description:"The c5m command page details how to retrieve an intraday 5 minute chart for a particular stock ticker. The chart serves as a valuable tool for technical analysis and tracking short-term price movements.",keywords:["c5m","intraday chart","5 minute chart","candlestick chart","stock performance","technical analysis","short-term price movements","extended hours"]},o=void 0,i={unversionedId:"bot/reference/telegram/charts/c5m",id:"bot/reference/telegram/charts/c5m",title:"c5m",description:"The c5m command page details how to retrieve an intraday 5 minute chart for a particular stock ticker. The chart serves as a valuable tool for technical analysis and tracking short-term price movements.",source:"@site/content/bot/reference/telegram/charts/c5m.md",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/c5m",permalink:"/bot/reference/telegram/charts/c5m",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/charts/c5m.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"c5m",description:"The c5m command page details how to retrieve an intraday 5 minute chart for a particular stock ticker. The chart serves as a valuable tool for technical analysis and tracking short-term price movements.",keywords:["c5m","intraday chart","5 minute chart","candlestick chart","stock performance","technical analysis","short-term price movements","extended hours"]},sidebar:"tutorialSidebar",previous:{title:"c3m",permalink:"/bot/reference/telegram/charts/c3m"},next:{title:"cc",permalink:"/bot/reference/telegram/charts/cc"}},s={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{title:"charts: c5m - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve an intraday 5 minute chart for a given ticker. This chart will display the candlestick chart for the day. It will provide a visual representation of the stock's performance over the current day. This command is useful for performing technical analysis and tracking short-term price movements."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/c5m ticker [extended_hours]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"extended_hours"),(0,n.kt)("td",{parentName:"tr",align:null},"Show Full 4am-8pm ET Trading Hours. Default: False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/c5m AMD\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/c5m AMD true\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);