"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},25127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"coin_list",description:"The coin_list page is a documentation of the function that returns the list of all available coins on CoinPaprika. It includes source code and is part of the OpenBBTerminal project.",keywords:["coin_list","CoinPaprika","crypto","pandas.DataFrame"]},l=void 0,c={unversionedId:"sdk/reference/crypto/ov/coin_list",id:"sdk/reference/crypto/ov/coin_list",title:"coin_list",description:"The coin_list page is a documentation of the function that returns the list of all available coins on CoinPaprika. It includes source code and is part of the OpenBBTerminal project.",source:"@site/content/sdk/reference/crypto/ov/coin_list.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/coin_list",permalink:"/sdk/reference/crypto/ov/coin_list",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/coin_list.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"coin_list",description:"The coin_list page is a documentation of the function that returns the list of all available coins on CoinPaprika. It includes source code and is part of the OpenBBTerminal project.",keywords:["coin_list","CoinPaprika","crypto","pandas.DataFrame"]},sidebar:"tutorialSidebar",previous:{title:"cbpairs",permalink:"/sdk/reference/crypto/ov/cbpairs"},next:{title:"contracts",permalink:"/sdk/reference/crypto/ov/contracts"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto.ov.coin_list - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get list of all available coins on CoinPaprika  ","[Source: CoinPaprika]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L453"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.ov.coin_list()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pandas.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Available coins on CoinPaprika",(0,a.kt)("br",null),"rank, id, name, symbol, type")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);