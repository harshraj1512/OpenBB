"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45682],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88828:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(67294),a=t(35742);function s(e){let{title:r}=e;return n.createElement(a.Z,null,n.createElement("title",null,r))}},3012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905)),s=t(88828);const o={title:"screener",description:"The screener command page offers guidance to users on how to retrieve stock screener results using different technical signals. It includes various screener signals like Top Gainers, Top Losers, Most Active, etc.",keywords:["Screener Command","Stock Screener Results","Technical Signals","Top Gainers","Top Losers","Most Active"]},l=void 0,c={unversionedId:"bot/reference/telegram/screeners/screener",id:"bot/reference/telegram/screeners/screener",title:"screener",description:"The screener command page offers guidance to users on how to retrieve stock screener results using different technical signals. It includes various screener signals like Top Gainers, Top Losers, Most Active, etc.",source:"@site/content/bot/reference/telegram/screeners/screener.md",sourceDirName:"bot/reference/telegram/screeners",slug:"/bot/reference/telegram/screeners/screener",permalink:"/bot/reference/telegram/screeners/screener",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/screeners/screener.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"screener",description:"The screener command page offers guidance to users on how to retrieve stock screener results using different technical signals. It includes various screener signals like Top Gainers, Top Losers, Most Active, etc.",keywords:["Screener Command","Stock Screener Results","Technical Signals","Top Gainers","Top Losers","Most Active"]},sidebar:"tutorialSidebar",previous:{title:"pm",permalink:"/bot/reference/telegram/screeners/scr/pm"},next:{title:"short_data",permalink:"/bot/reference/telegram/short_data/"}},i={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},m="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"screeners: screener - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve stock screener results according to the chosen technical signal."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/screener signal\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"signal"),(0,a.kt)("td",{parentName:"tr",align:null},"Screener Signal"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"1 : Top Gainers, 2 : Top Losers, 3 : Most Active, 4 : Most Volatile, 5 : Relative Volatility, 6 : Golden Cross, 7 : Death Cross, 8 : New 52week High, 9 : New 52week Low, 10 : Unusual Volume")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/screener 0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/screener 4\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);