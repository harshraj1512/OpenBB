"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42970],{37939:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(74848),r=i(28453),a=i(94331);const s={title:"UNUSUAL",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},l=void 0,o={id:"excel/reference/derivatives/options/unusual",title:"UNUSUAL",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",source:"@site/content/excel/reference/derivatives/options/unusual.md",sourceDirName:"excel/reference/derivatives/options",slug:"/excel/reference/derivatives/options/unusual",permalink:"/excel/reference/derivatives/options/unusual",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/derivatives/options/unusual.md",tags:[],version:"current",frontMatter:{title:"UNUSUAL",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},sidebar:"tutorialSidebar",previous:{title:"CHAINS",permalink:"/excel/reference/derivatives/options/chains"},next:{title:"ECONOMY",permalink:"/excel/reference/economy/"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"DERIVATIVES.OPTIONS.UNUSUAL | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the complete options chain for a ticker."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.DERIVATIVES.OPTIONS.UNUSUAL([symbol],[provider],[start_date],[end_date],[trade_type],[sentiment],[min_value],[max_value],[limit],[source])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.DERIVATIVES.OPTIONS.UNUSUAL("TSLA","intrinio")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. (the underlying symbol)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Options: intrinio, defaults to intrinio."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format. If no symbol is supplied, requests are only allowed for a single date. Use the start_date for the target date. Intrinio appears to have data beginning Feb/2022, but is unclear when it actually began. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format. If a symbol is not supplied, do not include an end date. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trade_type"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"The type of unusual activity to query for. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sentiment"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"The sentiment type to query for. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_value"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The inclusive minimum total value for the unusual activity. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_value"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The inclusive maximum total value for the unusual activity. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return. A typical day for all symbols will yield 50-80K records. The API will paginate at 1000 records. The high default limit (100K) is to be able to reliably capture the most days. The high absolute limit (1.25M) is to allow for outlier days. Queries at the absolute limit will take a long time, and might be unreliable. Apply filters to improve performance. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"The source of the data. Either realtime or delayed. (provider: intrinio)"}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(5260),r=i(74848);function a(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);