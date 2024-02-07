"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80233],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>N});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),o=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=o(r),k=a,N=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(N,i(i({ref:e},d),{},{components:r})):n.createElement(N,i({ref:e},d))}));function N(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},2399:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"REFERENCE_RATES",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},p=void 0,u={unversionedId:"excel/reference/currency/reference_rates",id:"excel/reference/currency/reference_rates",title:"REFERENCE_RATES",description:"Current, official, currency reference rates",source:"@site/content/excel/reference/currency/reference_rates.md",sourceDirName:"excel/reference/currency",slug:"/excel/reference/currency/reference_rates",permalink:"/excel/reference/currency/reference_rates",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/currency/reference_rates.md",tags:[],version:"current",frontMatter:{title:"REFERENCE_RATES",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},sidebar:"tutorialSidebar",previous:{title:"HISTORICAL",permalink:"/excel/reference/currency/price/historical"},next:{title:"SEARCH",permalink:"/excel/reference/currency/search"}},o={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},c="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"CURRENCY.REFERENCE_RATES | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Current, official, currency reference rates."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CURRENCY.REFERENCE_RATES([provider])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CURRENCY.REFERENCE_RATES()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: ecb, defaults to ecb."),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EUR"),(0,a.kt)("td",{parentName:"tr",align:null},"Euro.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USD"),(0,a.kt)("td",{parentName:"tr",align:null},"US Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JPY"),(0,a.kt)("td",{parentName:"tr",align:null},"Japanese Yen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BGN"),(0,a.kt)("td",{parentName:"tr",align:null},"Bulgarian Lev.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CZK"),(0,a.kt)("td",{parentName:"tr",align:null},"Czech Koruna.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DKK"),(0,a.kt)("td",{parentName:"tr",align:null},"Danish Krone.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GBP"),(0,a.kt)("td",{parentName:"tr",align:null},"Pound Sterling.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HUF"),(0,a.kt)("td",{parentName:"tr",align:null},"Hungarian Forint.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PLN"),(0,a.kt)("td",{parentName:"tr",align:null},"Polish Zloty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RON"),(0,a.kt)("td",{parentName:"tr",align:null},"Romanian Leu.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SEK"),(0,a.kt)("td",{parentName:"tr",align:null},"Swedish Krona.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHF"),(0,a.kt)("td",{parentName:"tr",align:null},"Swiss Franc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ISK"),(0,a.kt)("td",{parentName:"tr",align:null},"Icelandic Krona.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NOK"),(0,a.kt)("td",{parentName:"tr",align:null},"Norwegian Krone.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TRY"),(0,a.kt)("td",{parentName:"tr",align:null},"Turkish Lira.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUD"),(0,a.kt)("td",{parentName:"tr",align:null},"Australian Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BRL"),(0,a.kt)("td",{parentName:"tr",align:null},"Brazilian Real.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CAD"),(0,a.kt)("td",{parentName:"tr",align:null},"Canadian Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CNY"),(0,a.kt)("td",{parentName:"tr",align:null},"Chinese Yuan.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HKD"),(0,a.kt)("td",{parentName:"tr",align:null},"Hong Kong Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDR"),(0,a.kt)("td",{parentName:"tr",align:null},"Indonesian Rupiah.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ILS"),(0,a.kt)("td",{parentName:"tr",align:null},"Israeli Shekel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INR"),(0,a.kt)("td",{parentName:"tr",align:null},"Indian Rupee.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"KRW"),(0,a.kt)("td",{parentName:"tr",align:null},"South Korean Won.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MXN"),(0,a.kt)("td",{parentName:"tr",align:null},"Mexican Peso.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYR"),(0,a.kt)("td",{parentName:"tr",align:null},"Malaysian Ringgit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NZD"),(0,a.kt)("td",{parentName:"tr",align:null},"New Zealand Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PHP"),(0,a.kt)("td",{parentName:"tr",align:null},"Philippine Peso.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SGD"),(0,a.kt)("td",{parentName:"tr",align:null},"Singapore Dollar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"THB"),(0,a.kt)("td",{parentName:"tr",align:null},"Thai Baht.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ZAR"),(0,a.kt)("td",{parentName:"tr",align:null},"South African Rand.")))))}k.isMDXComponent=!0}}]);