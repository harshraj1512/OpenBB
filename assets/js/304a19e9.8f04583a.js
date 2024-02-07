"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(35742);function o(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,l]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(i.Toggle,{isOn:o,handleChange:()=>l(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},72510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(88828),l=n(20630);const r={title:"Overlay Financial Data",sidebar_position:3,description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",keywords:["hold on command","overlay financial data","same axis plotting","customizing charts","financial data comparison","MatLab","financial charts","FAANG companies","CPI","GDP","data visualization"]},s=void 0,d={unversionedId:"terminal/usage/routines/overlay-financial-data",id:"terminal/usage/routines/overlay-financial-data",title:"Overlay Financial Data",description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",source:"@site/content/terminal/usage/routines/overlay-financial-data.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/overlay-financial-data",permalink:"/terminal/usage/routines/overlay-financial-data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/overlay-financial-data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:3,frontMatter:{title:"Overlay Financial Data",sidebar_position:3,description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",keywords:["hold on command","overlay financial data","same axis plotting","customizing charts","financial data comparison","MatLab","financial charts","FAANG companies","CPI","GDP","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to Routines",permalink:"/terminal/usage/routines/introduction-to-routines"},next:{title:"Routine Macro Recorder",permalink:"/terminal/usage/routines/routine-macro-recorder"}},c={},u=[{value:"Hold on command",id:"hold-on-command",level:2},{value:"Customizing Charts",id:"customizing-charts",level:2},{value:"Example as a Pipeline of Commands",id:"example-as-a-pipeline-of-commands",level:3},{value:"Example as a Routine",id:"example-as-a-routine",level:3},{value:"Known Issues",id:"known-issues",level:3}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"Overlay financial data - Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)(l.Z,{youtubeLink:"https://www.youtube.com/embed/GZ20uk4o2Nk?si=vxeA-CxSUq85R_zj",videoLegend:"Short video on how to use hold on command to overlay financial data",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"hold-on-command"},"Hold on command"),(0,i.kt)("p",null,"Often analysts want to be able to overlay financial data. This is possible through the introduction of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hold on")," command."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hold")," functionality is available to allow users to overlay multiple datasets onto the same chart axes. This is useful for comparing datasets, or for plotting multiple datasets that share the same x-axis. This guide will walk through the functionalities and the recommended workflow."),(0,i.kt)("p",null,"Drawing inspiration from MatLab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"hold")," function is used to toggle the holding state of the current figure. Unlike MatLab, this function needs to be called before calling any function that charts. The hold state can be turned on, from any terminal menu, by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"hold on\n")),(0,i.kt)("p",null,"By default, new plots will be placed on a new axis, meaning comparing the magnitude values can be tricky. If you wish to plot subsequent figures on the same axis, you can use the sameaxis argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"hold on --sameaxis\n")),(0,i.kt)("p",null,"Once the hold state is turned on, any terminal command with a plot will not be shown until the hold is turned off. To turn off the hold state, and see the combined figure, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"hold off\n")),(0,i.kt)("p",null,"An example workflow is as follows. What this will do is plot the CPI and the GDP of the United States on the same axis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/economy/hold on\ngdp -c united_states\ncpi -c united_states\nhold off\n")),(0,i.kt)("p",null,"Which outputs:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/a3b1f09e-1a64-4af0-a5a2-070590d848e1",alt:"hold on ex1"})),(0,i.kt)("p",null,"To demonstrate, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--sameaxis")," argument, we can run the previous commands, but starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"hold on --sameaxis"),". Because GDP is being measured by USD-per-capita (OECD), and CPI is a function of percent, we will only see CPI as a flat line."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/43219ca7-126b-4782-bd95-5fa8967e0c6c",alt:"hold on ex2"})),(0,i.kt)("h2",{id:"customizing-charts"},"Customizing Charts"),(0,i.kt)("p",null,"A chart is only as good as its labelling. In the previous example, we can see that the legends reflected the command paths used, but not the arguments. If we added a second country, we would not be able to tell which line is which country. In order to avoid this confusion, when the hold state is on, every function comes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"--legend")," argument."),(0,i.kt)("p",null,"Text following the, ",(0,i.kt)("inlineCode",{parentName:"p"},"--legend"),", argument is passed into the legend when the chart is created.  If a command is run without the, ",(0,i.kt)("inlineCode",{parentName:"p"},"--legend"),", argument, it will default to using the command location. In rare cases, a legend may not appear due to it not being defined in the functions ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," file.  In this case, please raise a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose"},"GitHub issue")," so the team can address it."),(0,i.kt)("p",null,"An additional customization is the chart title.  This can be specified by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"--title")," argument to the hold off functionality.  To exemplify these capabilities, we can plot an income statement item from many companies.  We will examine FAANG companies and plot their revenues on the same axis, over the last forty quarters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/hold on --sameaxis\nincome -t AAPL -q -l 40 --plot revenue --legend AAPL Revenue\nincome -t META -q -l 40 --plot revenue --legend META\nincome -t AMZN -q -l 40 --plot revenue\nincome -t GOOG -q -l 40 --plot revenue --legend GOOG\nincome -t NFLX -q -l 40 --plot revenue --legend netflix\nhold off --title FAANG Revenues 10 Year\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/793d8309-6e49-42ca-b9bd-ff0dad9da959",alt:"hold on custom"})),(0,i.kt)("h3",{id:"example-as-a-pipeline-of-commands"},"Example as a Pipeline of Commands"),(0,i.kt)("p",null,"The following pipeline of commands is the equivalent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/hold on --sameaxis/income -t AAPL -q -l 40 --plot revenue --legend AAPL Revenue/income -t META -q -l 40 --plot revenue --legend META/income -t AMZN -q -l 40 --plot revenue/income -t GOOG -q -l 40 --plot revenue --legend GOOG/income -t NFLX -q -l 40 --plot revenue --legend netflix/hold off --title FAANG Revenues 10 Year\n")),(0,i.kt)("h3",{id:"example-as-a-routine"},"Example as a Routine"),(0,i.kt)("p",null,"Or, a user can create a routine that can be run with the, ",(0,i.kt)("inlineCode",{parentName:"p"},"/exe"),", command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    $STOCKS=AAPL,AMZN,MSFT,TSLA,GOOG\n\n    stocks\n    fa\n    hold on --sameaxis\n\n    foreach $$tick in $STOCKS:\n        income -t $$tick -l 40 -q --plot revenue --legend $$tick revenue\n    end\n\n    hold off--title FAANG Revenues 10 Year\n")),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"Unfortunately, there are some known issues with the hold functionality. These are being worked on, and will be addressed in future releases. The following are known issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When plotting charts, if the x axes are not the same, there may be an undesired result. For example, if looking at the ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedincome/ycrv")," function, the x axes is a number in years, so trying to plot a date along x will not work.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Candle charts are not supported within the hold state. A work around to plot a close value would be to navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"qa/pick Close/line"),", which will plot a line chart.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Figures that have subplots on their own are not supported. This functionality is meant to overlay data on the same axes, so if there are multiple subplots, it is not supported. An example would be a function like ",(0,i.kt)("inlineCode",{parentName:"p"},"ta/macd"),". The TA functions already have a multiple indicator functionality, ",(0,i.kt)("inlineCode",{parentName:"p"},"ta/multi"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Running a single plot in the hold state messes with the figure layout and does not give the desired margin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Time series data of varying frequencies may not produce smooth visuals."))))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,i=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);