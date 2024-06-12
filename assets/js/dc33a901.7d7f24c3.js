"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13421],{40141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(74848),o=t(28453),r=t(94331),s=t(69396);const a={title:"Integrate your own backend",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},d=void 0,c={id:"pro/data-connectors/integrate-your-own-backend",title:"Integrate your own backend",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",source:"@site/content/pro/data-connectors/integrate-your-own-backend.md",sourceDirName:"pro/data-connectors",slug:"/pro/data-connectors/integrate-your-own-backend",permalink:"/pro/data-connectors/integrate-your-own-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/data-connectors/integrate-your-own-backend.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,sidebarPosition:2,frontMatter:{title:"Integrate your own backend",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Endpoint Examples",permalink:"/pro/data-connectors/single-widget/examples"},next:{title:"Native integrations",permalink:"/pro/data-connectors/native-integrations"}},l={},h=[{value:"Using OpenBB Cookie-Cutter",id:"using-openbb-cookie-cutter",level:2},{value:"Using Language-Agnostic API",id:"using-language-agnostic-api",level:2},{value:"Quick Start with Python and FastAPI",id:"quick-start-with-python-and-fastapi",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"Integrate your own backend | OpenBB Terminal Pro Docs"}),"\n","\n",(0,i.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/bkhtgp48MZc?si=kvrq1HgtUIFmhgyX",videoLegend:"Short introduction to integrating your own backend"}),"\n",(0,i.jsx)(n.h2,{id:"using-openbb-cookie-cutter",children:"Using OpenBB Cookie-Cutter"}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB cookie-cutter approach provides a standardized way to host your data and integrate it into widgets. This method is versatile and can be used whether your data is hosted internally or externally. Here's how to get started:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Prepare the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file"]}),": This file defines widget properties such as name, description, category, type, endpoint, and more. Make sure it's well-structured. See an example below."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set up the OpenBB API"}),": Follow the OpenBB API documentation to set up your API. Implement the necessary endpoints that align with the widget definitions in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Integrate endpoints"}),": Define the appropriate endpoint for each custom widget in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file. This endpoint connects your API to the widget."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure widgets"}),": Users can add the custom widgets using the Terminal Pro interface by providing the relevant endpoint details."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-language-agnostic-api",children:"Using Language-Agnostic API"}),"\n",(0,i.jsx)(n.p,{children:"The language-agnostic API approach offers flexibility by allowing you to use the programming language and tools that best suit your needs. You can host this API internally or externally, making it accessible to the Terminal Pro widgets. Here's how:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Design and implement your API"}),": Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create widget definitions"}),": As with the OpenBB API approach, create corresponding definitions for your custom widgets in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file. Specify the API endpoint, name, description, category, type, etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Connect widgets to your API"}),": Once your API is up and running, users can add the custom widgets using the Terminal Pro interface. They just need to input the endpoint details, and the widget will fetch and display the data from your API."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"quick-start-with-python-and-fastapi",children:"Quick Start with Python and FastAPI"}),"\n",(0,i.jsxs)(n.p,{children:["Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main",children:"this open source repository"})," for examples."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(5260),o=t(74848);function r(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(96540),o=t(23174),r=t(74848);function s(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[s,a]=(0,i.useState)(!0);return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,r.jsx)(o.Toggle,{isOn:s,handleChange:()=>a(!s)})})]}),s&&(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var i,o=(i=t(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);