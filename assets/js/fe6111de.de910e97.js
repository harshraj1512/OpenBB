"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28529],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=p(a),h=n,g=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(g,i(i({ref:e},d),{},{components:a})):r.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(35742);function o(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},10638:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const i={title:"Commitment of Traders",sidebar_position:7,description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly.  This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",keywords:["futures","commodities","index","indices","positioning","dealer","hedge","open interest","Nasdaq DataLink","CFTC","commitment of traders","COT","Treasury Note","currency","currencies","equity"]},l=void 0,s={unversionedId:"platform/usage/commitment_of_traders",id:"platform/usage/commitment_of_traders",title:"Commitment of Traders",description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly.  This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",source:"@site/content/platform/usage/commitment_of_traders.md",sourceDirName:"platform/usage",slug:"/platform/usage/commitment_of_traders",permalink:"/platform/usage/commitment_of_traders",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/commitment_of_traders.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:7,frontMatter:{title:"Commitment of Traders",sidebar_position:7,description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly.  This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",keywords:["futures","commodities","index","indices","positioning","dealer","hedge","open interest","Nasdaq DataLink","CFTC","commitment of traders","COT","Treasury Note","currency","currencies","equity"]},sidebar:"tutorialSidebar",previous:{title:"Financial Statements",permalink:"/platform/usage/financial_statements"},next:{title:"OpenBB Platform Reference",permalink:"/platform/reference/"}},p={},d=[{value:"Regulators Module",id:"regulators-module",level:2},{value:"COT Search",id:"cot-search",level:3},{value:"COT Reports",id:"cot-reports",level:3},{value:"Parameters",id:"parameters",level:3},{value:"<code>data_type</code>",id:"data_type",level:4},{value:"<code>legacy_format</code>",id:"legacy_format",level:4},{value:"<code>report_type</code>",id:"report_type",level:4},{value:"Major Markets for Which the COT Data Is Shown by Crop Year",id:"major-markets-for-which-the-cot-data-is-shown-by-crop-year",level:4},{value:"<code>measure</code>",id:"measure",level:4},{value:"<code>transform</code>",id:"transform",level:4}],m={toc:d},c="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Commitment of Traders - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Commitment of Traders (COT) reports are published on Fridays, by the ",(0,n.kt)("a",{parentName:"p",href:"https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm"},"CFTC"),". CFTC COT reports provide a breakdown of each Tuesday\u2019s open interest for futures and options on futures markets in which 20 or more traders hold positions equal to or above the reporting levels established by the CFTC."),(0,n.kt)("h2",{id:"regulators-module"},"Regulators Module"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"obb.regulators")," module contains data published by industry regulators and agencies. The data will not be specific to any particular asset class, and the information is available to the general public. The COT reports have two end points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"obb.regulators.cftc.cot()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"obb.regulators.cfc.cot_search()"))),(0,n.kt)("p",null,"While the data is public and available directly from the CFTC website, ",(0,n.kt)("a",{parentName:"p",href:"https://data.nasdaq.com/databases/CFTC"},"Nasdaq Data Link")," provides access to a parsed database with the complete history, of current and obsolete reports, that the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-nasdaq")," data provider connects to."),(0,n.kt)("h3",{id:"cot-search"},"COT Search"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"obb.regulators.cftc.cot_search()"),' end point is a curated list of the 100 most common reports. The list can be searched by fuzzy query - i.e., "commodities" - and they are classified under categories and subcategories. Get the whole list with an empty query.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"reports = obb.regulators.cftc.cot_search().to_df()\n")),(0,n.kt)("p",null,'The major US indices - S&P 500, Nasdaq 100, Dow Jones Industrial Average, Russell 1000 & 2000, VIX, Bloomberg Commodity Index, etc. - are categorized as "Index".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'reports[reports["category"] == "Index"]\n')),(0,n.kt)("h3",{id:"cot-reports"},"COT Reports"),(0,n.kt)("p",null,"There is a default report, Two-Year Treasury Note Futures, which has the code: ",(0,n.kt)("inlineCode",{parentName:"p"},"042601"),". Where available, like the two-year note, the futures continuation symbol (ZT=F) can be used instead of the code. The name can also be used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'zt = obb.regulators.cftc.cot("Two-Year Treasury Note Futures (CBT)").to_df()\n\nzt.iloc[-1]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"2023-11-14"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"open_interest"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4274379")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_long"),(0,n.kt)("td",{parentName:"tr",align:"right"},"427897")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_short"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1827558")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_spreads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"121573")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commercial_long"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3456965")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commercial_short"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2188950")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_long"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4006435")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_short"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4138081")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nonreportable_positions_long"),(0,n.kt)("td",{parentName:"tr",align:"right"},"267944")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nonreportable_positions_short"),(0,n.kt)("td",{parentName:"tr",align:"right"},"136297")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Look up reports not listed under ",(0,n.kt)("inlineCode",{parentName:"p"},"obb.regulators.cftc.cot_search()")," by using the Nasdaq Data Link code for the series. Refer to their documentation for a complete list.")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"There are parameters that will alter the type of report returned."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Not every combination of parameters is valid for all reports. An error will be raised when parameters are invalid.")),(0,n.kt)("h4",{id:"data_type"},(0,n.kt)("inlineCode",{parentName:"h4"},"data_type")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"data_type")," changes what is returned, futures or futures and options."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"F")," (futures only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"FO")," (futures and options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"CITS")," (Commodity Index Trader Supplemental - only valid for commodities.)"))),(0,n.kt)("p",null,"The Supplemental report includes 13 select agricultural commodity contracts for combined futures and options positions. Supplemental reports break down the reportable open interest positions into three trader classifications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Non-Commercial"),(0,n.kt)("li",{parentName:"ul"},"Commercial"),(0,n.kt)("li",{parentName:"ul"},"Index Traders")),(0,n.kt)("p",null,"The example below is the CITS report for corn futures."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'zc_cits =  obb.regulators.cftc.cot("ZC=F", data_type="CITS").to_df()\n\nzc_cits.iloc[-1]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"2023-11-14"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"open_interest_all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1837197")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_positions_long_all_no_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125917")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_positions_short_all_no_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"322629")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"noncommercial_positions_spreading_all_no_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"564330")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commercial_positions_long_all_no_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"591691")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commercial_positions_short_all_no_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"602447")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_reportable_positions_long_all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1635294")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_reportable_positions_short_all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1612623")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nonreportable_positions_long_all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"201904")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nonreportable_positions_short_all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"224575")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"positions_long_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"353355")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"positions_short_cit"),(0,n.kt)("td",{parentName:"tr",align:"right"},"123216")))),(0,n.kt)("h4",{id:"legacy_format"},(0,n.kt)("inlineCode",{parentName:"h4"},"legacy_format")),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"True"),", reports are broken down by exchange. These reports have a futures only report and a combined futures and options report. Legacy reports break down the reportable open interest positions into two classifications: non-commercial and commercial traders."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'legacy_zt = obb.regulators.cftc.cot("ZT=F", legacy_format=True).to_df()\n\nlegacy_zt.iloc[-1]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"2023-11-14"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"open_interest"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4274379")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dealer_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"138114")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dealer_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"367211")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dealer_spreads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37152")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asset_manager_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1893280")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asset_manager_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"504752")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asset_manager_spreads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"297009")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leveraged_funds_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"968702")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leveraged_funds_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2595004")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"leveraged_funds_spreads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"133108")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"other_reportable_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"507457")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"other_reportable_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"172232")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"other_reportable_spreads"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31614")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_reportable_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4006435")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total_reportable_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4138081")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"non_reportable_longs"),(0,n.kt)("td",{parentName:"tr",align:"right"},"267944")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"non_reportable_shorts"),(0,n.kt)("td",{parentName:"tr",align:"right"},"136298")))),(0,n.kt)("h4",{id:"report_type"},(0,n.kt)("inlineCode",{parentName:"h4"},"report_type")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"report_type")," parameter has four choices:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ALL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHG")," (change in positions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OLD"),"(old crop years)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OTR")," (other crop years)")),(0,n.kt)("p",null,'For selected commodities where there is a well-defined marketing season or crop year, the COT data are broken down by "old" and "other" crop years. The "Major Markets for Which the COT Data Is Shown by Crop Year" table (shown below) lists those commodities and the first and last futures of the marketing season or crop year. In order not to disclose positions in a single future near its expiration, on the first business day of the month of the last future in an "old" crop year, the data for that last future is combined with the data for the next crop year and is shown as "old" crop futures. An example is CBOT wheat, where the first month of the crop year is July and the last month of the prior crop year is May. On May 3, 2004, positions in the May 2004 futures month were aggregated with positions in the July 2004 through May 2005 futures months and shown as "old" crop futures. Positions in all subsequent wheat futures months were shown as "other."'),(0,n.kt)("p",null,'For the "old" and "other" figures, spreading is calculated for equal long and short positions within a crop year. If a non-commercial trader holds a long position in an "old" crop-year future and an equal short position in an "other" crop-year future, the long position will be classified as "long-only" in the "old" crop year and the short position will be classified as "short-only" in the "other" crop year. In this example, in the "all" category, which considers each trader\'s positions without regard to crop year, that trader\'s positions will be classified as "spreading." For this reason, summing the "old" and "other" figures for long-only, for short-only, or for spreading will not necessarily equal the corresponding figure shown for "all" futures. Any differences result from traders that spread from an "old" crop-year future to an "other" crop-year future.'),(0,n.kt)("h4",{id:"major-markets-for-which-the-cot-data-is-shown-by-crop-year"},"Major Markets for Which the COT Data Is Shown by Crop Year"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Market"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Commodity"),(0,n.kt)("th",{parentName:"tr",align:"center"},"First Future"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Last Future"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Wheat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"July"),(0,n.kt)("td",{parentName:"tr",align:"right"},"May")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Corn"),(0,n.kt)("td",{parentName:"tr",align:"center"},"December"),(0,n.kt)("td",{parentName:"tr",align:"right"},"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oats"),(0,n.kt)("td",{parentName:"tr",align:"center"},"July"),(0,n.kt)("td",{parentName:"tr",align:"right"},"May")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Soybeans"),(0,n.kt)("td",{parentName:"tr",align:"center"},"September"),(0,n.kt)("td",{parentName:"tr",align:"right"},"August")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Soybean Oil"),(0,n.kt)("td",{parentName:"tr",align:"center"},"October"),(0,n.kt)("td",{parentName:"tr",align:"right"},"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Soybean Meal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"October"),(0,n.kt)("td",{parentName:"tr",align:"right"},"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CBOT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Rough Rice"),(0,n.kt)("td",{parentName:"tr",align:"center"},"September"),(0,n.kt)("td",{parentName:"tr",align:"right"},"July")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KCBT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Wheat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"July"),(0,n.kt)("td",{parentName:"tr",align:"right"},"May")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MGE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Wheat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"September"),(0,n.kt)("td",{parentName:"tr",align:"right"},"July")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Lean Hogs"),(0,n.kt)("td",{parentName:"tr",align:"center"},"December"),(0,n.kt)("td",{parentName:"tr",align:"right"},"October")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Frozen Pork Bellies"),(0,n.kt)("td",{parentName:"tr",align:"center"},"February"),(0,n.kt)("td",{parentName:"tr",align:"right"},"August")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NYBT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Cocoa"),(0,n.kt)("td",{parentName:"tr",align:"center"},"December"),(0,n.kt)("td",{parentName:"tr",align:"right"},"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NYBT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Coffee C"),(0,n.kt)("td",{parentName:"tr",align:"center"},"December"),(0,n.kt)("td",{parentName:"tr",align:"right"},"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NYBT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Cotton No.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"October"),(0,n.kt)("td",{parentName:"tr",align:"right"},"July")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NYBT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Frozen Conc Orange Juice"),(0,n.kt)("td",{parentName:"tr",align:"center"},"January"),(0,n.kt)("td",{parentName:"tr",align:"right"},"November")))),(0,n.kt)("h4",{id:"measure"},(0,n.kt)("inlineCode",{parentName:"h4"},"measure")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"measure")," parameter has four choices, with ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," as the default state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CR")," (concentration ratios)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NT")," (number of traders)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OI")," (percent of open interest)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHG")," (change in positions - only valid for when ",(0,n.kt)("inlineCode",{parentName:"li"},"data_type")," is 'CITS')")),(0,n.kt)("p",null,'The report shows the percents of open interest held by the largest four and eight reportable traders, without regard to whether they are classified as commercial or non-commercial. The concentration ratios are shown with trader positions computed on a gross long and gross short basis and on a net long or net short basis. The "Net Position" ratios are computed after offsetting each trader\u2019s equal long and short positions. A reportable trader with relatively large, balanced long and short positions in a single market, therefore, may be among the four and eight largest traders in both the gross long and gross short categories, but will probably not be included among the four and eight largest traders on a net basis.'),(0,n.kt)("p",null,"Based on the information contained in the report of futures-and-options combined in the short format, the Supplemental report shows an additional category of \u201cIndex Traders\u201d in selected agricultural markets. These traders are drawn from the noncommercial and commercial categories. The noncommercial category includes positions of managed funds, pension funds, and other investors that are generally seeking exposure to a broad index of commodity prices as an asset class in an unleveraged and passively-managed manner. The commercial category includes positions for entities whose trading predominantly reflects hedging of over-the-counter transactions involving commodity indices\u2014for example, a swap dealer holding long futures positions to hedge a short commodity index exposure opposite institutional traders, such as pension funds."),(0,n.kt)("p",null,"All of these traders\u2014whether coming from the noncommercial or commercial categories\u2014are generally replicating a commodity index by establishing long futures positions in the component markets and then rolling those positions forward from future to future using a fixed methodology. Some traders assigned to the Index Traders category are engaged in other futures activity that could not be disaggregated. As a result, the Index Traders category, which is typically made up of traders with long-only futures positions replicating an index, will include some long and short positions where traders have multi-dimensional trading activities, the preponderance of which is index trading. Likewise, the Index Traders category will not include some traders who are engaged in index trading, but for whom it does not represent a substantial part of their overall trading activity."),(0,n.kt)("h4",{id:"transform"},(0,n.kt)("inlineCode",{parentName:"h4"},"transform")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"transform")," parameter modifies the requested report to show the values as the week-over-week difference, rate of change, cumulative, or normalized.  These are standard parameters for all Nasdaq Data Link queries."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"diff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rdiff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cumul")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"normalize"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Explanations in this page are from the explanatory notes on the CFTC's ",(0,n.kt)("a",{parentName:"p",href:"https://www.cftc.gov/MarketReports/CommitmentsofTraders/ExplanatoryNotes/index.htm"},"website"))))}h.isMDXComponent=!0}}]);