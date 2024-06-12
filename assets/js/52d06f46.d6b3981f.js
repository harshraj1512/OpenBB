"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68616],{49804:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>x,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var i=l(74848),s=l(28453),n=l(94331);const r={title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",keywords:["Options Module","OpenBB SDK","Trading Data","Stock Option Data","Unusual Options Activity","Put-Call Ratios","Programmatic Access","Terminal Commands","Data Processing","Documentation"]},d=void 0,h={id:"sdk/data-available/stocks/options",title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",source:"@site/content/sdk/data-available/stocks/options.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/options",permalink:"/sdk/data-available/stocks/options",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/options.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"Options",description:"This documentation page explains how to use the Options module in the OpenBB SDK that allows programmatic access to trading data. It covers a range of functions that correspond to many aspects of stock option data, from Unusual Options Activity to Put-Call Ratios.",keywords:["Options Module","OpenBB SDK","Trading Data","Stock Option Data","Unusual Options Activity","Put-Call Ratios","Programmatic Access","Terminal Commands","Data Processing","Documentation"]},sidebar:"tutorialSidebar",previous:{title:"Options Chains",permalink:"/sdk/data-available/stocks/options-chains"},next:{title:"Stocks Screener",permalink:"/sdk/data-available/stocks/stocks-screener"}},x={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Unusual Options",id:"unusual-options",level:3},{value:"PCR",id:"pcr",level:3},{value:"Chains",id:"chains",level:3}];function g(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"Options - Stocks - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,i.jsx)(e.p,{children:"The Options module wraps the Terminal commands for the SDK layer, providing programmatic access and greater flexibility for processing data."}),"\n",(0,i.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsx)(e.p,{children:"The functions in the Options sub-module are listed below, along with a short description."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.pcr"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Put-Call Ratio"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.info"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Option Information"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.unu"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Unusual Options Activity"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.hist"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Historical Option Data"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.chains"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Option Chain Data"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"stocks.options.eodchain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.vol"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Display Volume plot"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.oi"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Display open interest plot"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.voi"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Display plot of volume and open interest"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.expirations"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Get Option Expirations"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"stocks.options.vsurf"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Show volatility surface"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"Alternatively, the contents of the menu or a function's docstrings can be printed using Python's built-in help."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"help(openbb.stocks.options)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,i.jsx)(e.p,{children:"The examples in this section will assume these statements are included at the top of the file:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nimport pandas as pd\n"})}),"\n",(0,i.jsx)(e.h3,{id:"unusual-options",children:"Unusual Options"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"openbb.stocks.options.unu"})," returns a DataFrame with the current day's unusual options, those having a very high volume/open interest ratio. This function returns a Tuple containing the DataFrame and a string. Unpack it like this:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"unu_df,unu_ts = openbb.stocks.options.unu(limit = 500)\nunu_df = unu_df.sort_values(by = 'Vol/OI', ascending = False)\n\nunu_df\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"right"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Exp"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Strike"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Vol/OI"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Vol"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"OI"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Bid"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Ask"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"T"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-01-06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"21"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Call"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"61"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8598"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"141"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.03"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.04"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"T"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-01-06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"19"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"40.7"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"10173"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"250"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.39"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.42"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SCHW"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-03-17"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"87.5"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Call"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"35.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4317"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"123"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.35"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TSLA"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"192.5"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"31.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"179688"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5774"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.01"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.02"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"FDX"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"190"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Call"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"29.2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7098"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"243"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.67"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.69"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"403"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"FCX"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"36"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1513"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"729"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.04"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.06"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"402"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CAT"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"227.5"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"601"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"280"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.94"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.14"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"401"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"NKE"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"111"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"651"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"306"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.01"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"400"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"NVDA"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"160"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8668"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4059"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.08"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"425"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PG"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-09"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"149"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Put"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"241"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"113"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.64"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.69"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"pcr",children:"PCR"}),"\n",(0,i.jsx)(e.p,{children:"Get up to ten years of historical Put-Call Ratios."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"openbb.stocks.options.pcr(start_date = '2012-01-01', window = 10, symbol = 'SPY')\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"PCR"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2012-12-05 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.1815"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2012-12-06 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.7403"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2012-12-07 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.7023"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2012-12-10 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.8997"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2012-12-11 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.5384"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-28 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.2491"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-29 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.135"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-30 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.5901"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.9842"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1346"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"chains",children:"Chains"}),"\n",(0,i.jsx)(e.p,{children:"Get the current option chain for a selected ticker.  We support the following sources: YahooFinance, Nasdaq,\nTradier (Sandbox) and Intrinio.  Note that each API returns slightly different data fields."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"openbb.stocks.options.chains(symbol = 'SPY')\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"right"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"contractSymbol"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"optionType"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"expiration"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"strike"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"lastPrice"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"bid"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"ask"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"openInterest"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"impliedVolatility"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL230210C00050000"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"call"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-10"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"101.95"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"101.15"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"102.8"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"153"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"44"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4.73438"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL230210C00055000"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"call"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-10"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"55"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"96.6"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"96.15"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"97.85"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"81"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4.53125"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL230210C00070000"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"call"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-10"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"70"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"76.39"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"81.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"82.95"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.63281"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL230210C00075000"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"call"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-10"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"75"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"79.45"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"76.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"78.05"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.50781"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AAPL230210C00080000"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"call"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-10"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"80"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"72.55"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"71.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"73.05"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.21094"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>n});l(96540);var i=l(5260),s=l(74848);function n(t){let{title:e}=t;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var i=l(96540);const s={},n=i.createContext(s);function r(t){const e=i.useContext(n);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),i.createElement(n.Provider,{value:e},t.children)}}}]);