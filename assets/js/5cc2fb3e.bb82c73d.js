"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},31792:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=k({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=n(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),{pathname:m}=(0,i.TH)(),k=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==s&&(d(t),c(r))},f=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:k},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,l?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&m.startsWith("/terminal")})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},20448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(88828),l=n(31792),i=n(85162);const s={title:"Docker",sidebar_position:5,description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",keywords:["Docker","Installation","Windows","MacOS","Linux","VcXsrv","XQuartz","docker-compose.yaml","docker-compose.x11.yaml","Docker Desktop","Run OpenBB Terminal Docker image"]},c=void 0,u={unversionedId:"terminal/installation/docker",id:"terminal/installation/docker",title:"Docker",description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",source:"@site/content/terminal/installation/docker.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/docker",permalink:"/terminal/installation/docker",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/docker.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1704320018,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:5,frontMatter:{title:"Docker",sidebar_position:5,description:"Instructions for installing OpenBB Terminal via Docker on different operating systems (Windows, MacOS, Linux). The page includes specific guidelines for Docker Desktop installation, displaying charts in Docker, and how to pull and run OpenBB Terminal Docker image.",keywords:["Docker","Installation","Windows","MacOS","Linux","VcXsrv","XQuartz","docker-compose.yaml","docker-compose.x11.yaml","Docker Desktop","Run OpenBB Terminal Docker image"]},sidebar:"tutorialSidebar",previous:{title:"PyPI",permalink:"/terminal/installation/pypi"},next:{title:"Usage",permalink:"/terminal/usage/"}},p={},d=[],m={toc:d},k="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Docker - Installation | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Installing the OpenBB Terminal via Docker supports both Windows and Unix systems (Linux + MacOS). Installation differs a bit between operating system (Windows, macOS and Linux). Please select the section matching to your OS.",(0,a.kt)("p",null)),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Docker Desktop")),(0,a.kt)("p",null,"You can find ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Desktop")," for Windows here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Download Docker Desktop")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Docker")),(0,a.kt)("p",null,"Execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\n")),(0,a.kt)("p",null,"If you have something like this, it means you haven't started Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n")),(0,a.kt)("p",null,"Start Docker, this is how the right output looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nClient:\nContext:    default\nDebug Mode: false\n\nServer:\nContainers: 14\nRunning: 2\nPaused: 1\nStopped: 10\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install VcXsrv")),(0,a.kt)("p",null,"To display charts with your container, you need: VcXsrv."),(0,a.kt)("p",null,"You can download VcXsrv here: ",(0,a.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/vcxsrv"},"Download VcXsrv")),(0,a.kt)("p",null,"Once downloaded you will open the program and accept all the defaults expect the below settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CHECK the option: ",(0,a.kt)("inlineCode",{parentName:"li"},"Disable access control")," and UNCHECK the ",(0,a.kt)("inlineCode",{parentName:"li"},"Native opengl")," command")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pull and run the container")),(0,a.kt)("p",null,"Execute these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\ndocker compose run openbb\n")),(0,a.kt)("p",null,"This will download and run the file: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,a.kt)("p",null,"This file contents the settings to pull and run OpenBB Terminal Docker image.")),(0,a.kt)(i.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Docker Desktop")),(0,a.kt)("p",null,"You can find ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Desktop")," for MacOS here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Download Docker Desktop")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Docker")),(0,a.kt)("p",null,"Execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\n")),(0,a.kt)("p",null,"If you have something like this, it means you haven't started Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n")),(0,a.kt)("p",null,"Start Docker, this is how the right output looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nClient:\nContext:    default\nDebug Mode: false\n\nServer:\nContainers: 14\nRunning: 2\nPaused: 1\nStopped: 10\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install XQuartz")),(0,a.kt)("p",null,"You can download XQuartz here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.xquartz.org"},"Download XQuartz")),(0,a.kt)("p",null,"Open X Quartz."),(0,a.kt)("p",null,"Then on ",(0,a.kt)("inlineCode",{parentName:"p"},"Preferences > Security"),"."),(0,a.kt)("p",null,"Make sure both of these options are enabled:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Authenticate connections")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Allow connections from network clients"))),(0,a.kt)("p",null,"It should look like this:\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/18151143/132548605-235d774b-9aa6-4a45-afcf-58fb775d376a.png",alt:"Screen Shot 2021-09-08 at 12 21 48 PM"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get Docker IP")),(0,a.kt)("p",null,"To get Docker IP you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'IP=$(ifconfig | grep inet | grep -v "127.0.0.1" | awk \'$1=="inet" {print $2}\')\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pull and run the container")),(0,a.kt)("p",null,"Execute these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\nxhost +$IP\ndocker compose run -e DISPLAY=$IP:0 openbb\n")),(0,a.kt)("p",null,"This will download and run the file: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,a.kt)("p",null,"This file contents the settings to pull and run OpenBB Terminal Docker image."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"xhost +$IP")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DISPLAY=$IP:0")," parts are there to allow charts display.")),(0,a.kt)(i.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Docker Desktop")),(0,a.kt)("p",null,"You can find ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Desktop")," for Linux here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Download Docker Desktop")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Docker")),(0,a.kt)("p",null,"Execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\n")),(0,a.kt)("p",null,"If you have something like this, it means you haven't started Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n")),(0,a.kt)("p",null,"Start Docker, this is how the right output looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker info\nClient:\n Context:    desktop-linux\n Debug Mode: false\n\nServer:\n Containers: 14\n Running: 2\n Paused: 1\n Stopped: 10\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pull and run the container")),(0,a.kt)("p",null,"Execute these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\ncurl -o docker-compose.x11.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.x11.yaml\n\ndocker compose -f docker-compose.yaml -f docker-compose.x11.yaml run openbb\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are experiencing issues with charts - launch the container with the following command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker compose -f docker-compose.yaml -f docker-compose.x11.yaml run -e WEBKIT_DISABLE_COMPOSITING_MODE=1 openbb\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're using remote docker host, you can connect with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -X <FQDN/IP>"),".")))))}f.isMDXComponent=!0}}]);