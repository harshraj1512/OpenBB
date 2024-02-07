"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},61912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const s={title:"HTTP Requests",sidebar_position:2,description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Requests","HTTP","Async","Synchronous","provider","extension","data","fetch"]},i=void 0,l={unversionedId:"platform/development/contributor-guidelines/http_requests",id:"platform/development/contributor-guidelines/http_requests",title:"HTTP Requests",description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",source:"@site/content/platform/development/contributor-guidelines/http_requests.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/http_requests",permalink:"/platform/development/contributor-guidelines/http_requests",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/http_requests.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:2,frontMatter:{title:"HTTP Requests",sidebar_position:2,description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Requests","HTTP","Async","Synchronous","provider","extension","data","fetch"]},sidebar:"tutorialSidebar",previous:{title:"Expectations For Contributors",permalink:"/platform/development/contributor-guidelines/expecations_for_contributors"},next:{title:"Quality Assurance",permalink:"/platform/development/contributor-guidelines/quality_assurance"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Generate Query String",id:"generate-query-string",level:2},{value:"Asynchronous vs Synchronous",id:"asynchronous-vs-synchronous",level:2},{value:"Why Async?",id:"why-async",level:3},{value:"Synchronous - Requests",id:"synchronous---requests",level:3},{value:"Asynchronous - AIOHTTP",id:"asynchronous---aiohttp",level:3},{value:"Multi-URL Requests",id:"multi-url-requests",level:3},{value:"Custom Callback",id:"custom-callback",level:3},{value:"Asynchronous Fetchers",id:"asynchronous-fetchers",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"HTTP Requests - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Any function fetching data requires making an outbound HTTP request. Utility functions within the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-core")," simplify the procedure for making both asynchronous and synchronous requests. These cover the majority of typical requests and should be imported for use instead of creating a new client from scratch."),(0,r.kt)("p",null,"Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher."),(0,r.kt)("h2",{id:"generate-query-string"},"Generate Query String"),(0,r.kt)("p",null,"To pass parameters to a URL, they need to be formatted as a query string. The helper function, ",(0,r.kt)("inlineCode",{parentName:"p"},"get_querystring()"),", converts a dictionary of parameters to a standard query URL string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.utils.helpers import get_querystring\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    Parameters\n    ----------\n    items: dict\n        The dictionary to be turned into a querystring.\n\n    exclude: List[str]\n        The keys to be excluded from the querystring.\n\n    Returns\n    -------\n    str\n        The querystring.\n")),(0,r.kt)("p",null,'Within the context of the Fetcher, the "query" object is a Pydantic model. To pass the query parameters to the helper function, apply ',(0,r.kt)("inlineCode",{parentName:"p"},"model_dump()")," to the query object. This removes any key:values where the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("p",null,"There may be parameters that are not intended to be included in the parameters portion of the URL string. Pass those as a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"get_querystring()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query_string = get_querystring(query.model_dump(), ["interval"])\n')),(0,r.kt)("p",null,'In the example above, the "base url" is dedicated to the "interval" of the OHLC data. We want to exclude ',(0,r.kt)("inlineCode",{parentName:"p"},"&interval=1d")," from the parameters portion of the final URL. Or, daily/monthly/intraday levels are all different end points from the provider's API."),(0,r.kt)("h2",{id:"asynchronous-vs-synchronous"},"Asynchronous vs Synchronous"),(0,r.kt)("p",null,"Every function in the router is asynchronous. This is the only place an asynchronous function ",(0,r.kt)("em",{parentName:"p"},"must")," be used. Data-fetching router functions all follow the same format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@router.command(model="MarketSnapshots")\nasync def market_snapshots(\n    cc: CommandContext,\n    provider_choices: ProviderChoices,\n    standard_params: StandardParams,\n    extra_params: ExtraParams,\n) -> OBBject:\n    """Get a current, complete, market snapshot."""\n    return await OBBject.from_query(Query(**locals()))\n')),(0,r.kt)("p",null,"The code above executes the endpoint consumed by the user. Each data provider model mapped to the model name in the router decorator could be asynchronous or synchronous."),(0,r.kt)("h3",{id:"why-async"},"Why Async?"),(0,r.kt)("p",null,"An asynchronous fetcher is suitable for data sources demanding multiple queries per command. Options chains, for example, could be served as only a single expiration date, but others will provide the complete chain as a single request."),(0,r.kt)("p",null,"In the case of the former, dozens of requests, an asynchronous fetcher will dramatically improve performance. The latter is only one request and the code can be simplified as a synchronous process."),(0,r.kt)("p",null,"Some data providers allow for bulk downloading from a list of symbols, while many do not. It might be desirable to enhance a data source by adding support for bulk downloading. Wrapping it as list of asynchronous tasks makes it an efficient process. The time to download one item should be the same as two because the tasks are carried out concurrently."),(0,r.kt)("p",null,"Ultimately, the choice is at the discretion of the developer. OpenBB has made the implementation of both methods easy and fast, the next sections will elaborate."),(0,r.kt)("h3",{id:"synchronous---requests"},"Synchronous - Requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.utils import make_request\n")),(0,r.kt)("p",null,"This function is an abstract helper to make requests from a URL with potential headers and parameters. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"**kwargs")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"requests.Response")," object. If no headers are supplied, it will attempt to use a generic user-agent. Add headers as a dictionary to the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," parameter of the query."),(0,r.kt)("p",null,"All parameters of ",(0,r.kt)("inlineCode",{parentName:"p"},"requests.get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"requests.post"),"are accessible and passed through as ",(0,r.kt)("inlineCode",{parentName:"p"},"**kwargs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    Parameters\n    ----------\n    url : str\n        Url to make the request to\n    method : str, optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n\n    Returns\n    -------\n    requests.Response\n        Request response object\n\n    Raises\n    ------\n    ValueError\n        If invalid method is passed\n')),(0,r.kt)("h3",{id:"asynchronous---aiohttp"},"Asynchronous - AIOHTTP"),(0,r.kt)("p",null,"Single-URL requests can be made asynchronously. The name of the function now starts with, ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.utils.helpers import amake_request\n")),(0,r.kt)("p",null,"This function uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"aiohttp")," client and accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs"),". It has a default callback function that assumes the content is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),". No post-request object parsing is required, but this behaviour is overridden with the ",(0,r.kt)("inlineCode",{parentName:"p"},"response_callback")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    Parameters\n    ----------\n    url : str\n        Url to make the request to\n    method : str, optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n    response_callback : Callable[[ClientResponse, ClientSession], Awaitable[Union[dict, List[dict]]]], optional\n        Async callback with response and session as arguments that returns the json, by default None\n    session : ClientSession, optional\n        Custom session to use for requests, by default None\n\n\n    Returns\n    -------\n    Union[dict, List[dict]]\n        Response json\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),"!"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'url = "https://someurlwithdata.profit"\nresponse_json = await amake_requests(url)\n')),(0,r.kt)("p",{parentName:"admonition"},"Absent ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),", the response is a coroutine - a task waiting to be executed.")),(0,r.kt)("h3",{id:"multi-url-requests"},"Multi-URL Requests"),(0,r.kt)("p",null,"The helper function becomes plural, ",(0,r.kt)("inlineCode",{parentName:"p"},"amake_requests"),", when fetching for a list of URLs. Under the hood, it is using ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncio.gather")," to perform the tasks concurrently. The same default callback function from ",(0,r.kt)("inlineCode",{parentName:"p"},"amake_request")," exists, only here it appends the expected ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," output to a ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Dict]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.utils.helpers import amake_requests\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    Parameters\n    ----------\n    urls : Union[str, List[str]]\n        List of urls to make requests to\n    method : Literal["GET", "POST"], optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n    response_callback : Callable[[ClientResponse, ClientSession], Awaitable[Union[dict, List[dict]]]], optional\n        Async callback with response and session as arguments that returns the json, by default None\n    session : ClientSession, optional\n        Custom session to use for requests, by default None\n\n    Returns\n    -------\n    Union[dict, List[dict]]\n        Response json\n')),(0,r.kt)("h3",{id:"custom-callback"},"Custom Callback"),(0,r.kt)("p",null,"Customize the response parsing by creating a specific callback function. The example below is a method for converting CSV data to a dictionary and appending it to a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from io import StringIO\nfrom typing import Any\nfrom pandas import DataFrame\n\nresults = []\n\nasync def response_callback(response, _: Any):\n    """Callback for HTTP Client Response."""\n    response = await response.text()\n    data = DataFrame(StringIO(response), skiprows=2)\n    results.append(data.to_dict("records"))\n')),(0,r.kt)("h3",{id:"asynchronous-fetchers"},"Asynchronous Fetchers"),(0,r.kt)("p",null,"When a Fetcher is asynchronous, the ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_data")," static method needs to be defined accordingly - ",(0,r.kt)("inlineCode",{parentName:"p"},"aextract_data")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_data"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    @staticmethod\n    async def aextract_data(\n        query: SourceModelQueryParams,\n        credentials: Optional[Dict[str, str]],\n        **kwargs: Any,\n    ) -> List[Dict]:\n")),(0,r.kt)("p",null,"These helper functions simplify and standardize the majority of HTTP requests. These helper functions are starting points for building or modifying data provider extensions, and they can also be imported as a standalone utility within any Python session."))}m.isMDXComponent=!0}}]);