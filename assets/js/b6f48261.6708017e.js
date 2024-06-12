"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30612],{69803:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=s(74848),n=s(28453),i=s(94331);const d={title:"redditsent",description:"A documentation on redditsent function. It is used to find posts related to a specific search term from Reddit. The function provides comprehensive search and categorization of results based on user-preferences.",keywords:["redditsent","Search function","Reddit posts","Behavioral analysis","Python function","Ticker symbol","post categorization","Comprehensive search","subreddits","dataframe","polarity scores","average polarity score"]},o=void 0,c={id:"sdk/reference/stocks/ba/redditsent",title:"redditsent",description:"A documentation on redditsent function. It is used to find posts related to a specific search term from Reddit. The function provides comprehensive search and categorization of results based on user-preferences.",source:"@site/content/sdk/reference/stocks/ba/redditsent.md",sourceDirName:"sdk/reference/stocks/ba",slug:"/sdk/reference/stocks/ba/redditsent",permalink:"/sdk/reference/stocks/ba/redditsent",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/ba/redditsent.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"redditsent",description:"A documentation on redditsent function. It is used to find posts related to a specific search term from Reddit. The function provides comprehensive search and categorization of results based on user-preferences.",keywords:["redditsent","Search function","Reddit posts","Behavioral analysis","Python function","Ticker symbol","post categorization","Comprehensive search","subreddits","dataframe","polarity scores","average polarity score"]},sidebar:"tutorialSidebar",previous:{title:"queries",permalink:"/sdk/reference/stocks/ba/queries"},next:{title:"regions",permalink:"/sdk/reference/stocks/ba/regions"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"stocks.ba.redditsent - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Finds posts related to a specific search term in Reddit."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L864",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.ba.redditsent(symbol: str, limit: int = 100, sortby: str = "relevance", time_frame: str = "week", full_search: bool = True, subreddits: str = "all")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Ticker symbol to search for"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Number of posts to get per subreddit"}),(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'Search type (Possibilities: "relevance", "hot", "top", "new", or "comments")'}),(0,r.jsx)(t.td,{children:"relevance"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time_frame"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'Relative time of post (Possibilities: "hour", "day", "week", "month", "year", "all")'}),(0,r.jsx)(t.td,{children:"week"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"full_search"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Enable comprehensive search for ticker"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"subreddits"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Comma-separated list of subreddits"}),(0,r.jsx)(t.td,{children:"all"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Dataframe of submissions related to the search term,",(0,r.jsx)("br",{}),"List of polarity scores,",(0,r.jsx)("br",{}),"Average polarity score."]})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(5260),n=s(74848);function i(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);