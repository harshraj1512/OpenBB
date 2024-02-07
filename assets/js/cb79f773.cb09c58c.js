"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},12687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"DevTools",sidebar_position:2,description:"This page provides information about the `openbb-devtools` package, which includes a range of dependencies essential for robust and efficient software development on the OpenBB Platform.",keywords:["DevTools","Python","Development","OpenBB Platform","Dependencies"]},l=void 0,p={unversionedId:"platform/development/developer-guidelines/devtools",id:"platform/development/developer-guidelines/devtools",title:"DevTools",description:"This page provides information about the `openbb-devtools` package, which includes a range of dependencies essential for robust and efficient software development on the OpenBB Platform.",source:"@site/content/platform/development/developer-guidelines/devtools.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/devtools",permalink:"/platform/development/developer-guidelines/devtools",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/devtools.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707308652,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:2,frontMatter:{title:"DevTools",sidebar_position:2,description:"This page provides information about the `openbb-devtools` package, which includes a range of dependencies essential for robust and efficient software development on the OpenBB Platform.",keywords:["DevTools","Python","Development","OpenBB Platform","Dependencies"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Management",permalink:"/platform/development/dependency_management"},next:{title:"Integrating Data Sources and Points",permalink:"/platform/development/developer-guidelines/add_data_point"}},s={},d=[],c={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"DevTools - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Please refer to the following PyPI distributed package: ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/openbb-devtools/"},"https://pypi.org/project/openbb-devtools/")),(0,r.kt)("p",null,"This Python package, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-devtools"),", is designed for OpenBB Platform Developers and contains a range of dependencies essential for robust and efficient software development."),(0,r.kt)("p",null,"These dependencies cater to various aspects like code formatting, security analysis, type checking, testing, and kernel management."),(0,r.kt)("p",null,"The inclusion of these packages ensures that the development process is streamlined, the code quality is maintained, and the software is secure and reliable."),(0,r.kt)("p",null,"Included dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ruff"),": A fast Python linter focused on performance and simplicity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pylint"),": A tool that checks for errors in Python code, enforces a coding standard, and looks for code smells."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mypy"),": A static type checker for Python, helping catch type errors during development."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pydocstyle"),": A linter for Python docstrings to ensure they meet certain style requirements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"black"),": An uncompromising Python code formatter, ensuring consistent code style."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bandit"),": A tool designed to find common security issues in Python code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre-commit"),": Manages and maintains pre-commit hooks that run checks before each commit, ensuring code quality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nox"),": A generic virtualenv management and test command line tool for running tests in isolated environments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pytest"),": A mature full-featured Python testing tool that helps in writing better programs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pytest-cov"),": A plugin for pytest that measures code coverage during testing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ipykernel"),": A package that provides the IPython kernel for Jupyter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types-python-dateutil"),": Type stubs for python-dateutil, aiding in static type checking."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types-toml"),": Type stubs for TOML, useful for static type checking in TOML parsing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poetry"),": A tool for dependency management and packaging in Python.")),(0,r.kt)("p",null,"Each dependency plays a critical role in ensuring the code is clean, efficient, and functional, ultimately leading to the development of high-quality software."),(0,r.kt)("p",null,"While developing code for the OpenBB Platform, one should always install the DevTools packages so that the above development tooling is available out-of-the-box."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When setting up the environment using the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb_platform/dev_install.py")," script, the DevTools will also be installed.")))}u.isMDXComponent=!0}}]);