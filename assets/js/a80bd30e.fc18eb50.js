"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35210],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>N});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var d=r.createContext({}),p=function(t){var a=r.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=p(t.components);return r.createElement(d.Provider,{value:a},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(e),k=n,N=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return e?r.createElement(N,i(i({ref:a},u),{},{components:e})):r.createElement(N,i({ref:a},u))}));function N(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,i=new Array(l);i[0]=k;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=e[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},85162:(t,a,e)=>{e.d(a,{Z:()=>i});var r=e(67294),n=e(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:a,hidden:e,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:e},a)}},31792:(t,a,e)=>{e.d(a,{Z:()=>_});var r=e(87462),n=e(67294),l=e(86010),i=e(12466),o=e(16550),d=e(91980),p=e(67392),u=e(50012);function m(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:a}=t;return!!a&&"object"==typeof a&&"value"in a}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:a,label:e,attributes:r,default:n}}=t;return{value:a,label:e,attributes:r,default:n}}))}function s(t){const{values:a,children:e}=t;return(0,n.useMemo)((()=>{const t=a??m(e);return function(t){const a=(0,p.l)(t,((t,a)=>t.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[a,e])}function k(t){let{value:a,tabValues:e}=t;return e.some((t=>t.value===a))}function N(t){let{queryString:a=!1,groupId:e}=t;const r=(0,o.k6)(),l=function(t){let{queryString:a=!1,groupId:e}=t;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return e??null}({queryString:a,groupId:e});return[(0,d._X)(l),(0,n.useCallback)((t=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,t),r.replace({...r.location,search:a.toString()})}),[l,r])]}function g(t){const{defaultValue:a,queryString:e=!1,groupId:r}=t,l=s(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:a,tabValues:e}=t;if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=e.find((t=>t.default))??e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[d,p]=N({queryString:e,groupId:r}),[m,g]=function(t){let{groupId:a}=t;const e=function(t){return t?`docusaurus.tab.${t}`:null}(a),[r,l]=(0,u.Nk)(e);return[r,(0,n.useCallback)((t=>{e&&l.set(t)}),[e,l])]}({groupId:r}),c=(()=>{const t=d??m;return k({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{c&&o(c)}),[c]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var c=e(72389);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:a,block:e,selectedValue:d,selectValue:p,tabValues:u}=t;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),{pathname:k}=(0,o.TH)(),N=t=>{const a=t.currentTarget,e=m.indexOf(a),r=u[e].value;r!==d&&(s(a),p(r))},g=t=>{let a=null;switch(t.key){case"Enter":N(t);break;case"ArrowRight":{const e=m.indexOf(t.currentTarget)+1;a=m[e]??m[0];break}case"ArrowLeft":{const e=m.indexOf(t.currentTarget)-1;a=m[e]??m[m.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((t=>{let{value:a,label:e,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:d===a?0:-1,"aria-selected":d===a,key:a,ref:t=>m.push(t),onKeyDown:g,onClick:N},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":d===a,"border-b-2 text-[#669dcb] border-[#669dcb]":d===a&&k.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===a&&k.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==a&&k.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===a&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==a&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==a&&k.startsWith("/terminal")})}),e??a)})))}function y(t){let{lazy:a,children:e,selectedValue:r}=t;if(e=Array.isArray(e)?e:[e],a){const t=e.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},e.map(((t,a)=>(0,n.cloneElement)(t,{key:a,hidden:t.props.value!==r}))))}function h(t){const a=g(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(b,(0,r.Z)({},t,a)),n.createElement(y,(0,r.Z)({},t,a)))}function _(t){const a=(0,c.Z)();return n.createElement(h,(0,r.Z)({key:String(a)},t))}},92274:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=e(87462),n=(e(67294),e(3905)),l=e(31792),i=e(85162);const o={title:"Financial Ratios",description:"Extensive set of ratios over time"},d=void 0,p={unversionedId:"platform/data_models/FinancialRatios",id:"platform/data_models/FinancialRatios",title:"Financial Ratios",description:"Extensive set of ratios over time",source:"@site/content/platform/data_models/FinancialRatios.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FinancialRatios",permalink:"/platform/data_models/FinancialRatios",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/FinancialRatios.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Financial Ratios",description:"Extensive set of ratios over time"},sidebar:"tutorialSidebar",previous:{title:"Fedfunds",permalink:"/platform/data_models/FEDFUNDS"},next:{title:"Fred Search",permalink:"/platform/data_models/FredSearch"}},u={},m=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],s={toc:m},k="wrapper";function N(t){let{components:a,...e}=t;return(0,n.kt)(k,(0,r.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h3",{id:"class-names"},"Class names"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Model name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,n.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatios")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatiosQueryParams")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatiosData"))))),(0,n.kt)("h3",{id:"import-statement"},"Import Statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models.financial_ratios import (\nFinancialRatiosData,\nFinancialRatiosQueryParams,\n)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp', 'intrinio']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(i.Z,{value:"intrinio",label:"intrinio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp', 'intrinio']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The specific fiscal year.  Reports do not go beyond 2008."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Period of the financial ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Fiscal year."))))),(0,n.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Period of the financial ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Fiscal year.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Current ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quick_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Quick ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_sales_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of sales outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_inventory_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of inventory outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cycle"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cycle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_payables_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of payables outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_conversion_cycle"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash conversion cycle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gross_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Gross profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pretax_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Pretax profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Net profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"effective_tax_rate"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Effective tax rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on equity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_capital_employed"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on capital employed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_income_per_ebt"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Net income per EBT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ebt_per_ebit"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"EBT per EBIT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ebit_per_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"EBIT per revenue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_equity_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt equity ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"long_term_debt_to_capitalization"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Long term debt to capitalization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total_debt_to_capitalization"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Total debt to capitalization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_coverage"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest coverage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_flow_to_debt_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash flow to debt ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"company_equity_multiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Company equity multiplier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receivables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Receivables turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Payables turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inventory_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Inventory turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fixed_asset_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Fixed asset turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Asset turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payout_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Payout ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_operating_cash_flow_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow operating cash flow ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_flow_coverage_ratios"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash flow coverage ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"short_term_coverage_ratios"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Short term coverage ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capital_expenditure_coverage_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditure coverage ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_paid_and_capex_coverage_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend paid and capex coverage ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_payout_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend payout ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_book_value_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price book value ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_book_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to book ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_earnings_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price earnings ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_free_cash_flows_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to free cash flows ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_operating_cash_flows_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to operating cash flows ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_cash_flow_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price cash flow ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_earnings_to_growth_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price earnings to growth ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield percentage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value_multiple"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value multiple.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_fair_value"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price fair value.")))))))}N.isMDXComponent=!0}}]);