"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73774],{47395:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var n=l(74848),i=l(28453);const s={title:"Portfolio",sidebar_position:0,description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",keywords:["portfolio module","performance benchmarking","risk metrics","maximum drawdown","portfolio loading","OpenBB SDK","portfolio transactions"]},r=void 0,d={id:"sdk/data-available/portfolio/index",title:"Portfolio",description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",source:"@site/content/sdk/data-available/portfolio/index.md",sourceDirName:"sdk/data-available/portfolio",slug:"/sdk/data-available/portfolio/",permalink:"/sdk/data-available/portfolio/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/portfolio/index.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,sidebarPosition:0,frontMatter:{title:"Portfolio",sidebar_position:0,description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",keywords:["portfolio module","performance benchmarking","risk metrics","maximum drawdown","portfolio loading","OpenBB SDK","portfolio transactions"]},sidebar:"tutorialSidebar",previous:{title:"Discovery",permalink:"/sdk/data-available/crypto/discovery"},next:{title:"Portfolio Optimization",permalink:"/sdk/data-available/portfolio/po"}},o={},h=[{value:"How to Use",id:"how-to-use",level:2},{value:"Portfolio Files",id:"portfolio-files",level:3},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Load",id:"load",level:3},{value:"The Portfolio Object",id:"the-portfolio-object",level:3},{value:"Show",id:"show",level:3},{value:"Perf",id:"perf",level:3},{value:"Summary",id:"summary",level:3},{value:"MaxDD",id:"maxdd",level:3},{value:"RSharpe",id:"rsharpe",level:3},{value:"RVol",id:"rvol",level:3},{value:"DRet",id:"dret",level:3}];function x(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.a,{href:"/terminal/reference/portfolio/load",children:"Portfolio menu"}),", from the OpenBB Terminal, is wrapped into a Python SDK layer, enabling users to programmatically work with the data in a flexible environment, fully customizable for the needs of any user. This guide will introduce the functions within the main Portfolio module, and walk through examples demonstrating how to work with a portfolio file and object."]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,n.jsx)(e.p,{children:"Below is a brief description of each function within the Portfolio module:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.alloc"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Sub-Module"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Allocation Metrics Compared to the Benchmark"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.bench"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Select a Benchmark for the Portfolio"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.distr"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Distribution of Daily Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.dret"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Daily Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.es"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Expected Shortfall"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.holdp"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Holdings of Assets as a %"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.holdv"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Holdings of Assets as an Absolute Value"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.load"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Load a Portfolio File"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.maxdd"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Maximum Drawdown"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.metric"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Sub-Module"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Risk and Portfolio Metrics"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.mret"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Monthly Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.om"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Omega Ratio"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.perf"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Portfolio Performance vs Benchmark"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.po"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Sub-Module"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Portfolio Optimization Sub Menu"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.rbeta"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Beta of Portfolio and Benchmark Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.rsharpe"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Sharpe Ratio"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.rsort"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Sortino Ratio"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.rvol"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Volatility"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.show"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Portfolio Transactions"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.summary"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Summary of Portfolio and Benchmark Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.var"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Portfolio VaR"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.portfolio.yret"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Yearly Returns"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"Alternatively, the contents of the Porfolio module is printed with:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"help(openbb.portfolio)\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Many of the functions in this module will also have a companion command, ",(0,n.jsx)(e.code,{children:"_chart"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"portfolio-files",children:"Portfolio Files"}),"\n",(0,n.jsxs)(e.p,{children:["Portfolio files are spreadsheets (xlsx or csv files) containing historical trades which add up to represent a net balance in the Portfolio Engine. Users should keep their collection of holdings files in the OpenBBUserData folder, ",(0,n.jsx)(e.code,{children:"~/OpenBBUserData/portfolio/holdings"}),"."]}),"\n",(0,n.jsx)(e.admonition,{title:"If you wish to load in your own Excel holdings file, please follow the following steps:",type:"note",children:(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Download the Excel file that can be used as a template ",(0,n.jsx)(e.a,{href:"https://www.dropbox.com/s/03wjjf1lfkqjmtn/holdings_example.xlsx?dl=0",children:"here"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Move the file inside the ",(0,n.jsx)(e.code,{children:"portfolio/holdings"})," folder within the ",(0,n.jsx)(e.a,{href:"/terminal/usage/advanceddata",children:"OpenBBUserData"})," folder and, optionally, adjust the name to your liking."]}),"\n",(0,n.jsxs)(e.li,{children:["Open the Excel file and remove, edit or add to the values as you desire (e.g. your own orders). This is the default template that is also loaded in with ",(0,n.jsx)(e.code,{children:"load --example"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Open up the OpenBB Terminal, go to ",(0,n.jsx)(e.code,{children:"portfolio"})," and type ",(0,n.jsx)(e.code,{children:"load --file"}),". Your Excel file should then be one of the options."]}),"\n"]})}),"\n",(0,n.jsx)(e.p,{children:"Note that the Excel sheet requires the following columns:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Date"})," - The date the trade occurred"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Name"})," - The name of the security"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Type"})," - The type of the security. Use Cash/Stock/Crypto/ETF as appropriate"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Price"})," - The price the security was added or removed at, on a per-unit\nbasis"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Quantity"})," - How much of the security in question was added or removed"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Side"})," - Whether you bought or sold. Use Buy/Deposit/1 to add to the\nportfolio or Sell/Withdrawal/0 to remove from the portfolio a search criteria,\ncountry, sector or industry."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"The table below illustrates the required column titles:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Side"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Price"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Quantity"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Fees"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Investment"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Currency"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Sector"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Industry"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Country"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Region"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2021-10-29"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"K.TO"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"7.93"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"190"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"20"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1526.7"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CAD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Basic Materials"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Gold"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Canada"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2015-01-02"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ETF"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"SPY"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"178.28"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"5.6"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"998.368"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2015-01-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CRYPTO"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"BTC-USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1000"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Crypto"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Crypto"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Crypto"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Crypto"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2011-01-03"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"AMZN"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"9.22"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"100"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"922"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Consumer Cyclical"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Internet Retail"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2011-01-03"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"11.74"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"100"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1174"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Technology"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Consumer Electronics"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2011-01-03"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"MSFT"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"28.04"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"100"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2804"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Technology"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Software-Infrastructure"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2011-01-03"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"TSLA"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.76"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"100"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"176"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Consumer Cyclical"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Auto Manufacturers"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2011-01-03"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"STOCK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GOOG"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Buy"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"15.01"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"100"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1501"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"USD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Communication Services"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Internet Content & Information"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"United States"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"North America"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["The template Excel file also has additional columns but these are ",(0,n.jsx)(e.em,{children:"optional"}),". The OpenBB SDK can figure out by itself what industry, sector, country and region belongs to the loaded in Equity. So the field can be left blank if your holdings do not include this information."]}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.p,{children:"The examples in this guide will assume that the import statements below are included at the top of the Python script or Jupyter Notebook."}),"\n",(0,n.jsx)(e.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nimport pandas as pd\n# %matplotlib inline (uncomment if using a Jupyter Notebook or an Interactive Window)\n"})}),"\n",(0,n.jsx)(e.h3,{id:"load",children:"Load"}),"\n",(0,n.jsxs)(e.p,{children:["Taking the downloaded ",(0,n.jsx)(e.code,{children:"holdings_example.xlsx"})," file from the previous section, let's load it into the Portfolio Engine. There are a few parameters available for this function, and an object is returned."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"help(openbb.portfolio.load)\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-console",children:'    Get PortfolioEngine object\n\n    Parameters\n    ----------\n    transactions_file_path : str\n        Path to transactions file\n    benchmark_symbol : str\n        Benchmark ticker to download data\n    full_shares : bool\n        Whether to mimic the portfolio trades exactly (partial shares) or round down the\n        quantity to the nearest number\n    risk_free_rate : float\n        Risk free rate in float format\n\n    Returns\n    -------\n    PortfolioEngine\n        PortfolioEngine class instance, this will hold transactions and perform calculations\n\n    Examples\n    --------\n    >>> from openbb_terminal.sdk import openbb\n    >>> p = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\n'})}),"\n",(0,n.jsx)(e.p,{children:"The syntax should resemble something like the sample below; don't forget to modify the path to match the local path."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"P = openbb.portfolio.load(\n  transactions_file_path = '/Users/path_to/OpenBBUserData/portfolio/holdings/holdings_example.xlsx',\n  benchmark_symbol = 'VTI',\n  full_shares = False,\n  risk_free_rate = 3.0\n)\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-console",children:"Preprocessing transactions: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 14/14 [00:01<00:00,  8.82it/s]\n        Loading price data: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 3/3 [00:01<00:00,  2.64it/s]\n       Calculating returns: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:00<00:00, 14.52it/s]\n         Loading benchmark: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 4/4 [00:04<00:00,  1.21s/it]\n"})}),"\n",(0,n.jsx)(e.h3,{id:"the-portfolio-object",children:"The Portfolio Object"}),"\n",(0,n.jsxs)(e.p,{children:["A Portfolio Object is assigned to the variable, ",(0,n.jsx)(e.code,{children:"P"}),". The created object, or parts of it, are used as inputs to the other functions in this module. It can also be interacted with directly, for example, to change the benchmark ticker. ",(0,n.jsx)(e.code,{children:"SPY"})," is a holding in the example portfolio, so let's stick with ",(0,n.jsx)(e.code,{children:"VTI"})," as the performance benchmark."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"P.set_benchmark(symbol = 'SPY')\n\n Loading benchmark:  50%|\u2588\u2588\u2588\u2588\u2588     | 2/4 [00:00<00:00,  5.69it/s]\n\nprint(P.benchmark_ticker)\n\nSPY\n"})}),"\n",(0,n.jsx)(e.p,{children:"Populating a list of tickers from the Portfolio Object is accomplished by assigning a variable to it:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"tickers = P.tickers_list\nprint(tickers)\n\n['SPY', 'TSLA', 'K.TO', 'AAPL', 'AMZN', 'MSFT', 'BTC-USD', 'GOOG']\n"})}),"\n",(0,n.jsx)(e.h3,{id:"show",children:"Show"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"openbb.portfolio.show"})," is for displaying the transactions from the loaded portfolio file. Scroll back up to view the output of this function again."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.portfolio.show(P)\n"})}),"\n",(0,n.jsx)(e.h3,{id:"perf",children:"Perf"}),"\n",(0,n.jsxs)(e.p,{children:["Performance against the benchmark is summarized in a table with, ",(0,n.jsx)(e.code,{children:"openbb.portfolio.perf"}),"."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"print(openbb.portfolio.perf(P))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Portfolio"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Benchmark"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Difference"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Total Investment"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"11102.07"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"11102.07"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Total Value"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"114027.38"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"36203.96"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"77823.43"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Total % Return"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"927.08%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"226.10%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"700.98%"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Total Abs Return"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"102925.31"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"25101.89"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"77823.43"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"openbb.portfolio.summary"})," prints a table of risk metrics, comparing the portfolio against the benchmark."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"print(openbb.portfolio.summary(P))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Portfolio"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Benchmark"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Difference"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Volatility"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1.65%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.99%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.66%"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Skew"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-0.32"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-0.61"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.29"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Kurtosis"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"8.80"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"16.87"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-8.079"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Maximum Drawdown"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-59.05%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-35.00%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"-24.05%"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Sharpe ratio"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.05"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.039"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.011"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Sortino ratio"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.06"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.04"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.021"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"R2 Score"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"41.36%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"41.36%"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.00%"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"maxdd",children:"MaxDD"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"openbb.portfolio.maxdd"})," calculates the maximum drawdown as price and % value; it returns a Tuple."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"holdings,dd = openbb.portfolio.maxdd(P)\ndd = pd.DataFrame(dd)\ndd.rename(columns = {'Total': 'Portfolio % Drawdown'}, inplace = True)\nholdings = pd.DataFrame(holdings)\nholdings.rename(columns = {'Total': 'Portfolio Value'}, inplace = True)\ndd = dd.join(holdings)\ndd.index = dd.index.strftime(date_format='%Y-%m-%d')\nprint(dd.tail(5))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Portfolio % Drawdown"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Portfolio Value"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-21"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.58"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"109442"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-22"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.57"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"111257"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-23"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.56"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"114017"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-24"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.56"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"114027"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-25"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.56"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"113302"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["MaxDD also has a ",(0,n.jsx)(e.code,{children:"_chart"})," command, and is called with:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.portfolio.maxdd_chart(P)\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://user-images.githubusercontent.com/85772166/204072456-f6b8e038-08ef-4ac5-9920-14a9c1e4197f.png",alt:"openbb.portfolio.maxdd_chart",title:"openbb.portfolio.maxdd_chart"})}),"\n",(0,n.jsx)(e.h3,{id:"rsharpe",children:"RSharpe"}),"\n",(0,n.jsx)(e.p,{children:"Calculate a rolling sharpe ratio over a specified window."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"rs = openbb.portfolio.rsharpe(P, window = '3m')\nrs.rename(columns = {'portfolio': 'Portfolio Sharpe', 'benchmark': 'Benchmark Sharpe'}, inplace = True)\nrs.index = rs.index.strftime(date_format='%Y-%m-%d')\nprint(rs.tail(5))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Portfolio Sharpe"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Benchmark Sharpe"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-21"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.15"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.02"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-22"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.13"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.05"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-23"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.09"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.07"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-24"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.09"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.08"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-25"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.09"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.11"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"rvol",children:"RVol"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"openbb.portfolio.rvol"})," has the same input parameters as ",(0,n.jsx)(e.code,{children:"rsharpe"}),"."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"rv = openbb.portfolio.rvol(P, window = '3m')\nrv.rename(columns={'portfolio': 'Portfolio Volatility', 'benchmark': 'Benchmark Volatility'}, inplace = True)\nrv.index = rv.index.strftime(date_format='%Y-%m-%d')\n\nprint(rv.tail(5))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Portfolio Volatility"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Benchmark Volatility"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-23"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.021727"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.014490"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-24"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.021715"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.014439"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-25"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.021596"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.014256"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-26"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.021591"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.014256"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-27"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.021592"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.014256"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"dret",children:"DRet"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"openbb.portfolio.dret"})," returns a DataFrame with daily returns of the portfolio and benchmark."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"returns = openbb.portfolio.dret(P)\nreturns.rename(columns = {'portfolio': 'Portfolio % Returns', 'benchmark': 'Benchmark % Returns'}, inplace = True)\nreturns.index = returns.index.rename('Date')\n\nprint(returns.tail(5))\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Portfolio % Returns"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Benchmark % Returns"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-21"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.03"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.00"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-22"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.02"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.01"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-23"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.02"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.01"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-24"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-25"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.01"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Read the ",(0,n.jsx)(e.a,{href:"/sdk/data-available/portfolio/po",children:"Portfolio Optimization Intro"})," to learn about the optimization features, and the parameters preset template."]})]})}function c(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(x,{...t})}):x(t)}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var n=l(96540);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);