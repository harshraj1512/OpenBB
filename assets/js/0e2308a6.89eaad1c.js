"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5498],{5585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=t(74848),r=t(28453),a=t(94331);const d={title:"oanda",description:"This page explains how to set the Oanda key using the OpenBB Terminal. It includes parameters and examples.",keywords:["oanda","set key","parameters","examples","account","access token","account type","persist","show output"]},c=void 0,l={id:"sdk/reference/keys/oanda",title:"oanda",description:"This page explains how to set the Oanda key using the OpenBB Terminal. It includes parameters and examples.",source:"@site/content/sdk/reference/keys/oanda.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/oanda",permalink:"/sdk/reference/keys/oanda",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/oanda.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"oanda",description:"This page explains how to set the Oanda key using the OpenBB Terminal. It includes parameters and examples.",keywords:["oanda","set key","parameters","examples","account","access token","account type","persist","show output"]},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/reference/keys/news"},next:{title:"polygon",permalink:"/sdk/reference/keys/polygon"}},i={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"keys.oanda - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(n.p,{children:"Set Oanda key"}),"\n",(0,s.jsxs)(n.p,{children:["Source Code: [",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1387",children:"link"}),"]"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'openbb.keys.oanda(account: str, access_token: str, account_type: str = "", persist: bool = False, show_output: bool = False)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"User account"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"access_token"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"User token"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account_type"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"User account type"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"persist"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsxs)(n.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,s.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,s.jsx)("br",{}),"By default, False."]}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"show_output"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"Display status string or not. By default, False."}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"Status of key set"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.oanda(\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'account="example_account",\n        access_token="example_access_token",\n        account_type="example_account_type"\n    )\n'})}),"\n",(0,s.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(5260),r=t(74848);function a(e){let{title:n}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const r={},a=s.createContext(r);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);