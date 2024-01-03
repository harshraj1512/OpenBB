"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},47332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"map",description:"The documentation outlines the usage and parameters of a performance index stocks map placed according to sectors and industries. The Web-Based map tool, sourced by Finviz, adjusts based on selected performance periods and map filter types, such as SP500, world, full or ETF.",keywords:["Performance index","stocks map","sectors and industries","market cap","Finviz","map filter type","Performance period","sp500","world","full","etf"]},i=void 0,p={unversionedId:"terminal/reference/economy/map",id:"terminal/reference/economy/map",title:"map",description:"The documentation outlines the usage and parameters of a performance index stocks map placed according to sectors and industries. The Web-Based map tool, sourced by Finviz, adjusts based on selected performance periods and map filter types, such as SP500, world, full or ETF.",source:"@site/content/terminal/reference/economy/map.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/map",permalink:"/terminal/reference/economy/map",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/map.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1704320018,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"map",description:"The documentation outlines the usage and parameters of a performance index stocks map placed according to sectors and industries. The Web-Based map tool, sourced by Finviz, adjusts based on selected performance periods and map filter types, such as SP500, world, full or ETF.",keywords:["Performance index","stocks map","sectors and industries","market cap","Finviz","map filter type","Performance period","sp500","world","full","etf"]},sidebar:"tutorialSidebar",previous:{title:"macro",permalink:"/terminal/reference/economy/macro"},next:{title:"overview",permalink:"/terminal/reference/economy/overview"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"economy /map - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Performance index stocks map categorized by sectors and industries. Size represents market cap. Opens web-browser. ","[Source: Finviz]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"map [-p {1d,1w,1m,3m,6m,1y}] [-t {sp500,world,full,etf}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s_period"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --period"),(0,a.kt)("td",{parentName:"tr",align:null},"Performance period."),(0,a.kt)("td",{parentName:"tr",align:null},"1d"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"1d, 1w, 1m, 3m, 6m, 1y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s_type"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,a.kt)("td",{parentName:"tr",align:null},"Map filter type."),(0,a.kt)("td",{parentName:"tr",align:null},"sp500"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"sp500, world, full, etf")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154042399-ede7eb15-de7f-4de7-8541-3700ad2a97a0.png",alt:"map"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);