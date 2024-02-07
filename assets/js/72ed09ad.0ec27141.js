"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294),n=r(35742);function a(e){let{title:t}=e;return o.createElement(n.Z,null,o.createElement("title",null,t))}},65194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(88828);const s={title:"topshortvol",description:"This docusaurus page provides detailed information about the 'topshortvol' command, which retrieves the Top 15 Short Interest Stocks per Finra, providing essential data for traders.",keywords:["topshortvol","Finra","trading data","short vol","Short Interest Stocks","stock market","trading day","traders"]},i=void 0,l={unversionedId:"bot/reference/discord/short_data/topshortvol",id:"bot/reference/discord/short_data/topshortvol",title:"topshortvol",description:"This docusaurus page provides detailed information about the 'topshortvol' command, which retrieves the Top 15 Short Interest Stocks per Finra, providing essential data for traders.",source:"@site/content/bot/reference/discord/short_data/topshortvol.md",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/topshortvol",permalink:"/bot/reference/discord/short_data/topshortvol",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/topshortvol.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"topshortvol",description:"This docusaurus page provides detailed information about the 'topshortvol' command, which retrieves the Top 15 Short Interest Stocks per Finra, providing essential data for traders.",keywords:["topshortvol","Finra","trading data","short vol","Short Interest Stocks","stock market","trading day","traders"]},sidebar:"tutorialSidebar",previous:{title:"shortvol",permalink:"/bot/reference/discord/short_data/shortvol"},next:{title:"OpenBB Telegram Reference",permalink:"/bot/reference/telegram/"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{title:"short_data: topshortvol - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve the Top 15 Short Interest Stocks per Finra. It's typically measured as a ratio of the stock's total short vol divided by the total volume for the trading day. This information is essential for traders to make informed decisions in the market."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sh topshortvol\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This command has no parameters"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/sh topshortvol\n")),(0,n.kt)("hr",null))}h.isMDXComponent=!0}}]);