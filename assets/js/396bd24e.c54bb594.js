"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75616],{60818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=r(74848),o=r(28453),i=r(94331),s=r(18228),a=r(19365);const l={title:"pr",description:"The documentation explains how to leverage APIs for calculating and comparing potential returns of cryptocurrencies. It details requirements and parameters for two functions - fetching data for potential returns calculation and function to record these returns.",keywords:["cryptocurrency","potential returns","coin comparison","fetch data","APIs usage","python functions","coin calculation","pr model","pr chart","CoinGecko source"]},c=void 0,d={id:"sdk/reference/crypto/dd/pr",title:"pr",description:"The documentation explains how to leverage APIs for calculating and comparing potential returns of cryptocurrencies. It details requirements and parameters for two functions - fetching data for potential returns calculation and function to record these returns.",source:"@site/content/sdk/reference/crypto/dd/pr.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/pr",permalink:"/sdk/reference/crypto/dd/pr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/dd/pr.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"pr",description:"The documentation explains how to leverage APIs for calculating and comparing potential returns of cryptocurrencies. It details requirements and parameters for two functions - fetching data for potential returns calculation and function to record these returns.",keywords:["cryptocurrency","potential returns","coin comparison","fetch data","APIs usage","python functions","coin calculation","pr model","pr chart","CoinGecko source"]},sidebar:"tutorialSidebar",previous:{title:"pi",permalink:"/sdk/reference/crypto/dd/pi"},next:{title:"ps",permalink:"/sdk/reference/crypto/dd/ps"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto.dd.pr - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Fetch data to calculate potential returns of a certain coin. [Source: CoinGecko]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L63",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.crypto.dd.pr(main_coin: str, to_symbol: Optional[str] = None, limit: Optional[int] = None, price: Optional[int] = None)\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"main_coin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Coin loaded to check potential returns for (e.g., algorand)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"to_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Coin to compare main_coin with (e.g., bitcoin)"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Number of coins with highest market cap to compare main_coin with (e.g., 5)"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Target price of main_coin to check potential returns (e.g., 5)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsxs)(t.td,{children:["Potential returns data",(0,n.jsx)("br",{}),"Columns: Coin, Current Price, Target Coin, Potential Price, Potential Market Cap ($), Change (%)"]})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Prints table showing potential returns of a certain coin. [Source: CoinGecko]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_view.py#L20",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.crypto.dd.pr_chart(to_symbol: str, from_symbol: Optional[str] = None, limit: Optional[int] = None, price: Optional[int] = None, export: str = "")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"to_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Coin loaded to check potential returns for (e.g., algorand)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"from_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Coin to compare main_coin with (e.g., bitcoin)"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Number of coins with highest market cap to compare main_coin with (e.g., 5)"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"Target price of main_coin to check potential returns (e.g., 5)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const o={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),o=r(74848);function i(e){let{title:t}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),o=r(34164),i=r(23104),s=r(56347),a=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=x({queryString:r,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),o=l[r].value;o!==n&&(d(t),a(o))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...i,className:(0,o.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:o}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function k(e){const t=(0,m.A)();return(0,j.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);