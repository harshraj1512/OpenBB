"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54350],{99290:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(74848),t=i(28453),r=i(94331);const a={title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",keywords:["SEC form 4 filings","insider","insider trading","insider activity","stock screener","reporting","transactions","trade type","trade date"]},c=void 0,o={id:"terminal/menus/stocks/ins",title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",source:"@site/content/terminal/menus/stocks/ins.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/ins",permalink:"/terminal/menus/stocks/ins",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/ins.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",keywords:["SEC form 4 filings","insider","insider trading","insider activity","stock screener","reporting","transactions","trade type","trade date"]},sidebar:"tutorialSidebar",previous:{title:"Government",permalink:"/terminal/menus/stocks/gov"},next:{title:"Options",permalink:"/terminal/menus/stocks/options"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Screening",id:"screening",level:3},{value:"Set",id:"set",level:4},{value:"Filter",id:"filter",level:4},{value:"Scanning",id:"scanning",level:3},{value:"toppw",id:"toppw",level:4},{value:"Researching",id:"researching",level:3},{value:"stats",id:"stats",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"Insider Trading - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:"The Insider Trading menu provides screener-like functions for SEC Form 4 filings, or for researching individual companies with executive and director transactions. The features in this menu function only for companies registered with the SEC, that also trade in public markets."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the Insider Trading submenu from the ",(0,s.jsx)(n.code,{children:"stocks"})," menu by typing ",(0,s.jsx)(n.code,{children:"ins"})," and pressing ",(0,s.jsx)(n.code,{children:"enter"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6e79a43c-f401-4519-a777-415c64581ddd",alt:"Screenshot 2023-11-01 at 12 46 13\u202fPM"})}),"\n",(0,s.jsx)(n.p,{children:"The menu can be entered with its absolute path:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/ins\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Insider Trading menu contains three groups of functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Screening: use presets to filter companies."}),"\n",(0,s.jsx)(n.li,{children:"Scanning: scan the latest transactions in the market."}),"\n",(0,s.jsx)(n.li,{children:"Researching: lookup individual companies."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"screening",children:"Screening"}),"\n",(0,s.jsxs)(n.p,{children:["Screening in this sub-menu uses a similar process to the ",(0,s.jsx)(n.a,{href:"/terminal/menus/stocks/screener",children:"Stocks Screener"}),".  This ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_terminal/miscellaneous/stocks/insider/template.ini",children:"template"})," file is a starting point, and describes how to configurea preset for use.  Follow the formatting instructions in the comments of the template file, then place this file in the OpenBBUserData folder: ",(0,s.jsx)(n.code,{children:"~/OpenBBUserData/presets/stocks/insider"}),".  Files placed in this folder will be recognized by the auto complete choices on next launch.  Changes to the settings (without altering the filename) will be reflected when the preset  is run, restarting the Terminal is not required."]}),"\n",(0,s.jsx)(n.h4,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(n.p,{children:["Set the preset to use by typing, ",(0,s.jsx)(n.code,{children:"set -p"}),", and then the spacebar will activated the choices from auto complete."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6eaea63a-bfff-47c3-be79-4a7df490f5c8",alt:"Screenshot 2023-11-01 at 1 17 55\u202fPM"})}),"\n",(0,s.jsx)(n.h4,{id:"filter",children:"Filter"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"filter"})," command runs the screen.  Use the ",(0,s.jsx)(n.code,{children:"--limit"})," parameter to increase the number of results returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"set -p Insurance-Agents\nfilter\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"A: Amended filing\nD: Derivative transaction in filing (usually option exercise)\nM: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price\nP - Purchase: Purchase of securities on an exchange or from another person\nS - Sale: Sale of securities on an exchange or to another person\nS - Sale+OE: Sale of securities on an exchange or to another person (after option exercise)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4793ef66-0e4e-46bd-886f-f6615058b4f6",alt:"Screenshot 2023-11-01 at 1 23 29\u202fPM"})}),"\n",(0,s.jsx)(n.h3,{id:"scanning",children:"Scanning"}),"\n",(0,s.jsx)(n.p,{children:'The commands grouped by both "Last Insiders" and "Top Insiders" filter market-wide by the description printed on the menu.'}),"\n",(0,s.jsx)(n.h4,{id:"toppw",children:"toppw"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toppw"})," returns the top officer purchases during the past week."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/ins/toppw\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/2caf277e-75e3-4f6a-90a5-0f92b449062c",alt:"Screenshot 2023-11-01 at 1 28 32\u202fPM"})}),"\n",(0,s.jsx)(n.h3,{id:"researching",children:"Researching"}),"\n",(0,s.jsxs)(n.p,{children:["The three functions grouped at the bottom are activated when the Insider Trading menu is entered with a ticker symbol loaded from the ",(0,s.jsx)(n.code,{children:"/stocks"})," menu."]}),"\n",(0,s.jsx)(n.h4,{id:"stats",children:"stats"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"stats"})," command shows the insider activity for a ticker."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/load rivn/ins/stats\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6028b97e-bea4-4d4e-85e1-3512c8004675",alt:"Screenshot 2023-11-01 at 1 41 29\u202fPM"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var s=i(5260),t=i(74848);function r(e){let{title:n}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:n})})}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);