"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54456],{59158:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=t(74848),r=t(28453),i=t(94331);const l={title:"load",description:"This page provides detailed documentation for the 'load' function of the OpenBB portfolio optimization engine. It includes source code, parameters detail, return type, and coding examples.",keywords:["portfolio optimization","po.load function","OpenBB portfolio","PoEngine","openbb_terminal.sdk","coding examples","software documentation","parameters detail","portfolio allocation","AAPL","MSFT","AMZN","Python code"]},s=void 0,d={id:"sdk/reference/portfolio/po/load",title:"load",description:"This page provides detailed documentation for the 'load' function of the OpenBB portfolio optimization engine. It includes source code, parameters detail, return type, and coding examples.",source:"@site/content/sdk/reference/portfolio/po/load.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/load",permalink:"/sdk/reference/portfolio/po/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/load.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"load",description:"This page provides detailed documentation for the 'load' function of the OpenBB portfolio optimization engine. It includes source code, parameters detail, return type, and coding examples.",keywords:["portfolio optimization","po.load function","OpenBB portfolio","PoEngine","openbb_terminal.sdk","coding examples","software documentation","parameters detail","portfolio allocation","AAPL","MSFT","AMZN","Python code"]},sidebar:"tutorialSidebar",previous:{title:"hrp",permalink:"/sdk/reference/portfolio/po/hrp"},next:{title:"load_bl_views",permalink:"/sdk/reference/portfolio/po/load_bl_views"}},a={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.po.load - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(o.p,{children:"Load portfolio optimization engine"}),"\n",(0,n.jsxs)(o.p,{children:["Source Code: [",(0,n.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L61",children:"link"}),"]"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.po.load(symbols: List[str] = None, symbols_file_path: str = None, parameters_file_path: str = None)\n"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Name"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"}),(0,n.jsx)(o.th,{children:"Default"}),(0,n.jsx)(o.th,{children:"Optional"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"symbols"}),(0,n.jsx)(o.td,{children:"List[str]"}),(0,n.jsx)(o.td,{children:"List of symbols, by default None"}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"True"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"symbols_file_path"}),(0,n.jsx)(o.td,{children:"str"}),(0,n.jsx)(o.td,{children:"Symbols file full path, by default None"}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"True"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"parameters_file_path"}),(0,n.jsx)(o.td,{children:"str"}),(0,n.jsx)(o.td,{children:"Parameters file full path, by default None"}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"PoEngine"}),(0,n.jsx)(o.td,{children:"Portfolio optimization engine"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols=["AAPL", "MSFT", "AMZN"])\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\n'})}),"\n",(0,n.jsx)(o.hr,{})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},94331:(e,o,t)=>{t.d(o,{A:()=>i});t(96540);var n=t(5260),r=t(74848);function i(e){let{title:o}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:o})})}},28453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>s});var n=t(96540);const r={},i=n.createContext(r);function l(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);