"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65701],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(a),s=r,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},33211:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},o=void 0,p={unversionedId:"excel/reference/equity/profile",id:"excel/reference/equity/profile",title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",source:"@site/content/excel/reference/equity/profile.md",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/profile",permalink:"/excel/reference/equity/profile",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/profile.md",tags:[],version:"current",frontMatter:{title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},sidebar:"tutorialSidebar",previous:{title:"MARKET_SNAPSHOTS",permalink:"/excel/reference/equity/market_snapshots"},next:{title:"SCREENER",permalink:"/excel/reference/equity/screener"}},m={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],c={toc:d},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"EQUITY.PROFILE | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Equity Info. Get general price and performance metrics of a stock."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.PROFILE(symbol,[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.PROFILE("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: intrinio, defaults to intrinio."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Common name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lei"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal Entity Identifier assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Official legal name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock exchange where the company is traded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sic"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Industrial Classification code for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Short description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Long description of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ceo"),(0,r.kt)("td",{parentName:"tr",align:null},"Chief Executive Officer of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the company's website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mailing_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Mailing address of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"business_phone_no"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address1"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address2"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_city"),(0,r.kt)("td",{parentName:"tr",align:null},"City of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_address_postal_code"),(0,r.kt)("td",{parentName:"tr",align:null},"Zip code of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hq_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of the company's headquarters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_state"),(0,r.kt)("td",{parentName:"tr",align:null},"State in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inc_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country in which the company is incorporated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employees"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of employees working for the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_legal_form"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal form of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest_filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's latest filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"irs_number"),(0,r.kt)("td",{parentName:"tr",align:null},"IRS number assigned to the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sector"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,r.kt)("td",{parentName:"tr",align:null},"Group of industry in which the company operates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template"),(0,r.kt)("td",{parentName:"tr",align:null},"Template used to standardize the company's financial statements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"standardized_active"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the company is active or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_fundamental_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last fundamental.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's first stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_stock_price_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the company's last stock price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Intrinio ID for the company. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thea_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the company has been enabled for Thea. (provider: intrinio)")))))}s.isMDXComponent=!0}}]);