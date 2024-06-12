"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40289],{78717:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=t(74848),s=t(28453),d=t(94331);const i={title:"rnn",description:"Explore the use of Recurrent Neural Networks (RNNs) for time series forecasting. It explains how to perform RNN forecasts using different architectures like Vanilla RNN, LSTM, and GRU, using the Darts models forecasting library. The document covers usage examples, parameters description and features of the model.",keywords:["RNN forecast","Vanilla RNN","LSTM","GRU","darts.models.forecasting.rnn_model","parameters","examples","machine learning","model training","model prediction","time series analysis"]},l=void 0,c={id:"terminal/reference/forecast/rnn",title:"rnn",description:"Explore the use of Recurrent Neural Networks (RNNs) for time series forecasting. It explains how to perform RNN forecasts using different architectures like Vanilla RNN, LSTM, and GRU, using the Darts models forecasting library. The document covers usage examples, parameters description and features of the model.",source:"@site/content/terminal/reference/forecast/rnn.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/rnn",permalink:"/terminal/reference/forecast/rnn",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/rnn.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1718186692e3,frontMatter:{title:"rnn",description:"Explore the use of Recurrent Neural Networks (RNNs) for time series forecasting. It explains how to perform RNN forecasts using different architectures like Vanilla RNN, LSTM, and GRU, using the Darts models forecasting library. The document covers usage examples, parameters description and features of the model.",keywords:["RNN forecast","Vanilla RNN","LSTM","GRU","darts.models.forecasting.rnn_model","parameters","examples","machine learning","model training","model prediction","time series analysis"]},sidebar:"tutorialSidebar",previous:{title:"rename",permalink:"/terminal/reference/forecast/rename"},next:{title:"roc",permalink:"/terminal/reference/forecast/roc"}},a={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"forecast /rnn - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(r.p,{children:["Perform RNN forecast (Vanilla RNN, LSTM, GRU): ",(0,n.jsx)(r.a,{href:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.rnn_model.html",children:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.rnn_model.html"})]}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"rnn [--hidden-dim HIDDEN_DIM] [--training_length TRAINING_LENGTH] [--naive] [-d {}] [-c TARGET_COLUMN] [-n N_DAYS] [-t TRAIN_SPLIT] [-i INPUT_CHUNK_LENGTH] [--force-reset FORCE_RESET] [--save-checkpoints SAVE_CHECKPOINTS] [--model-save-name MODEL_SAVE_NAME] [--n-epochs N_EPOCHS] [--model-type MODEL_TYPE] [--dropout DROPOUT] [--batch-size BATCH_SIZE] [--end S_END_DATE] [--start S_START_DATE] [--learning-rate LEARNING_RATE] [--residuals] [--forecast-only] [--export-pred-raw]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"hidden_dim"}),(0,n.jsx)(r.td,{children:"Size for feature maps for each hidden RNN layer (h_n)"}),(0,n.jsx)(r.td,{children:"20"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"training_length"}),(0,n.jsx)(r.td,{children:"The length of both input (target and covariates) and output (target) time series used during training. Generally speaking, training_length should have a higher value than input_chunk_length because otherwise during training the RNN is never run for as many iterations as it will during training."}),(0,n.jsx)(r.td,{children:"20"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"naive"}),(0,n.jsx)(r.td,{children:"Show the naive baseline for a model."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"target_dataset"}),(0,n.jsx)(r.td,{children:"The name of the dataset you want to select"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"target_column"}),(0,n.jsx)(r.td,{children:"The name of the specific column you want to use"}),(0,n.jsx)(r.td,{children:"close"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"n_days"}),(0,n.jsx)(r.td,{children:"prediction days."}),(0,n.jsx)(r.td,{children:"5"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"train_split"}),(0,n.jsx)(r.td,{children:"Start point for rolling training and forecast window. 0.0-1.0"}),(0,n.jsx)(r.td,{children:"0.85"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"input_chunk_length"}),(0,n.jsx)(r.td,{children:"Number of past time steps for forecasting module at prediction time."}),(0,n.jsx)(r.td,{children:"14"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"force_reset"}),(0,n.jsx)(r.td,{children:"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be discarded)."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"save_checkpoints"}),(0,n.jsx)(r.td,{children:"Whether to automatically save the untrained model and checkpoints."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"model_save_name"}),(0,n.jsx)(r.td,{children:"Name of the model to save."}),(0,n.jsx)(r.td,{children:"rnn_model"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"n_epochs"}),(0,n.jsx)(r.td,{children:"Number of epochs over which to train the model."}),(0,n.jsx)(r.td,{children:"300"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"model_type"}),(0,n.jsx)(r.td,{children:'Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU")'}),(0,n.jsx)(r.td,{children:"LSTM"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dropout"}),(0,n.jsx)(r.td,{children:"Fraction of neurons affected by Dropout, from 0 to 1."}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"batch_size"}),(0,n.jsx)(r.td,{children:"Number of time series (input and output) used in each training pass"}),(0,n.jsx)(r.td,{children:"32"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"s_end_date"}),(0,n.jsx)(r.td,{children:"The end date (format YYYY-MM-DD) to select for testing"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"s_start_date"}),(0,n.jsx)(r.td,{children:"The start date (format YYYY-MM-DD) to select for testing"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"learning_rate"}),(0,n.jsx)(r.td,{children:"Learning rate during training."}),(0,n.jsx)(r.td,{children:"0.001"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"residuals"}),(0,n.jsx)(r.td,{children:"Show the residuals for the model."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"forecast_only"}),(0,n.jsx)(r.td,{children:"Do not plot the historical data without forecasts."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export_pred_raw"}),(0,n.jsx)(r.td,{children:"Export predictions to a csv file."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"2022 Jul 23, 10:36 (\ud83e\udd8b) /forecast/ $ load GME_20220719_123734.csv -a GME\n\n2022 Jul 23, 11:03 (\ud83e\udd8b) /forecast/ $ rnn GME\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 115/115 [00:0700:00, 15.10it/s]\nRNN model obtains MAPE: 14.67%\n\n\n\n       Actual price: $ 146.64\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime            \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-07-19 00:00:00 \u2502 $ 146.89   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-20 00:00:00 \u2502 $ 148.58   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-21 00:00:00 \u2502 $ 150.00   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-22 00:00:00 \u2502 $ 151.23   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-25 00:00:00 \u2502 $ 152.29   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/72827203/180615355-5c30635a-be63-4b9a-836d-9feb3d3ac263.png",alt:"rnn"})}),"\n",(0,n.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(5260),s=t(74848);function d(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);