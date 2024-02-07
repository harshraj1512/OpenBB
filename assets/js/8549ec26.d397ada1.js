"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=o,u=l["".concat(d,".").concat(f)]||l[f]||p[f]||a;return r?n.createElement(u,c(c({ref:t},m),{},{components:r})):n.createElement(u,c({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(39960),o=r(86010),a=r(67294),c=r(16550),i=r(48334);function d(e){let{title:t,url:r,description:d,command:s}=e;const{pathname:m}=(0,c.TH)(),l=m.replace(/\/v\d+/,""),p=!l.includes("/reference")&&!l.includes("/widgets-library/")&&!l.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":l.startsWith("/excel"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&a.createElement(i.Z,{className:"ml-auto mr-4"})),d?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},94696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(26515);const c={},i="Econometrics",d={unversionedId:"terminal/reference/econometrics/index",id:"terminal/reference/econometrics/index",title:"Econometrics",description:"Commands",source:"@site/content/terminal/reference/econometrics/index.mdx",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/",permalink:"/terminal/reference/econometrics/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/econometrics/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"add",permalink:"/terminal/reference/econometrics/add"}},s={},m=[{value:"Commands",id:"commands",level:3}],l={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"econometrics"},"Econometrics"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Add",description:"Add columns to your dataframe with the option to use formulas. E.g. newdatasetcol = basedatasetcol sign...",url:"/terminal/reference/econometrics/add",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Bgod",description:"Show Breusch-Godfrey autocorrelation test results. Needs OLS to be run in advance with independent and dependent...",url:"/terminal/reference/econometrics/bgod",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Bpag",description:"Show Breusch-Pagan heteroscedasticity test results. Needs OLS to be run in advance with independent and dependent...",url:"/terminal/reference/econometrics/bpag",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Clean",description:"Clean a dataset by filling and dropping NaN values.",url:"/terminal/reference/econometrics/clean",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Combine",description:"The columns you want to add to a dataset. The first argument is the dataset to add columns inand the remaining...",url:"/terminal/reference/econometrics/combine",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Compare",description:"Compare results between all activated Panel regression models",url:"/terminal/reference/econometrics/compare",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Corr",description:"Plot correlation coefficients.",url:"/terminal/reference/econometrics/corr",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Delete",description:"The column you want to delete from a dataset.",url:"/terminal/reference/econometrics/delete",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Desc",description:"Show the descriptive statistics of the dataset",url:"/terminal/reference/econometrics/desc",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Dwat",description:"Show autocorrelation tests from Durbin-Watson. Needs OLS to be run in advance with independent and dependent...",url:"/terminal/reference/econometrics/dwat",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Eval",description:"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval()...",url:"/terminal/reference/econometrics/eval",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Export",description:"Export dataset to Excel",url:"/terminal/reference/econometrics/export",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Garch",description:"Calculates annualized volatility forecasts based on GARCH. GARCH (Generalized autoregressive conditional...",url:"/terminal/reference/econometrics/garch",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Index_Cmd",description:"Set a (multi) index for the dataset",url:"/terminal/reference/econometrics/index_cmd",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Lag",description:"Add lag to a variable by shifting a column.",url:"/terminal/reference/econometrics/lag",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Load",description:"Load dataset (from previous export, custom imports or StatsModels).",url:"/terminal/reference/econometrics/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Norm",description:"Test whether the used data is normally distributed.",url:"/terminal/reference/econometrics/norm",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ols",description:"Performs an OLS regression on timeseries data.",url:"/terminal/reference/econometrics/ols",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Panel",description:"Performs regression analysis on Panel Data. There are a multitude of options to select from to fit the needs of...",url:"/terminal/reference/econometrics/panel",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Remove",description:"Remove a dataset from the loaded dataset list",url:"/terminal/reference/econometrics/remove",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Rename",description:"The column you want to rename from a dataset.",url:"/terminal/reference/econometrics/rename",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ret",description:"Calculate returns for the given column.",url:"/terminal/reference/econometrics/ret",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Root",description:"Show unit root tests of a column of a dataset",url:"/terminal/reference/econometrics/root",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Show",description:"Show a portion of the DataFrame",url:"/terminal/reference/econometrics/show",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Type",description:"Show the type of the columns of the dataset and/or change the type of the column",url:"/terminal/reference/econometrics/type",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);