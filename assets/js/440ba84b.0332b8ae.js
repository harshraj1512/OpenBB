"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},40999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"historical",description:"A guide for understanding and using the 'historical' feature for price comparison between similar companies, includes usage, parameters details and graphical representation.",keywords:["Price comparison","Historical prices","Stock analysis","Normalization","Candle data","Starting date","High, low, close prices","Company comparison","Open-high-low-close","Adjusted close"]},o=void 0,c={unversionedId:"terminal/reference/stocks/ca/historical",id:"terminal/reference/stocks/ca/historical",title:"historical",description:"A guide for understanding and using the 'historical' feature for price comparison between similar companies, includes usage, parameters details and graphical representation.",source:"@site/content/terminal/reference/stocks/ca/historical.md",sourceDirName:"terminal/reference/stocks/ca",slug:"/terminal/reference/stocks/ca/historical",permalink:"/terminal/reference/stocks/ca/historical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ca/historical.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1704320018,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"historical",description:"A guide for understanding and using the 'historical' feature for price comparison between similar companies, includes usage, parameters details and graphical representation.",keywords:["Price comparison","Historical prices","Stock analysis","Normalization","Candle data","Starting date","High, low, close prices","Company comparison","Open-high-low-close","Adjusted close"]},sidebar:"tutorialSidebar",previous:{title:"hcorr",permalink:"/terminal/reference/stocks/ca/hcorr"},next:{title:"income",permalink:"/terminal/reference/stocks/ca/income"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /ca/historical - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Historical price comparison between similar companies."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"historical [-t {o,h,l,c,a}] [-n] [-s START] [-e END]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type_candle"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,n.kt)("td",{parentName:"tr",align:null},"Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close."),(0,n.kt)("td",{parentName:"tr",align:null},"a"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"o, h, l, c, a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"normalize"),(0,n.kt)("td",{parentName:"tr",align:null},"-n  --normalize"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to normalize all prices on same 0-1 scale"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-01-02"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"The end date (format YYYY-MM-DD) of the stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-01-03"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154073378-935eddd4-167e-48e8-9e3d-34029e5ba42f.png",alt:"historical"})),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);