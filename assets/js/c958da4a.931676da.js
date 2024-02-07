"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(35742);function a(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(15569);function a(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[a,o]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(i.Toggle,{isOn:a,handleChange:()=>o(!a)}))),a&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},7582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(88828),o=n(20630);const s={title:"News",sidebar_position:2,description:"The News section in OpenBB Terminal Pro provides users with the latest updates in financial markets. It offers diverse topics, along with features like Interactive Chat and Ticker Analysis for comprehensive news experience.",keywords:["Financial news","Market trends","News section","Interactive Chat","Ticker Analysis","Investments"]},c=void 0,l={unversionedId:"pro/main-menu/news",id:"pro/main-menu/news",title:"News",description:"The News section in OpenBB Terminal Pro provides users with the latest updates in financial markets. It offers diverse topics, along with features like Interactive Chat and Ticker Analysis for comprehensive news experience.",source:"@site/content/pro/main-menu/news.md",sourceDirName:"pro/main-menu",slug:"/pro/main-menu/news",permalink:"/pro/main-menu/news",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/news.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:2,frontMatter:{title:"News",sidebar_position:2,description:"The News section in OpenBB Terminal Pro provides users with the latest updates in financial markets. It offers diverse topics, along with features like Interactive Chat and Ticker Analysis for comprehensive news experience.",keywords:["Financial news","Market trends","News section","Interactive Chat","Ticker Analysis","Investments"]},sidebar:"tutorialSidebar",previous:{title:"Homepage",permalink:"/pro/main-menu/homepage"},next:{title:"Charting",permalink:"/pro/main-menu/charting"}},d={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"News | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,i.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/0H0Mi-w8DPc?si=gJUkxTyXTx5Xc8Ko",videoLegend:"Short introduction to News",mdxType:"TutorialVideo"}),(0,i.kt)("p",null,"Welcome to the News section of OpenBB Terminal Pro. This is your hub for staying updated with the latest financial news and market trends."),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"1",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/7073b3e3-88f0-4ff4-b16a-36fdcdded679"}),(0,i.kt)("p",null,"Our News section is divided into various topics such as Overview, Markets, Economics, Industries, Events, Tech, Politics, Ratings, and Opinion. Each topic further branches into subcategories, allowing you to navigate and explore news articles based on your interests."),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"2",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/7a5e36c5-d481-41fb-b6a7-ab54603d1ff1"}),(0,i.kt)("p",null,"Every news article can be opened for a detailed read. But that's not all. We've integrated two additional features to enhance your news reading experience:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Interactive Chat")," - Click on the chat icon at the top left of the news article to ask questions related to the article. For example, you can ask for a summary of the article or inquire about its impact on your investments.")),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"3",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/df705e9c-2d91-4914-8280-2c4216e4ce21"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ticker Analysis")," - The top right of the news article displays a list of tickers mentioned in the article. Hover over a ticker to get a quick overview including price, volume, market cap, day price range, 52-week price range, and an interactive chart of the stock price since the previous day.")),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"4",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/a51d0d99-56b0-4687-9007-f847735f3691"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the chart to open charting tab with the ticker data.")),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"5",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c5b2fe49-5d67-4ca9-a1a1-105f284aa54f"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click on "Create Dashboard for MSFT" to open a comprehensive dashboard for the ticker.')),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"6",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/47261e9d-4b92-4578-9708-0b1fa102d1c9"}),(0,i.kt)("p",null,"Please note, that the News section is not customizable."))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,i=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);