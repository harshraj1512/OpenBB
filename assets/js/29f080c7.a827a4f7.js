"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14972],{7968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(74848),s=n(28453),a=n(94331);const r={title:"pick",description:"This page explains the usage of the load command for loading a FRED series to the current selection. This is useful for analyzing stock market data with various parameters such as Open, High, Low, Close, Adj Close, Volume, etc.",keywords:["FRED series","load command","Stocks analysis","TSLA","Python commands","Stock market","Market data","Open, High, Low, Close","Adj Close, Volume","date_id, OC_High, OC_Low","Returns, LogRet"]},i=void 0,l={id:"terminal/reference/economy/qa/pick",title:"pick",description:"This page explains the usage of the load command for loading a FRED series to the current selection. This is useful for analyzing stock market data with various parameters such as Open, High, Low, Close, Adj Close, Volume, etc.",source:"@site/content/terminal/reference/economy/qa/pick.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/pick",permalink:"/terminal/reference/economy/qa/pick",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/pick.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"pick",description:"This page explains the usage of the load command for loading a FRED series to the current selection. This is useful for analyzing stock market data with various parameters such as Open, High, Low, Close, Adj Close, Volume, etc.",keywords:["FRED series","load command","Stocks analysis","TSLA","Python commands","Stock market","Market data","Open, High, Low, Close","Adj Close, Volume","date_id, OC_High, OC_Low","Returns, LogRet"]},sidebar:"tutorialSidebar",previous:{title:"normality",permalink:"/terminal/reference/economy/qa/normality"},next:{title:"qqplot",permalink:"/terminal/reference/economy/qa/qqplot"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{title:"economy/qa/pick - Reference | OpenBB Terminal Docs"}),"\n",(0,o.jsx)(t.p,{children:"Load a FRED series to current selection"}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"load [-c {Open,High,Low,Close,Adj Close,Volume,date_id,OC_High,OC_Low,Returns,LogRet}]\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"}),(0,o.jsx)(t.th,{children:"Choices"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"column"}),(0,o.jsx)(t.td,{children:"Which loaded source to get data from"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"Open, High, Low, Close, Adj Close, Volume, date_id, OC_High, OC_Low, Returns, LogRet"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:12\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ pick adjclose\n"})}),"\n",(0,o.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(5260),s=n(74848);function a(e){let{title:t}=e;return(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);