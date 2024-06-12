"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67914],{26549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=t(74848),i=t(28453),a=t(94331);const l={title:"Quick Start",sidebar_position:2,description:"This page is a quick start guide for the OpenBB Platform CLI.",keywords:["quickstart","quick start","tutorial","getting started","cli"]},r=void 0,d={id:"cli/quickstart",title:"Quick Start",description:"This page is a quick start guide for the OpenBB Platform CLI.",source:"@site/content/cli/quickstart.md",sourceDirName:"cli",slug:"/cli/quickstart",permalink:"/cli/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/cli/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_position:2,description:"This page is a quick start guide for the OpenBB Platform CLI.",keywords:["quickstart","quick start","tutorial","getting started","cli"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/cli/installation"},next:{title:"Structure and Navigation",permalink:"/cli/structure-and-navigation"}},o={},c=[{value:"Launch",id:"launch",level:2},{value:"Login",id:"login",level:2},{value:"Menus",id:"menus",level:2},{value:"Go Back One Level",id:"go-back-one-level",level:3},{value:"Go Back To Home",id:"go-back-to-home",level:3},{value:"Jump Between Menus",id:"jump-between-menus",level:3},{value:"Commands",id:"commands",level:2},{value:"How To Enter Parameters",id:"how-to-enter-parameters",level:3},{value:"Use Auto Complete",id:"use-auto-complete",level:3},{value:"Data Processing Commands",id:"data-processing-commands",level:3},{value:"Help Dialogues",id:"help-dialogues",level:2},{value:"Export Data",id:"export-data",level:2},{value:"Named File",id:"named-file",level:3},{value:"Unnamed File",id:"unnamed-file",level:3},{value:"Specify Sheet Name",id:"specify-sheet-name",level:3},{value:"Run Multiple Commands",id:"run-multiple-commands",level:2},{value:"Example Routine",id:"example-routine",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"Quick Start - Usage | OpenBB Platform CLI Docs"}),"\n",(0,s.jsx)(n.h2,{id:"launch",children:"Launch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open a Terminal and activate the environment where the ",(0,s.jsx)(n.code,{children:"openbb-cli"})," package was installed."]}),"\n",(0,s.jsxs)(n.li,{children:["On the command line, enter: ",(0,s.jsx)(n.code,{children:"openbb"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d1617c3b-c83d-4491-a7bc-986321fd7230",alt:"CLI Home"})}),"\n",(0,s.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,s.jsxs)(n.p,{children:["Login to your ",(0,s.jsx)(n.a,{href:"https://my.openbb.co",children:"OpenBB Hub account"})," to add stored keys to the session."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/account/login --pat REPLACE_WITH_YOUR_PAT\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:"--remember-me"})," to the command to persist the login until actively logging out."]})}),"\n",(0,s.jsx)(n.p,{children:"Login by email & password is also possible."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/account/login --email my@emailaddress.com --password n0Ts3CuR3L!kEPAT\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Find all data providers ",(0,s.jsx)(n.a,{href:"https://docs.openbb.co/platform/extensions/data_extensions",children:"here"}),", and manage all your credentials directly on the ",(0,s.jsx)(n.a,{href:"https://my.openbb.co/app/platform/credentials",children:"OpenBB Hub"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"menus",children:"Menus"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Menus are distinguishable from commands by the character, ",(0,s.jsx)(n.code,{children:">"}),", on the left of the screen."]})}),"\n",(0,s.jsx)(n.p,{children:"Enter a menu by typing it out and pressing return."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"economy\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b68491fc-d6c3-42a7-80db-bfe2aa848a5a",alt:"Economy Menu"})}),"\n",(0,s.jsx)(n.h3,{id:"go-back-one-level",children:"Go Back One Level"}),"\n",(0,s.jsx)(n.p,{children:"Return to the parent menu by entering either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"q"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"go-back-to-home",children:"Go Back To Home"}),"\n",(0,s.jsx)(n.p,{children:"Return to the base menu by entering either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"home"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"jump-between-menus",children:"Jump Between Menus"}),"\n",(0,s.jsx)(n.p,{children:"Use absolute paths to navigate from anywhere, to anywhere."}),"\n",(0,s.jsx)(n.p,{children:"From:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/equity/calendar/earnings\n"})}),"\n",(0,s.jsx)(n.p,{children:"To:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/economy/calendar\n"})}),"\n",(0,s.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(n.p,{children:["Commands are displayed on-screen in a lighter colour, compared with menu items, and they will not have, ",(0,s.jsx)(n.code,{children:">"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Functions have a variety of parameters that differ by endpoint and provider. Use the ",(0,s.jsx)(n.code,{children:"--help"})," dialogue to understand the nuances of any particular command."]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-enter-parameters",children:"How To Enter Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Parameters are all defined through the same pattern, ",(0,s.jsx)(n.code,{children:"--argument"}),", followed by a space, and then the value."]}),"\n",(0,s.jsxs)(n.p,{children:["If the parameter is a boolean (true/false), there is no value to enter. Adding the ",(0,s.jsx)(n.code,{children:"--argument"})," flags the parameter to be the opposite of its default state."]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"The use of positional arguments is not supported."}),(0,s.jsxs)(n.p,{children:["\u274c ",(0,s.jsx)(n.code,{children:"historical AAPL --start_date 2024-01-01"})]}),(0,s.jsxs)(n.p,{children:["\u2705 ",(0,s.jsx)(n.code,{children:"historical --symbol AAPL --start_date 2024-01-01"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"use-auto-complete",children:"Use Auto Complete"}),"\n",(0,s.jsx)(n.p,{children:"The auto completion engine is triggered when the spacebar is pressed following any command, or parameter with a defined set of choices."}),"\n",(0,s.jsxs)(n.p,{children:["After the first parameter has been set, remaining parameters will be triggered by entering ",(0,s.jsx)(n.code,{children:"--"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"historical --symbol AAPL --start_date 2024-01-01 --\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/78e68bbd-094e-4558-bce0-92b8d556fcaf",alt:"Auto Complete"})}),"\n",(0,s.jsx)(n.h3,{id:"data-processing-commands",children:"Data Processing Commands"}),"\n",(0,s.jsxs)(n.p,{children:["Data processing extensions, like ",(0,s.jsx)(n.code,{children:"openbb-technical"})," accept ",(0,s.jsx)(n.code,{children:"--data"})," as an input."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Command outputs are cached. These can be check using the ",(0,s.jsx)(n.code,{children:"results"})," command and are selected with the ",(0,s.jsx)(n.code,{children:"--data"})," parameter."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"# Store the command output\n/equity/price/historical --symbol SPY --start_date 2024-01-01 --provider yfinance\n\n# Check results content\nresults\n\n# Use the results\n/technical/rsi --data OBB0 --chart\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b480da04-92e6-48e2-bccf-cebc16fb083a",alt:"SPY RSI"})}),"\n",(0,s.jsx)(n.h2,{id:"help-dialogues",children:"Help Dialogues"}),"\n",(0,s.jsxs)(n.p,{children:["Display the help dialogue by attaching, ",(0,s.jsx)(n.code,{children:"--help"})," or ",(0,s.jsx)(n.code,{children:"-h"}),", to any command."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Use this to identify the providers compatible with each parameter, if applicable."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"calendar --help\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"usage: calendar [--start_date START_DATE] [--end_date END_DATE] [--provider {fmp,nasdaq,tradingeconomics}] [--country COUNTRY] [--importance {Low,Medium,High}]\n                [--group {interest rate,inflation,bonds,consumer,gdp,government,housing,labour,markets,money,prices,trade,business}] [-h] [--export EXPORT]\n                [--sheet-name SHEET_NAME [SHEET_NAME ...]]\n\nGet the upcoming, or historical, economic calendar of global events.\n\noptions:\n  --start_date START_DATE\n                        Start date of the data, in YYYY-MM-DD format.\n  --end_date END_DATE   End date of the data, in YYYY-MM-DD format.\n  --provider {fmp,nasdaq,tradingeconomics}\n                        The provider to use for the query, by default None.\n                            If None, the provider specified in defaults is selected or 'fmp' if there is\n                            no default.\n  --country COUNTRY     Country of the event. (provider: nasdaq, tradingeconomics)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png or jpg\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n\ntradingeconomics:\n  --importance {Low,Medium,High}\n                        Importance of the event.\n  --group {interest rate,inflation,bonds,consumer,gdp,government,housing,labour,markets,money,prices,trade,business}\n                        Grouping of events\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the source selected was Nasdaq, ",(0,s.jsx)(n.code,{children:"--provider nasdaq"}),", the ",(0,s.jsx)(n.code,{children:"--importance"})," and ",(0,s.jsx)(n.code,{children:"--group"})," parameters will be ignored."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/economy/calendar --provider nasdaq --country united_states\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"date"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"country"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"event"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"actual"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"previous"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"consensus"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2024-05-08 13:30:00"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"United States"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Fed Governor Cook Speaks"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"cont..."}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"export-data",children:"Export Data"}),"\n",(0,s.jsx)(n.p,{children:"Data can be exported as a CSV, JSON, or XLSX file, and can also be exported directly from the interactive tables and charts."}),"\n",(0,s.jsx)(n.h3,{id:"named-file",children:"Named File"}),"\n",(0,s.jsx)(n.p,{children:"This command exports the Nasdaq directory as a specific CSV file. The path to the file is displayed on-screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/equity/search --provider nasdaq --export nasdaq_directory.csv\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Saved file: /Users/myusername/OpenBBUserData/nasdaq_directory.csv\n"})}),"\n",(0,s.jsx)(n.h3,{id:"unnamed-file",children:"Unnamed File"}),"\n",(0,s.jsx)(n.p,{children:"If only supplied with the file type, the export will be given a generic name beginning with the date and time."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/equity/search --provider nasdaq --export csv\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Saved file: /Users/myusername/OpenBBUserData/20240508_145308_controllers_search.csv\n"})}),"\n",(0,s.jsx)(n.h3,{id:"specify-sheet-name",children:"Specify Sheet Name"}),"\n",(0,s.jsxs)(n.p,{children:["Exports can share the same ",(0,s.jsx)(n.code,{children:".xlsx"})," file by providing a ",(0,s.jsx)(n.code,{children:"--sheet-name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/equity/search --provider nasdaq --export directory.xlsx --sheet-name nasdaq\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-multiple-commands",children:"Run Multiple Commands"}),"\n",(0,s.jsxs)(n.p,{children:["A chain of commands can be run from a single line, separate each process with ",(0,s.jsx)(n.code,{children:"/"}),". The example below will draw two charts and can be pasted as a single line."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/equity/price/historical --symbol AAPL,MSFT,GOOGL,AMZN,META,NVDA,NFLX,TSLA,QQQ --start_date 2022-01-01 --provider yfinance --chart/performance --symbol AAPL,MSFT,GOOGL,AMZN,META,NVDA,NFLX,TSLA,QQQ --provider finviz --chart\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-routine",children:"Example Routine"}),"\n",(0,s.jsx)(n.p,{children:"To demonstrate how multiple commands are sequenced as a script, try running the example Routine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/exe --example\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(5260),i=t(74848);function a(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);