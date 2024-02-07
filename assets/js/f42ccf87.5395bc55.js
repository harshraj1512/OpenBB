"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(f,u(u({ref:t},d),{},{components:r})):n.createElement(f,u({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,u),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),l=r(86010),u=r(12466),i=r(16550),o=r(91980),s=r(67392),d=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=r(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),{pathname:m}=(0,i.TH)(),f=e=>{const t=e.currentTarget,r=p.indexOf(t),n=d[r].value;n!==o&&(c(t),s(n))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:f},u,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,u?.className,{"border-b-2 pointer-events-none":o===t,"border-b-2 text-[#669dcb] border-[#669dcb]":o===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==t&&m.startsWith("/terminal")})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},46627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(88828),u=r(31792),i=r(85162);const o={title:"revenue_per_segment",description:"Learn how to get revenue data for a specific business line using the equity fundamental revenue per segment function.",keywords:["Revenue Business Line","business line revenue data","equity fundamental revenue per segment","symbol","period","structure","provider","results","RevenueBusinessLine","chart","metadata","data","date","business line"]},s=void 0,d={unversionedId:"platform/reference/equity/fundamental/revenue_per_segment",id:"platform/reference/equity/fundamental/revenue_per_segment",title:"revenue_per_segment",description:"Learn how to get revenue data for a specific business line using the equity fundamental revenue per segment function.",source:"@site/content/platform/reference/equity/fundamental/revenue_per_segment.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/revenue_per_segment",permalink:"/platform/reference/equity/fundamental/revenue_per_segment",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/revenue_per_segment.md",tags:[],version:"current",frontMatter:{title:"revenue_per_segment",description:"Learn how to get revenue data for a specific business line using the equity fundamental revenue per segment function.",keywords:["Revenue Business Line","business line revenue data","equity fundamental revenue per segment","symbol","period","structure","provider","results","RevenueBusinessLine","chart","metadata","data","date","business line"]},sidebar:"tutorialSidebar",previous:{title:"revenue_per_geography",permalink:"/platform/reference/equity/fundamental/revenue_per_geography"},next:{title:"search_attributes",permalink:"/platform/reference/equity/fundamental/search_attributes"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],m={toc:c},f="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"equity /fundamental/revenue_per_segment - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Revenue Business Line. Business line revenue data."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.equity.fundamental.revenue_per_segment(symbol="AAPL", period="annual", structure="flat")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['quarter', 'annual']"),(0,a.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,a.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"structure"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['hierarchical', 'flat']"),(0,a.kt)("td",{parentName:"tr",align:null},"Structure of the returned data."),(0,a.kt)("td",{parentName:"tr",align:null},'"flat"'),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,a.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,a.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,a.kt)("td",{parentName:"tr",align:null},"True")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[RevenueBusinessLine]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra: Dict[str, Any]\n        Extra info.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['openbb']"),(0,a.kt)("td",{parentName:"tr",align:null},"The data provider for the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The fiscal period of the reporting period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The fiscal year of the reporting period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"The filing date of the report.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"business_line"),(0,a.kt)("td",{parentName:"tr",align:null},"Dict[str, Annotated","[int, BeforeValidator(func=<function check_int at 0x7f10fbb99550>)]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Dictionary containing the revenue of the business line.")))))))}b.isMDXComponent=!0}}]);