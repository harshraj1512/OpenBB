"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),f=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=f(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=f(r),u=n,d=s["".concat(p,".").concat(u)]||s[u]||m[u]||a;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var f=2;f<a;f++)i[f]=r[f];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294),n=r(35742);function a(e){let{title:t}=e;return o.createElement(n.Z,null,o.createElement("title",null,t))}},12469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(88828);const i={title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},l=void 0,p={unversionedId:"sdk/reference/portfolio/metric/payoff",id:"sdk/reference/portfolio/metric/payoff",title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",source:"@site/content/sdk/reference/portfolio/metric/payoff.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/payoff",permalink:"/sdk/reference/portfolio/metric/payoff",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/payoff.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},sidebar:"tutorialSidebar",previous:{title:"maxdrawdown",permalink:"/sdk/reference/portfolio/metric/maxdrawdown"},next:{title:"profitfactor",permalink:"/sdk/reference/portfolio/metric/profitfactor"}},f={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{title:"portfolio.metric.payoff - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get payoff ratio"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1633"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.portfolio.metric.payoff(portfolio_engine: portfolio_engine.PortfolioEngine)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This function does not take any parameters."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame of payoff ratio of the portfolio during different time periods")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio/holdings_example.xlsx")\noutput = openbb.portfolio.metric.payoff(p)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"During some time periods there were no losing trades. Thus some values could not be calculated.\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);