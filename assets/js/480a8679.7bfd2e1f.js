"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45888],{54486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453),a=n(94331);const s={title:"pick",description:"This page provides detailed information on how to use the 'pick' function for changing the target variable for analysis. It includes usage instructions, the various parameters used, and specific examples dealing primarily with stock analysis.",keywords:["target variable change","usage of pick","parameters of pick","examples of pick","stock analysis"]},o=void 0,c={id:"terminal/reference/forex/qa/pick",title:"pick",description:"This page provides detailed information on how to use the 'pick' function for changing the target variable for analysis. It includes usage instructions, the various parameters used, and specific examples dealing primarily with stock analysis.",source:"@site/content/terminal/reference/forex/qa/pick.md",sourceDirName:"terminal/reference/forex/qa",slug:"/terminal/reference/forex/qa/pick",permalink:"/terminal/reference/forex/qa/pick",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/qa/pick.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"pick",description:"This page provides detailed information on how to use the 'pick' function for changing the target variable for analysis. It includes usage instructions, the various parameters used, and specific examples dealing primarily with stock analysis.",keywords:["target variable change","usage of pick","parameters of pick","examples of pick","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"normality",permalink:"/terminal/reference/forex/qa/normality"},next:{title:"qqplot",permalink:"/terminal/reference/forex/qa/qqplot"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"forex/qa/pick - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Change target variable"}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"pick [-t {Open,High,Low,Close,Adj Close,Volume,date_id,OC_High,OC_Low,Returns,LogRet}]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"target"}),(0,i.jsx)(t.td,{children:"Select variable to analyze"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"Open, High, Low, Close, Adj Close, Volume, date_id, OC_High, OC_Low, Returns, LogRet"})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:12\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ pick adjclose\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);