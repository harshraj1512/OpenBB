"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80094],{24270:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(74848),t=n(28453),i=n(94331);const o={title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",keywords:["macro data","Gross Domestic Product","Treasury Yields","Employment figures","Government components","Consumer and Producer Indices","EconDB","macro parameters","data transformation","macro programming","currency conversion"]},s=void 0,d={id:"terminal/reference/economy/macro",title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",source:"@site/content/terminal/reference/economy/macro.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/macro",permalink:"/terminal/reference/economy/macro",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/macro.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"macro",description:"Learn how to retrieve and manipulate a variety of macro data from numerous countries using various parameters and transformations. The page provides examples and details of the functionalities.",keywords:["macro data","Gross Domestic Product","Treasury Yields","Employment figures","Government components","Consumer and Producer Indices","EconDB","macro parameters","data transformation","macro programming","currency conversion"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/terminal/reference/economy/index_cmd"},next:{title:"map",permalink:"/terminal/reference/economy/map"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const a={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"economy /macro - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(a.p,{children:"Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP & GDP) and the underlying components, Treasury Yields (Y10YD & M3YD), Employment figures (URATE, EMP, AC0I0 and EMRATIO), Government components (e.g. GBAL & GREV), Consumer and Producer Indices (CPI & PPI) and a variety of other indicators. [Source: EconDB]"}),"\n",(0,r.jsx)(a.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"macro [-p PARAMETERS] [-c COUNTRIES] [-t {,TPOP,TOYA,TUSD,TPGP,TNOR}] [--show {parameters,countries,transform}] [-s START_DATE] [-e END_DATE] [--convert {Albania,Argentina,Australia,Austria,Azerbaijan,Bangladesh,Belarus,Belgium,Bhutan,Bosnia_and_Herzegovina,Botswana,Brazil,Bulgaria,Cambodia,Cameroon,Canada,Chile,China,Colombia,Croatia,Cyprus,Czechia,Denmark,Dominican_Republic,Egypt,Estonia,European_Union,Finland,France,Germany,Greece,Honduras,Hong Kong,Hungary,India,Indonesia,Iran,Ireland,Israel,Italy,Japan,Kazakhstan,Laos,Latvia,Lebanon,Lithuania,Luxembourg,Macedonia,Malaysia,Malta,Mexico,Mongolia,Netherlands,New_Zealand,Nigeria,Norway,Oman,Pakistan,Panama,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russia,Saudi_Arabia,Serbia,Singapore,Slovakia,Slovenia,South_Africa,South_Korea,Spain,Sweden,Switzerland,Taiwan,Thailand,Tunisia,Turkey,Ukraine,United_Arab_Emirates,United_Kingdom,United_States,Uzbekistan,Venezuela,Vietnam}]\n"})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Description"}),(0,r.jsx)(a.th,{children:"Default"}),(0,r.jsx)(a.th,{children:"Optional"}),(0,r.jsx)(a.th,{children:"Choices"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"parameters"}),(0,r.jsx)(a.td,{children:"Abbreviation(s) of the Macro Economic data"}),(0,r.jsx)(a.td,{children:"CPI"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"countries"}),(0,r.jsx)(a.td,{children:"The country or countries you wish to show data for"}),(0,r.jsx)(a.td,{children:"united_states"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"transform"}),(0,r.jsx)(a.td,{children:"The transformation to apply to the data"}),(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:", TPOP, TOYA, TUSD, TPGP, TNOR"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"show"}),(0,r.jsx)(a.td,{children:"Show parameters and what they represent using 'parameters' or countries and their currencies using 'countries'"}),(0,r.jsx)(a.td,{children:"None"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"parameters, countries, transform"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"start_date"}),(0,r.jsx)(a.td,{children:"The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31)"}),(0,r.jsx)(a.td,{children:"None"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"end_date"}),(0,r.jsx)(a.td,{children:"The end date of the data (format: YEAR-MONTH-DAY, i.e. 2021-06-20)"}),(0,r.jsx)(a.td,{children:"None"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"currency"}),(0,r.jsx)(a.td,{children:"Convert the currency of the chosen country to a specified currency. To find the currency symbols use '--show countries'"}),(0,r.jsx)(a.td,{children:"False"}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"Albania, Argentina, Australia, Austria, Azerbaijan, Bangladesh, Belarus, Belgium, Bhutan, Bosnia_and_Herzegovina, Botswana, Brazil, Bulgaria, Cambodia, Cameroon, Canada, Chile, China, Colombia, Croatia, Cyprus, Czechia, Denmark, Dominican_Republic, Egypt, Estonia, European_Union, Finland, France, Germany, Greece, Honduras, Hong Kong, Hungary, India, Indonesia, Iran, Ireland, Israel, Italy, Japan, Kazakhstan, Laos, Latvia, Lebanon, Lithuania, Luxembourg, Macedonia, Malaysia, Malta, Mexico, Mongolia, Netherlands, New_Zealand, Nigeria, Norway, Oman, Pakistan, Panama, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Saudi_Arabia, Serbia, Singapore, Slovakia, Slovenia, South_Africa, South_Korea, Spain, Sweden, Switzerland, Taiwan, Thailand, Tunisia, Turkey, Ukraine, United_Arab_Emirates, United_Kingdom, United_States, Uzbekistan, Venezuela, Vietnam"})]})]})]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"2022 Mar 15, 07:20 (\ud83e\udd8b) /economy/ $ macro -p CONF -c netherlands,germany,france -s 2005-01-01 -e 2022-01-01\n"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://user-images.githubusercontent.com/46355364/159249787-a030cd2c-0b29-4522-a1a9-db0245d55d9f.png",alt:"macro conf netherlands germany france"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://user-images.githubusercontent.com/46355364/159251277-9381cc0a-7efe-41ce-af93-41d832103a1e.png",alt:"oil production macro"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://user-images.githubusercontent.com/46355364/159253210-c7135b12-b04a-49e4-8896-d03e4c25f520.png",alt:"argentina gross domestic product in dollars"})}),"\n",(0,r.jsx)(a.hr,{})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94331:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var r=n(5260),t=n(74848);function i(e){let{title:a}=e;return(0,t.jsx)(r.A,{children:(0,t.jsx)("title",{children:a})})}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var r=n(96540);const t={},i=r.createContext(t);function o(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);