"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56675],{71815:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=o(74848),n=o(28453),i=o(94331);const l={title:"trackerr",description:"The 'trackerr' method in openbb.portfolio.metric provides tracking errors over different time windows for a given portfolio. It uses the PortfolioEngine instance and has an optional window parameter for rolling values. You need to call portfolio.load to create a PortfolioEngine instance.",keywords:["trackerr","PortfolioEngine","tracking errors","openbb portfolio","portfolio metrics","Portfolio calculation","python portfolio","openbb_terminal.sdk","openbb portfolio load","openbb portfolio metric","Finance portfolio"]},s=void 0,a={id:"sdk/reference/portfolio/metric/trackerr",title:"trackerr",description:"The 'trackerr' method in openbb.portfolio.metric provides tracking errors over different time windows for a given portfolio. It uses the PortfolioEngine instance and has an optional window parameter for rolling values. You need to call portfolio.load to create a PortfolioEngine instance.",source:"@site/content/sdk/reference/portfolio/metric/trackerr.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/trackerr",permalink:"/sdk/reference/portfolio/metric/trackerr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/trackerr.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"trackerr",description:"The 'trackerr' method in openbb.portfolio.metric provides tracking errors over different time windows for a given portfolio. It uses the PortfolioEngine instance and has an optional window parameter for rolling values. You need to call portfolio.load to create a PortfolioEngine instance.",keywords:["trackerr","PortfolioEngine","tracking errors","openbb portfolio","portfolio metrics","Portfolio calculation","python portfolio","openbb_terminal.sdk","openbb portfolio load","openbb portfolio metric","Finance portfolio"]},sidebar:"tutorialSidebar",previous:{title:"tail",permalink:"/sdk/reference/portfolio/metric/tail"},next:{title:"volatility",permalink:"/sdk/reference/portfolio/metric/volatility"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"portfolio.metric.trackerr - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(r.p,{children:"Get tracking error"}),"\n",(0,t.jsxs)(r.p,{children:["Source Code: [",(0,t.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1344",children:"link"}),"]"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"openbb.portfolio.metric.trackerr(portfolio_engine: portfolio_engine.PortfolioEngine, window: int = 252)\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Optional"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"portfolio_engine"}),(0,t.jsx)(r.td,{children:"PortfolioEngine"}),(0,t.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,t.jsx)("br",{}),"Use ",(0,t.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"window"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Interval used for rolling values"}),(0,t.jsx)(r.td,{children:"252"}),(0,t.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pd.DataFrame"}),(0,t.jsx)(r.td,{children:"DataFrame of tracking errors during different time windows"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.trackerr(p)\n'})}),"\n",(0,t.jsx)(r.hr,{})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,r,o)=>{o.d(r,{A:()=>i});o(96540);var t=o(5260),n=o(74848);function i(e){let{title:r}=e;return(0,n.jsx)(t.A,{children:(0,n.jsx)("title",{children:r})})}},28453:(e,r,o)=>{o.d(r,{R:()=>l,x:()=>s});var t=o(96540);const n={},i=t.createContext(n);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);