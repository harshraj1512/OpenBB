"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71921],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(r),s=n,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||i;return r?a.createElement(k,l(l({ref:e},u),{},{components:r})):a.createElement(k,l({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(67294),n=r(35742);function i(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},89590:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"HISTORICAL",description:"Learn how to use the `obb.equity.price.historical` function to load historical price data for a specific stock ticker. Find out about the available parameters and providers, as well as the structure of the returned data and the columns it contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},o=void 0,d={unversionedId:"excel/reference/equity/price/historical",id:"excel/reference/equity/price/historical",title:"HISTORICAL",description:"Learn how to use the `obb.equity.price.historical` function to load historical price data for a specific stock ticker. Find out about the available parameters and providers, as well as the structure of the returned data and the columns it contains.",source:"@site/content/excel/reference/equity/price/historical.md",sourceDirName:"excel/reference/equity/price",slug:"/excel/reference/equity/price/historical",permalink:"/excel/reference/equity/price/historical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/price/historical.md",tags:[],version:"current",frontMatter:{title:"HISTORICAL",description:"Learn how to use the `obb.equity.price.historical` function to load historical price data for a specific stock ticker. Find out about the available parameters and providers, as well as the structure of the returned data and the columns it contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.PRICE",permalink:"/excel/reference/equity/price/"},next:{title:"NBBO",permalink:"/excel/reference/equity/price/nbbo"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:u},c="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"EQUITY.PRICE.HISTORICAL | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Equity Historical price. Load stock data for a specific ticker."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.PRICE.HISTORICAL(symbol,[interval],[start_date],[end_date],[provider],[limit],[sort],[start_time],[end_time],[timezone],[source],[sleep],[adjusted])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.PRICE.HISTORICAL("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Time interval of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon, tiingo, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back (Only for interval 1d). (provider: fmp); The number of results to return per page. (provider: intrinio); The number of data entries to return. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort the data in ascending or descending order. (provider: fmp); Sort order of the data. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Return intervals starting at the specified time on the ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," formatted as 'HH:MM:SS'. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Return intervals stopping at the specified time on the ",(0,n.kt)("inlineCode",{parentName:"td"},"end_date")," formatted as 'HH:MM:SS'. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timezone"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Timezone of the data, in the IANA format (Continent/City). (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The source of the data. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sleep"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Time to sleep between requests to avoid rate limiting. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adjusted"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Output time series is adjusted by historical split and dividend events. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"open"),(0,n.kt)("td",{parentName:"tr",align:null},"The open price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"high"),(0,n.kt)("td",{parentName:"tr",align:null},"The high price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"low"),(0,n.kt)("td",{parentName:"tr",align:null},"The low price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close"),(0,n.kt)("td",{parentName:"tr",align:null},"The close price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"The trading volume.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vwap"),(0,n.kt)("td",{parentName:"tr",align:null},"Volume Weighted Average Price over the period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"Human readable format of the date. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_close"),(0,n.kt)("td",{parentName:"tr",align:null},"The adjusted close price. (provider: fmp);     Adjusted closing price during the period. (provider: intrinio);     Adjusted closing price during the period. (provider: tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"unadjusted_volume"),(0,n.kt)("td",{parentName:"tr",align:null},"Unadjusted volume of the symbol. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in the price of the symbol from the previous day. (provider: fmp, intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_percent"),(0,n.kt)("td",{parentName:"tr",align:null},"Change % in the price of the symbol. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_over_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Change % in the price of the symbol over a period of time. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close_time"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp that represents the end of the interval span. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"The data time frequency. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average"),(0,n.kt)("td",{parentName:"tr",align:null},"Average trade price of an individual equity during the interval. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intra_period"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the equity price represents an unfinished period (be it day, week, quarter, month, or year), meaning that the close price is the latest price available, not the official close price for the period (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_open"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjusted open price during the period. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjusted high price during the period. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjusted low price during the period. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_volume"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjusted volume during the period. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"factor"),(0,n.kt)("td",{parentName:"tr",align:null},"factor by which to multiply equity prices before this date, in order to calculate historically-adjusted equity prices. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"split_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Ratio of the equity split, if a equity split occurred. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend amount, if a dividend was paid. (provider: intrinio, tiingo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"percent_change"),(0,n.kt)("td",{parentName:"tr",align:null},"Percent change in the price of the symbol from the previous day. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fifty_two_week_high"),(0,n.kt)("td",{parentName:"tr",align:null},"52 week high price for the symbol. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fifty_two_week_low"),(0,n.kt)("td",{parentName:"tr",align:null},"52 week low price for the symbol. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transactions"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of transactions for the symbol in the time period. (provider: polygon)")))))}s.isMDXComponent=!0}}]);