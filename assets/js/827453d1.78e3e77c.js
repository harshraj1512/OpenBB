"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39253],{39435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(74848),s=t(28453),r=t(94331);const i={title:"Metadata",sidebar_position:6,description:"This guide provides an overview of the types of metadata returned within function responses, and shows samples demonstrating what to expect.",keywords:["OpenBB Platform","metadata","provider","arguments","fred","econdb","macroeconomic","user settings","preferences","Python Interface"]},o=void 0,d={id:"platform/user_guides/metadata",title:"Metadata",description:"This guide provides an overview of the types of metadata returned within function responses, and shows samples demonstrating what to expect.",source:"@site/content/platform/user_guides/metadata.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/metadata",permalink:"/platform/user_guides/metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/user_guides/metadata.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,sidebarPosition:6,frontMatter:{title:"Metadata",sidebar_position:6,description:"This guide provides an overview of the types of metadata returned within function responses, and shows samples demonstrating what to expect.",keywords:["OpenBB Platform","metadata","provider","arguments","fred","econdb","macroeconomic","user settings","preferences","Python Interface"]},sidebar:"tutorialSidebar",previous:{title:"Dynamic Command Execution",permalink:"/platform/user_guides/dynamic_command_execution"},next:{title:"REST API",permalink:"/platform/user_guides/rest_api"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Execution Metadata",id:"execution-metadata",level:2},{value:"Disabling",id:"disabling",level:3},{value:"Results Metadata",id:"results-metadata",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"Metadata | OpenBB Platform Docs"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["The OpenBB Platform returns metadata related to the command execution, as well as any returned from a Provider endpoint.\nBoth are stored in the ",(0,a.jsx)(n.code,{children:"extra"})," attribute of the ",(0,a.jsx)(n.a,{href:"/platform/developer_guide/obbject",children:"OBBject"})," response object."]}),"\n",(0,a.jsx)(n.p,{children:"It will always contain these elements:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"arguments"}),": Any parameters supplied, and the selected provider source, to the function."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"duration"}),": The number of nanoseconds the function took to complete."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"route"}),": The command path."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"timestamp"}),": Timestamp for when the command was run."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"execution-metadata",children:"Execution Metadata"}),"\n",(0,a.jsxs)(n.p,{children:["Metadata for the command execution is captured under the ",(0,a.jsx)(n.code,{children:"metadata"})," key."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from openbb import obb\n\ndata = obb.economy.calendar(provider="nasdaq")\n\ndata.extra\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"{'metadata': Metadata\n\n arguments: {'provider_choices': {'provider': 'nasdaq'}, 'standard_params': {'start_date': None, 'end_date': None}, 'extra_params': {}}\n duration: 565256375\n route: /economy/calendar\n timestamp: 2024-05-22 11:28:57.149548}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"disabling",children:"Disabling"}),"\n",(0,a.jsxs)(n.p,{children:["This content can be disabled as a setting in the ",(0,a.jsx)(n.a,{href:"settings_and_environment_variables",children:(0,a.jsx)(n.code,{children:"user_settings.json"})})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "preferences": {\n    "metadata": false\n}\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Metadata included as part of the command results will not be disabled by this setting."})}),"\n",(0,a.jsx)(n.h2,{id:"results-metadata",children:"Results Metadata"}),"\n",(0,a.jsxs)(n.p,{children:["Where commands return metadata related to the requested data, it is keyable from the ",(0,a.jsx)(n.code,{children:"extra"})," attribute with, ",(0,a.jsx)(n.code,{children:"results_metadata"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This dictionary contains contextual information and data for the ",(0,a.jsx)(n.code,{children:"results"})," that is not included in the tables.\nResults metadata will vary by command and provider, so it is worth exploring when it is included, below is a selection of samples."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{mdxType:"summary",children:"FRED"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'data = obb.economy.fred_series("T10Y2Y")\n\ndata.extra["results_metadata"]\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"{'T10Y2Y': {'title': '10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity',\n  'units': 'Percent',\n  'frequency': 'Daily',\n  'seasonal_adjustment': 'Not Seasonally Adjusted',\n  'notes': 'Starting with the update on June 21, 2019, the Treasury bond data used in calculating interest rate spreads is obtained directly from the U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield).\\r\\nSeries is calculated as the spread between 10-Year Treasury Constant Maturity (BC_10YEAR) and 2-Year Treasury Constant Maturity (BC_2YEAR). Both underlying series are published at the U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield).'}}\n"})}),(0,a.jsxs)(n.p,{children:["The information stored here is used by the ",(0,a.jsx)(n.code,{children:"openbb-charting"})," extension for display."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/67746ef0-7d61-4eed-b2e8-c32d001a8a00",alt:"FRED Chart"})})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{mdxType:"summary",children:"EconDB"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'data = obb.economy.indicators("PCOPP", provider="econdb")\n\ndata.extra\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"{'results_metadata': {'PCOPP': {'title': 'World - Copper',\n   'country': 'World',\n   'frequency': 'M',\n   'dataset': 'IMF_PCPS',\n   'transform': None,\n   'units': 'USD',\n   'scale': 'Units',\n   'multiplier': 1,\n   'additional_info': {'FREQ:Frequency': 'M:Monthly',\n    'REF_AREA:Reference Area': 'W00:All Countries, excluding the IO',\n    'COMMODITY:Commodity': 'PCOPP:Primary Commodity Prices, Copper',\n    'UNIT_MEASURE:Unit of Measure': 'USD:US Dollars',\n    'UNIT_MULT:Scale': '0:Units'}}},\n}\n"})})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{mdxType:"summary",children:"Cboe"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'data = obb.derivatives.options.chains("SPX", provider="cboe")\n\ndata.extra\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"{'results_metadata': {'symbol': '^SPX',\n  'security_type': 'index',\n  'bid': 5293.0298,\n  'bid_size': 1,\n  'ask': 5295.2002,\n  'ask_size': 1,\n  'open': 5319.2798,\n  'high': 5323.1802,\n  'low': 5286.0098,\n  'close': 5294.0898,\n  'volume': 0,\n  'current_price': 5294.0898,\n  'prev_close': 5321.4102,\n  'change': -27.3202,\n  'change_percent': None,\n  'iv30': 10.291,\n  'iv30_change': 0.546,\n  'iv30_change_percent': 0.056029,\n  'last_tick': 'down',\n  'last_trade_timestamp': '2024-05-22 14:50:36'},\n}\n"})})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{mdxType:"summary",children:"SEC"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'data = obb.etf.holdings("BIL", provider="sec")\n\ndata.extra\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"{'results_metadata': {'fund_name': 'SPDR(R) Bloomberg 1-3 Month T-Bill ETF',\n  'series_id': 'S000017326',\n  'lei': '549300GQCVCME1YJ6B50',\n  'period_ending': '2023-12-31',\n  'fiscal_year_end': '2024-06-30',\n  'total_assets': 35015168619.91,\n  'total_liabilities': 1638123692.3,\n  'net_assets': 33377044927.61,\n  'cash_and_equivalents': '0.00000000',\n  'returns': {'2023-10-31': 0.0044,\n   '2023-11-30': 0.0044,\n   '2023-12-31': 0.0046},\n  'flow': {'2023-10-31': {'creation': 6591274706.7,\n    'redemption': 604472521.85},\n   '2023-11-30': {'creation': 3244045301.3, 'redemption': 4478684406.9},\n   '2023-12-31': {'creation': 639802303.2, 'redemption': 3018629744.0}},\n  'gains': {'2023-10-31': {'realized': -65924.99, 'unrealized': -3793500.04},\n   '2023-11-30': {'realized': 360345.39, 'unrealized': 292210.09},\n   '2023-12-31': {'realized': 319796.93, 'unrealized': 3862704.46}},\n  'borrowers': [{'name': 'BofA Securities, Inc.',\n    'lei': '549300HN4UKV1E2R3U73',\n    'value': 211562959.29},\n   {'name': 'J.P. Morgan Securities LLC',\n    'lei': 'ZBUT11V806EZRVTWT807',\n    'value': 957576952.9},\n   {'name': 'ING Financial Markets LLC',\n    'lei': 'KBVRJ5K57JZ3E2AVWX40',\n    'value': 247944722.5},\n   {'name': 'Barclays Capital Inc.',\n    'lei': 'AC28XWWI3WIBK2824319',\n    'value': 248250000.0},\n   {'name': 'Goldman Sachs & Co. LLC',\n    'lei': 'FOR8UP27PHTHYVLBNG30',\n    'value': 110741598.05},\n   {'name': 'Bank of Montreal',\n    'lei': 'NQQ6HPCNCCU6TUTQYE16',\n    'value': 87276542.32},\n   {'name': 'Nomura Securities International, Inc.',\n    'lei': 'OXTKY6Q8X53C9ILVV871',\n    'value': 469556172.09},\n   {'name': 'Daiwa Capital Markets America Inc.',\n    'lei': 'M67H5PRC0NQKM73ZAS82',\n    'value': 198566750.0}]}\n}\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(5260),s=t(74848);function r(e){let{title:n}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);