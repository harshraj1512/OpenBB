"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50112],{70312:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=s(74848),i=s(28453),t=s(94331);const o={title:"Developer Issues",sidebar_position:7,description:"A comprehensive troubleshooting guide for developers regarding common issues such as launching in debug mode, dealing with GitHub pull requests, git pull errors, missing 'wheel', non-existent .whl files, handling JSONDecodeError, correcting CRLF errors, running OpenBB via VS Code integrated terminal, and more.",keywords:["Developer Issues","Debug mode","GitHub pull requests","git pull error","wheel missing","whl files","JSONDecodeError","CRLF error","VS Code integrated terminal"]},l=void 0,d={id:"sdk/faqs/developer_issues",title:"Developer Issues",description:"A comprehensive troubleshooting guide for developers regarding common issues such as launching in debug mode, dealing with GitHub pull requests, git pull errors, missing 'wheel', non-existent .whl files, handling JSONDecodeError, correcting CRLF errors, running OpenBB via VS Code integrated terminal, and more.",source:"@site/content/sdk/faqs/developer_issues.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/developer_issues",permalink:"/sdk/faqs/developer_issues",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/developer_issues.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,sidebarPosition:7,frontMatter:{title:"Developer Issues",sidebar_position:7,description:"A comprehensive troubleshooting guide for developers regarding common issues such as launching in debug mode, dealing with GitHub pull requests, git pull errors, missing 'wheel', non-existent .whl files, handling JSONDecodeError, correcting CRLF errors, running OpenBB via VS Code integrated terminal, and more.",keywords:["Developer Issues","Debug mode","GitHub pull requests","git pull error","wheel missing","whl files","JSONDecodeError","CRLF error","VS Code integrated terminal"]},sidebar:"tutorialSidebar",previous:{title:"Bugs, Support, and Feedback",permalink:"/sdk/faqs/bugs_support_feedback"},next:{title:"Showcase",permalink:"/sdk/showcase"}},a={},c=[];function h(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{title:"Developer Issues - Faqs | OpenBB SDK Docs"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"How do I launch in debug mode?"}),(0,r.jsxs)(n.p,{children:["The PyWry window can be run in debug mode for identifying specific issues. Use the code block below - with the ",(0,r.jsx)(n.code,{children:"obb"})," Python environment active - to import the OpenBB SDK in debug mode."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nfrom openbb_terminal.core.plots.backend import plots_backend\n\nos.environ["DEBUG_MODE"] = "True"\nplots_backend().start(True)\n\nfrom openbb_terminal.sdk import openbb\n'})}),(0,r.jsx)(n.p,{children:"The charts and tables will now include a developer tools button, located at the top-left of the window."})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"What branch on GitHub should pull requests be submitted to?"}),(0,r.jsxs)(n.p,{children:["Pull requests submitted to the Main branch will not be merged, please create branches from the ",(0,r.jsx)(n.code,{children:"develop"})," branch."]}),(0,r.jsx)(n.p,{children:"To switch to the develop branch:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"git checkout develop\n"})}),(0,r.jsx)(n.p,{children:"Branches must also follow the naming convention:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["/feature/name_your_branch","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For developing functionality."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["/hotfix/name_your_patch","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For bug patches."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:'Error: "git pull" fails because of a hot fix: cannot lock ref'}),(0,r.jsx)(n.p,{children:"If the error message looks something like:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"cannot lock ref: 'refs/remotes/origin/hotfix' exists; cannot create\n"})}),(0,r.jsx)(n.p,{children:"Try:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"git remote prune origin\ngit pull\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"What does it mean if it says wheel is missing?"}),(0,r.jsxs)(n.p,{children:["If you receive any notifications regarding ",(0,r.jsx)(n.code,{children:"wheel"})," missing, this could be due to this dependency missing."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"conda install -c conda-forge wheel"})," or ",(0,r.jsx)(n.code,{children:"pip install wheel"})]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Why do these .whl files not exist?"}),(0,r.jsx)(n.p,{children:"If you get errors about .whl files not existing (usually on Windows) you have to reinitialize the following folder.\nJust removing the 'artifacts' folder could also be enough:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"Location"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Linux"}),(0,r.jsx)(n.td,{children:'"~/.cache/pypoetry"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:'"~/Library/Caches/pypoetry"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows"}),(0,r.jsx)(n.td,{children:'"%localappdata%/pypoetry/cache"'})]})]})]}),(0,r.jsx)(n.p,{children:"When you try to add a package to Poetry it is possible that it causes a similar issue. Here you can remove the\n'artifacts' folder again to reinitialize Poetry."}),(0,r.jsx)(n.p,{children:"If you run into trouble with Poetry, and the advice above did not help, your best bet is to try"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"poetry update --lock"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"conda deactivate"})," -> ",(0,r.jsx)(n.code,{children:"conda activate obb"}),", then try again"]}),"\n",(0,r.jsxs)(n.li,{children:["Track down the offensive package and purge it from your anaconda ",(0,r.jsx)(n.code,{children:"<environment_name>"})," folder, then try again"]}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"Location"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Linux/Mac"}),(0,r.jsx)(n.td,{children:"~/anaconda3/envs, or , ~/opt/anaconda3/envs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows"}),(0,r.jsx)(n.td,{children:"%userprofile%/anaconda3/envs"})]})]})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Completely nuke your conda environment folder and make a new environment from scratch"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"conda deactivate"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"conda env remove -n obb"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"conda clean -a"})}),"\n",(0,r.jsx)(n.li,{children:"Make a new environment and install dependencies again."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reboot your computer and try again"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Submit a ticket on GitHub"}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"What does the JSONDecodeError mean during poetry install?"}),(0,r.jsxs)(n.p,{children:["Sometimes poetry can throw a ",(0,r.jsx)(n.code,{children:"JSONDecodeError"})," on random packages while running ",(0,r.jsx)(n.code,{children:"poetry install"}),". This can be observed on macOS 10.14+ running python 3.8+. This is because of the use of an experimental installer that can be switched off to avoid the mentioned error. Run the code below as advised ",(0,r.jsx)(n.a,{href:"https://github.com/python-poetry/poetry/issues/4210",children:"here"})," and it should fix the installation process."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"poetry config experimental.new-installer false\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Commands that may help you in case of an error:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"python -m pip install --upgrade pip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"poetry update --lock"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"poetry install"})}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"How do I deal with errors regarding CRLF?"}),(0,r.jsxs)(n.p,{children:["When trying to commit code changes, pylint will prevent you from doing so if your line break settings are set to\nCRLF (default for Windows).\nThis is because the entire package uses LF (default for Linux/Mac), and it is therefore\nimportant that you change this setting to LF ",(0,r.jsx)(n.em,{children:"before"})," you make any changes to the code."]}),(0,r.jsx)(n.p,{children:"It is possible that CRLF automatically turns back on, you can correct this with:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git config --global core.autocrlf false\n"})}),(0,r.jsx)(n.p,{children:"In case you already made coding adjustments, you have to reset your cache, and the changes you made to the code with\nthe following:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git rm --cached -r .\ngit reset --hard\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Why can't I run OpenBB via the VS Code integrated terminal?"}),(0,r.jsx)(n.p,{children:"This occurs when VS Code terminal python version/path is different from the terminal version."}),(0,r.jsxs)(n.p,{children:["To fix it add this to vscode JSON settings (",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/54582361/vscode-terminal-shows-incorrect-python-version-and-path-launching-terminal-from",children:"ref"}),"):"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'    "terminal.integrated.inheritEnv": false,\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>t});s(96540);var r=s(5260),i=s(74848);function t(e){let{title:n}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);