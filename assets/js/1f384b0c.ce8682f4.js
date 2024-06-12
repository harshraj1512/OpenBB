"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12562],{60447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(74848),i=n(28453),o=n(94331);const s={title:"tail",description:"Documentation about the OpenBB terminal's 'tail' function. The function retrieves the tail ratio of portfolios, handling transactions and performing calculations. Also gives details about its parameters, return types, and example usage.",keywords:["OpenBB terminal","tail function","PortfolioEngine class instance","portfolio metrics","transactions","calculations","tail ratio"]},l=void 0,a={id:"sdk/reference/portfolio/metric/tail",title:"tail",description:"Documentation about the OpenBB terminal's 'tail' function. The function retrieves the tail ratio of portfolios, handling transactions and performing calculations. Also gives details about its parameters, return types, and example usage.",source:"@site/content/sdk/reference/portfolio/metric/tail.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/tail",permalink:"/sdk/reference/portfolio/metric/tail",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/tail.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"tail",description:"Documentation about the OpenBB terminal's 'tail' function. The function retrieves the tail ratio of portfolios, handling transactions and performing calculations. Also gives details about its parameters, return types, and example usage.",keywords:["OpenBB terminal","tail function","PortfolioEngine class instance","portfolio metrics","transactions","calculations","tail ratio"]},sidebar:"tutorialSidebar",previous:{title:"sortino",permalink:"/sdk/reference/portfolio/metric/sortino"},next:{title:"trackerr",permalink:"/sdk/reference/portfolio/metric/trackerr"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"portfolio.metric.tail - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get tail ratio"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1411",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.tail(portfolio_engine: portfolio_engine.PortfolioEngine, window: int = 252)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"portfolio_engine"}),(0,r.jsx)(t.td,{children:"PortfolioEngine"}),(0,r.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"window"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Interval used for rolling values"}),(0,r.jsx)(t.td,{children:"252"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrame of the portfolios and the benchmarks tail ratio during different time windows"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.tail(p)\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),i=n(74848);function o(e){let{title:t}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);