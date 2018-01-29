Search.setIndex({docnames:["btgym","btgym.algorithms","btgym.datafeed","btgym.envs","btgym.monitor","btgym.rendering","btgym.research","btgym.strategy","index","intro"],envversion:53,filenames:["btgym.rst","btgym.algorithms.rst","btgym.datafeed.rst","btgym.envs.rst","btgym.monitor.rst","btgym.rendering.rst","btgym.research.rst","btgym.strategy.rst","index.rst","intro.rst"],objects:{"btgym.algorithms":{envs:[1,0,0,"-"],memory:[1,0,0,"-"],rollout:[1,0,0,"-"],runner:[1,0,0,"-"],worker:[1,0,0,"-"]},"btgym.algorithms.envs":{AtariRescale42x42:[1,1,1,""]},"btgym.algorithms.memory":{Memory:[1,1,1,""]},"btgym.algorithms.memory.Memory":{_sample_priority:[1,2,1,""],add:[1,2,1,""],add_rollout:[1,2,1,""],fill:[1,2,1,""],sample_uniform:[1,2,1,""]},"btgym.algorithms.rollout":{Rollout:[1,1,1,""],make_data_getter:[1,3,1,""]},"btgym.algorithms.rollout.Rollout":{add:[1,2,1,""],add_memory_sample:[1,2,1,""],get_frame:[1,2,1,""],pop_frame:[1,2,1,""],process:[1,2,1,""],process_rp:[1,2,1,""]},"btgym.algorithms.runner":{RunnerThread:[1,1,1,""],env_runner:[1,3,1,""]},"btgym.algorithms.runner.RunnerThread":{run:[1,2,1,""]},"btgym.algorithms.worker":{Worker:[1,1,1,""]},"btgym.algorithms.worker.Worker":{run:[1,2,1,""]},"btgym.datafeed":{base:[2,0,0,"-"],derivative:[2,0,0,"-"],stateful:[2,0,0,"-"]},"btgym.datafeed.base":{BTgymBaseData:[2,1,1,""],DataSampleConfig:[2,4,1,""],EnvResetConfig:[2,4,1,""],random_beta:[2,3,1,""]},"btgym.datafeed.base.BTgymBaseData":{_sample:[2,2,1,""],_sample_interval:[2,2,1,""],_sample_random:[2,2,1,""],describe:[2,2,1,""],read_csv:[2,2,1,""],reset:[2,2,1,""],set_logger:[2,2,1,""],set_params:[2,2,1,""],to_btfeed:[2,2,1,""]},"btgym.datafeed.derivative":{BTgymDataTrial:[2,1,1,""],BTgymDataset:[2,1,1,""],BTgymEpisode:[2,1,1,""],BTgymRandomDataDomain:[2,1,1,""]},"btgym.datafeed.derivative.BTgymDataset":{BTgymSimpleTrial:[2,1,1,""],trial_class_ref:[2,5,1,""]},"btgym.datafeed.derivative.BTgymRandomDataDomain":{episode_class_ref:[2,5,1,""],trial_class_ref:[2,5,1,""]},"btgym.datafeed.stateful":{BTgymSequentialDataDomain:[2,1,1,""]},"btgym.datafeed.stateful.BTgymSequentialDataDomain":{reset:[2,2,1,""],sample:[2,2,1,""]},"btgym.dataserver":{BTgymDataFeedServer:[0,1,1,""]},"btgym.dataserver.BTgymDataFeedServer":{get_data:[0,2,1,""],run:[0,2,1,""]},"btgym.envs":{backtrader:[3,0,0,"-"]},"btgym.envs.backtrader":{BTgymEnv:[3,1,1,""]},"btgym.envs.backtrader.BTgymEnv":{_assert_response:[3,2,1,""],_close:[3,2,1,""],_comm_with_timeout:[3,6,1,""],_force_control_mode:[3,2,1,""],_get_dataset_info:[3,2,1,""],_print_space:[3,2,1,""],_render:[3,2,1,""],_restart_data_server:[3,2,1,""],_restart_server:[3,2,1,""],_seed:[3,2,1,""],_start_data_server:[3,2,1,""],_start_server:[3,2,1,""],_step:[3,2,1,""],_stop_data_server:[3,2,1,""],_stop_server:[3,2,1,""],get_stat:[3,2,1,""],reset:[3,2,1,""],reset_data:[3,2,1,""],stop:[3,2,1,""]},"btgym.monitor":{tensorboard2:[4,0,0,"-"],tensorboard:[4,0,0,"-"]},"btgym.monitor.tensorboard":{BTgymMonitor:[4,1,1,""],Tensorboard:[4,1,1,""]},"btgym.monitor.tensorboard.BTgymMonitor":{write:[4,2,1,""]},"btgym.monitor.tensorboard.Tensorboard":{start:[4,2,1,""],stop:[4,2,1,""]},"btgym.monitor.tensorboard2":{BTgymMonitor2:[4,1,1,""],Tensorboard:[4,1,1,""]},"btgym.monitor.tensorboard2.BTgymMonitor2":{write:[4,2,1,""]},"btgym.monitor.tensorboard2.Tensorboard":{start:[4,2,1,""],stop:[4,2,1,""]},"btgym.rendering":{plotter:[5,0,0,"-"],renderer:[5,0,0,"-"]},"btgym.rendering.plotter":{BTgymPlotter:[5,1,1,""],DrawCerebro:[5,1,1,""]},"btgym.rendering.plotter.BTgymPlotter":{savefig:[5,2,1,""]},"btgym.rendering.plotter.DrawCerebro":{run:[5,2,1,""]},"btgym.rendering.renderer":{BTgymNullRendering:[5,1,1,""],BTgymRendering:[5,1,1,""]},"btgym.rendering.renderer.BTgymRendering":{draw_episode:[5,2,1,""],draw_image:[5,2,1,""],draw_plot:[5,2,1,""],initialize_pyplot:[5,2,1,""],parse_response:[5,2,1,""],render:[5,2,1,""],rgb_empty:[5,2,1,""],to_string:[5,2,1,""]},"btgym.server":{BTgymServer:[0,1,1,""]},"btgym.server.BTgymServer":{get_data:[0,2,1,""],run:[0,2,1,""]},"btgym.spaces":{DictSpace:[0,1,1,""]},"btgym.strategy":{base:[7,0,0,"-"],observers:[7,0,0,"-"]},"btgym.strategy.base":{BTgymBaseStrategy:[7,1,1,""]},"btgym.strategy.base.BTgymBaseStrategy":{action_norm:[7,2,1,""],action_one_hot:[7,2,1,""],get_done:[7,2,1,""],get_info:[7,2,1,""],get_reward:[7,2,1,""],get_state:[7,2,1,""],next:[7,2,1,""],notify_order:[7,2,1,""],set_datalines:[7,2,1,""],update_sliding_stat:[7,2,1,""]},"btgym.strategy.observers":{NormPnL:[7,1,1,""],Position:[7,1,1,""],Reward:[7,1,1,""]},btgym:{dataserver:[0,0,0,"-"],server:[0,0,0,"-"],spaces:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:data","5":"py:attribute","6":"py:staticmethod"},terms:{"0_record":2,"10th":7,"1_time_unit":2,"2_rnn":[],"2nd":[],"3rd":[],"42x42":1,"4_10":[],"4_11":[],"4_6":[],"4_7":[],"case":2,"class":[0,1,2,3,4,5,7,9],"default":[0,2,3,5,7,9],"final":[],"float":[2,7],"function":[1,2],"import":9,"int":[0,1,2,3],"long":[0,1],"new":[0,2,3],"return":[0,1,2,3,5,7,9],"short":9,"static":3,"switch":0,"true":[1,2,3,4,5,9],"while":[2,7,9],Adding:9,For:[3,9],NOT:1,One:[1,7],That:5,The:[1,2,9],Then:2,There:[],USED:1,Uses:[],__init__:7,_aac_:[],_assert_respons:3,_btgymanalyz:[7,9],_close:3,_comm_with_timeout:3,_config_stack:2,_done:[0,9],_force_control_mod:3,_get_dataset_info:3,_get_raw_st:7,_getstat:[0,9],_log_nam:[],_make_polici:[],_pc_:[],_ppo_:[],_print_spac:3,_real:1,_render:3,_reset:[0,9],_restart_data_serv:3,_restart_serv:3,_rp_:[],_sampl:2,_sample_interv:2,_sample_prior:1,_sample_random:2,_seed:3,_start_data_serv:3,_start_serv:[0,3],_step:3,_stop:[0,9],_stop_data_serv:3,_stop_serv:[3,9],_struct:1,_tab:3,_use_target_polici:[],_vr_:[],a3c:8,aac1dpolici:[],aac:8,aac_loss_def:[],aacstackedrl2polici:[],abov:2,abs:[],absolut:[],ac_spac:[],accept:[0,1,3,9],accord:[0,2,3,7,9],achiev:9,act:[],act_target:[],action:[0,3,7,9],action_norm:7,action_one_hot:7,action_reward:[],action_spac:3,actor:9,actual:[0,2,5,9],add:[0,1,9],add_memory_sampl:1,add_rollout:1,addanalyz:9,added:7,addr:4,address:3,addsiz:9,addstrategi:[7,9],aded:[],adv_target:[],advanc:9,advantag:[1,9],after:9,again:0,agent:[0,1,5,7,9],agent_act:0,ahead:9,aim:[],aka:[],algo:9,algorithm:[7,9],algoritm:9,alia:2,alik:1,all:[1,2,3,7,9],allow:[1,2],along:[1,9],alpha:[2,5],alreadi:[5,9],also:[1,2],altern:[],alwai:[2,7],amount:2,analyt:9,analyz:9,ang:[],ani:[0,3,7,9],anoth:1,ant:4,anywai:[],apach:[],api:3,api_shel:3,apll:[],app:4,appear:5,append:1,appli:[3,7],applic:[],approach:[1,9],arbitrari:7,architectur:9,area:[],arg:[0,1,2,3,5,7],argsument:7,argument:[3,7,9],arrai:[0,1,2,5],array_lik:2,arxiv:[],ascend:2,ascii:2,ask:[],assum:[7,9],async:1,asynchron:0,atari:1,atari_test:1,atarirescale42x42:1,attempt:[1,9],attr:7,attribut:[0,2,5],augment:[],automat:7,aux:9,aux_estim:[],auxiliari:0,auxillari:[],avail:[],average_period:[],avg_period:[],b_alpha:[0,2,3],b_beta:[0,2,3],back:[2,9],backtest:[3,7,9],backtrad:[0,5,7,8,9],base:[1,3,8,9],base_aac:9,base_data:2,baseaac:[],baseaacpolici:[],basebtgymdataset:2,baselin:[],basiclstmcel:[],batch:[1,2],batch_siz:1,bayesian:2,bbox:5,becam:7,becaus:[],been:[0,2],befor:[1,3,5,7,9],begin:[1,9],beginningg:2,behavior:[],behaviour:[5,7],being:[0,2],below:[7,9],besid:9,best:7,beta:2,between:1,bias_init:[],bind:0,block:[5,9],bodi:[0,1],bold:5,bool:[0,1,2,3,7],borrow:[],both:2,box:[7,9],box_text:5,brief:1,broadcast:2,broker:[7,9],btgym:9,btgym_aac_log:[],btgym_log:4,btgym_serv:3,btgymbasedata:2,btgymbasedatatri:2,btgymbasestrateg:3,btgymbasestrategi:[7,9],btgymdata:2,btgymdatadomain:3,btgymdatafeedserv:0,btgymdataset:[2,9],btgymdatatri:2,btgymenv:[3,9],btgymepisod:2,btgymmonitor2:4,btgymmonitor:4,btgymnullrend:5,btgymplott:5,btgymrandomdatadomain:2,btgymrend:5,btgymsequentialdatadomain:2,btgymserv:0,btgymsimpletri:2,btgymstrategi:[7,9],btgyn:1,btserver:9,buggi:8,bui:[0,7],built:5,calcul:7,call:[1,2,3,5,7,9],callabl:1,callback:[],can:[1,2,5,7,8,9],cardin:2,carri:[],cash:7,categori:4,caution:[],caveat:2,cerbro:9,cerebro:[0,3,5,7,9],certain:1,chang:[8,9],channel:[],check:[2,3,9],checkpoint:1,chief:1,child:2,class_config_dict:1,class_ref:[],classif:[],classifi:1,clear_port:[],clearli:[],clip:[],clip_epsilon:[],clone:9,close:[0,2,3,4,7,9],closer:[],closur:7,cluster:1,cluster_config:1,cluster_spec:1,code:1,collect:[1,9],color:5,column:2,com:[1,2,7,9],come:1,commiss:9,commun:[0,3,9],compat:9,complet:3,complex:9,compos:[7,9],comput:[1,7,9],computation:9,con:[],concaten:[],concept:[2,9],concern:5,condit:[7,9],config:[],configur:[0,1,2,3],conjunct:[],connect:3,connect_timeout:[0,3],conolut:9,consist:[],constant:9,constantli:1,constructor:1,contain:[0,2,7],content:[],context:[1,9],context_depth:1,continu:[1,2],contrib:[],control:[0,3,5,7,9],conv1d:[],conv2d:[],conv2d_dw:[],conv:[],conv_1d_filter_s:[],conv_1d_network:[],conv_1d_num_filt:[],conv_1d_num_lay:[],conv_1d_strid:[],conv_2d_filter_s:[],conv_2d_layer_ref:[],conv_2d_network:[],conv_2d_num_filt:[],conv_2d_num_lay:[],conv_2d_strid:[],conveni:4,convent:[1,2,5,7],converg:9,convers:2,convert:[1,2,5],convolut:9,copi:9,core:[0,2,9],corr:[],correct:2,correctli:2,correspond:[3,9],cost:9,could:0,count:2,crazi:5,creat:2,critic:9,crop:[],csv:[2,3,9],current:[0,2,3,5,7],custom:[3,7,9],cvpr2010:[],cycl:[],dai:[2,9],dat_ascii_eurusd_m1_2016:9,data:[0,1,2,3,4,5,7],data_control:3,data_filenam:2,data_mast:3,data_network_address:[0,3],data_port:3,data_serv:3,datadomain:[],datafe:[0,3,7,8],datafeed_arg:3,datafil:9,datafram:2,datalin:7,datasampleconfig:2,dataserv:8,dataset:[0,2,3,7,9],dataset_stat:[0,7],datatrialiter:[],date_tim:2,datetim:2,debug:3,decai:0,deconv2d:[],deconvolut:[],deep:[8,9],deeper:7,def:2,defin:[0,2,7,9],define_datalin:7,definit:8,delai:[],delet:4,deliv:[],denomin:1,dense_aac:[],dense_aac_network:[],dense_rp_network:[],depend:9,deprec:2,depth:1,depthwis:[],dequ:7,deriv:8,describ:2,descript:[2,3,7,8],design:9,desir:[1,7],despit:1,detail:[2,3,9],dev:2,devstrat_4_10:[],devstrat_4_11:[],devstrat_4_12:[],devstrat_4_6:[],devstrat_4_7:[],devstrat_4_8:[],devstrat_4_9:[],diagram:9,dict:[0,1,2,3,5,7,9],dictionari:[0,1,2,3,5,7],dictspac:[0,1],differ:2,dilat:2,dim:1,dimens:[1,7],dimension:[],direct:2,directli:2,directori:4,dirichlet:2,discard:0,disclaim:9,discount:1,discret:[],disentangl:[],disk:[5,9],distinct:1,distr:[],distribut:[1,2],doc:9,docu:[7,9],document:9,doe:3,doesnt:[0,2,9],domain:[0,2],done:[0,3,5,7,9],down:[0,9],downgrad:9,dpi:5,draft:8,draw:2,draw_episod:5,draw_imag:5,draw_plot:5,drawcerebro:5,drawdown:[7,9],drawdown_cal:[7,9],drawn:2,drive:5,dtgymdataset:[],dtype:[],duan:9,due:[2,5,7],duell_pc_filter_s:[],duell_pc_strid:[],duell_pc_x_inner_shap:[],duelling_pc_network:[],dummi:7,duplic:2,durat:[2,7],dynam:[7,9],each:[],earliest:2,edu:[],eestim:9,effici:[0,2,9],either:[2,7,9],els:[2,3,5],embed:7,empir:[],empti:[5,7],enabl:[0,2,3,9],encapsul:5,encod:[1,7,9],encode_internal_st:[],end:5,engin:[0,3,7,8],ensur:[],entir:[1,2,5,7],entri:1,entropi:[],entropy_beta:[],entry_point:9,env:[0,2,7,8,9],env_config:1,env_id:1,env_param:9,env_render_freq:1,env_runn:1,environ:[0,1,2,3,5,7],environmnet:[0,2],envresetconfig:2,ep_summari:1,episod:[0,1,2,3,5,7,9],episode_class_ref:2,episode_config:2,episode_dur:[2,9],episode_param:2,episode_stat:7,episode_summary_freq:1,episode_train_test_cycl:[],epsilon:[],equal:[1,2],establish:3,estim:[0,1,7,9],etc:[7,9],everi:[1,2,4,7,9],everyon:9,exact:[1,9],exact_s:1,exampl:[2,9],exce:1,except:[1,3],exchang:3,exclud:5,execut:[0,7,9],exhaust:2,exist:3,exp:7,expand:2,expect:[0,1,3,7],expens:9,experi:[1,9],experiment:9,explicitli:[7,9],explor:9,exposur:7,extens:9,extern:[1,3,9],extra:1,extract:1,facecolor:5,fact:1,factor:1,fall:9,fals:[1,2,3],fashion:[],fast:9,faster:[],favorit:9,featur:[0,5,7,9],fed:[1,9],feed:[1,2,9],feed_dict:4,fetch:[],fi_1:[],fi_2:[],fi_3:[],field:0,fig:5,figsiz:5,file:[2,3,5],file_nam:2,filenam:[2,3,5,9],fill:1,filter_s:[],finish:[3,7,9],finit:3,firm:2,first:[0,1,2,3,5,7,9],fix:2,fl32:0,flag:0,flatten:[],flexibl:9,float32:[],flow:8,follow:9,fontsiz:5,fontweight:5,forc:[2,3],force_reload:2,forex:2,forker:1,form:[2,9],formal:8,format:5,found:4,frame:[1,7],framework:[1,8],fresh:7,from:[1,2,3,7,9],full:2,further:2,futur:9,gae:1,gae_lambda:1,gamma:[1,2],gamma_pc:[],gap:2,gener:[2,8,9],get:[0,1,2,3,5],get_data:0,get_don:7,get_fram:1,get_info:[7,9],get_initial_featur:[],get_new:[2,3],get_pc_target:[],get_reward:[7,9],get_sample_config:[],get_stat:[3,7,9],get_valu:[],getter:1,git:9,github:[1,9],give:2,given:[1,2,3,5,9],global_step:[1,2,4],goe:9,good:5,grab:[],grad:[],grade:8,gradient:[],graph:[],grayscal:1,guess:0,gym:[0,1,2,3,5,7,9],hacki:5,halt:9,handl:[5,7],has:[0,1,2],have:[1,5,9],header:2,heavili:[],height:5,here:[0,1,2],heurist:0,hidden:9,high:[2,7,9],high_bound:[],higher:2,highli:9,histdata:2,histogram:4,histor:[2,9],history_s:1,hit:7,hold:[0,1,2,7,9],holidai:2,host:[],hot:[1,7],hour:[2,9],html:[7,9],http:[1,7,9],human:3,icml99:[],idea:[1,9],identifi:[],idx:1,ignor:[2,3,9],iid:[],imag:[4,5],impact:9,implement:[1,2,3,7,9],improv:[2,9],includ:[7,9],incom:9,index:[8,9],index_col:2,indic:7,induc:2,infer:2,infinit:[],info:[0,3,5,7,9],inform:[0,7,9],inherit:2,initi:[1,7,9],initialis:9,initialize_pyplot:5,inner:[7,9],inner_conv_encod:[],input:[],insid:[1,5,7],instal:8,instanc:[0,1,2,3,5,7,9],instanti:9,instead:[],integ:[1,2],integr:[8,9],interact:[1,7],interest:[],intermedi:2,intern:[5,7],interv:2,interval_sample_:2,invari:[],invok:[0,3,7],is_don:[7,9],is_train:[],issu:9,iter:[0,2,7],itself:[2,9],jimmi:9,job_nam:1,just:[0,1,5,7],keep:[1,7],kei:[1,2,3,7],keyerror:[],keyword:[3,7],kill:[],kind:9,kismuz:9,know:9,kosuk:[],kwarg:[2,3,4,5,7,9],lambda:1,last:[0,1,2,3,5,7,9],last_context:[],last_record:2,last_stat:[],later:1,latest:[7,9],launch:4,launcher:8,layer:9,layernormbasiclstmcel:[],leak:5,learn:9,least:[0,7],leav:3,length:[1,2],less:[1,5],let:3,level:[0,1,2,3],librari:[3,9],licenc:1,licens:[],lie:2,lies:2,light:4,like:[2,9],line:[0,3,5,7],linear:[],list:[0,1,2,3,7],littl:[],load:2,local:[5,9],localhost:4,log:[1,3,4,7],log_dir:1,log_level:[0,1,2,3],log_uniform:[],logbook:[0,1,2,3],logdir:4,logger:[1,2,3],logic:[1,3,5,7,9],logit:[],longer:2,look:[4,5,9],loop:[2,9],loss:[7,8],losss:9,low:[2,7,9],low_bound:[],lower:[],lower_row_numb:2,lstm:9,lstm_2_init_period:[],lstm_class:[],lstm_layer:[],lstm_network:[],lstm_sequence_length:[],lstm_state:[],lstmstatetupl:1,made:2,mai:9,make:[0,1,2,3,9],make_cluster_spec:[],make_data_gett:1,market:9,match:0,matplotlib:[5,9],matthewzeil:[],max:[2,5,7],max_env_step:1,max_episode_len:2,max_rollout_length:[],max_sample_s:1,max_time_s:[],maximum:[1,2,9],mean:[1,2,3],mementum:9,memori:[5,8],memory_config:1,memory_s:1,messag:[0,3,7,9],messg:9,met:9,metadata:2,metatdata:[],method:[0,1,2,3,5,7,9],millisecond:3,min:[2,5],mind:1,mini:[],minut:[2,9],mirowski:9,mit:1,mix:[],miyoshi:[],miyosuda:[],modal:[],mode:[0,1,3,5,7,9],mode_list:5,model:1,model_beta:[],model_data:[],model_gae_lambda:[],model_gamma:[],model_summary_freq:[],modif:[3,9],modul:8,momentum:[],moneymak:9,monitor:8,more:[5,7,9],most:0,motiv:9,much:9,multi:[],multipli:0,must:[1,2],my_data:2,mycerebro:9,mydataset:9,myenviron:9,name:[2,4],natur:2,nav:[],nav_a3c:9,navig:9,ndarrai:[1,2],necessari:[7,9],need:[5,9],neg:[1,2],neither:[5,9],nest:[0,1,2],network:3,network_address:[0,3],nevertheless:[],newli:0,next:[2,7,9],nn_util:8,non:[1,2,9],non_zero:1,none:[0,1,2,3,5,7,9],nonlinear:[],nor:[5,9],normal:[1,7,9],normalis:[2,9],normpnl:7,note:[0,1,2,3,7,9],noth:3,notic:3,notify_ord:7,notimpl:0,num:0,num_env:1,num_epoch:[],num_filt:[],num_p:[],num_test_episod:[],num_train_episod:[],num_work:1,number:[1,2,3,7],number_of_rollout:[],numpi:5,ob_spac:[],obj:[],object:[2,7],obs:[],observ:[0,1,2,3,5,8,9],off:[0,1,9],off_aac_lambda:[],off_polici:1,off_policy_loss:[],often:2,old_polici:[],older:[],omg:7,omit:2,omitt:2,on_polici:1,on_policy_loss:[],on_policy_rollout:[],on_policy_rollout_length:[],onc:7,one:[1,2,7,9],ones:0,onli:[2,9],open:[2,7,9],openai:[1,3,9],openinterest:2,oper:9,ops:[],opt:2,opt_decai:[],opt_decay_step:[],opt_end_learn_r:[],opt_epsilon:[],opt_learn_r:[],opt_max_env_step:[],opt_momentum:[],optim:1,option:[2,7,9],order:[2,7,9],org:[],origin:[1,9],other:[3,7,9],other_kei:3,other_mod:3,otherwis:[0,1,2,3],our:0,out:[0,2,9],output:[1,2,9],output_channel:[],over:[1,2,3],overal:2,overlap:2,overrid:[3,5,7,9],own:[1,7,9],paac:[],packag:8,pad:[1,5],page:[4,8],pair:9,panda:[2,9],paper:9,parallel:0,param:[0,2,5,7],paramet:[0,1,2,3,4,5,7,9],parameter:2,parameter_serv:[],parametris:2,params_dict:2,parent:[0,1,2],parmet:9,parralel:1,pars:[2,3],parse_d:2,parse_respons:5,parsing_param:2,part:[7,9],partial:[],particular:[2,9],partit:2,pass:[0,2,3,5,7,9],pattern:9,pc_estimator_strid:[],pc_lambda:[],pc_loss:[],pc_loss_def:[],pdf:[],penal:[],percent:7,percentil:2,perform:[2,8,9],period:2,pi_logit:[],pi_old:[],pi_pc_q:[],pi_prime_logit:[],pi_prime_update_period:[],pi_rp_logit:[],pi_vf:[],pictur:5,pid:5,pip:9,pipe:[1,2,9],pix:[],pixel:[],pixel_chang:[],pixel_change_2d_estim:[],pixel_control:[],place:1,placehold:1,plot:[3,5],plotter:8,plug:5,pnl:7,point:[2,7],polici:[8,9],policy_config:1,policy_stacked_lstm:8,poor:8,pop:1,pop_fram:1,popul:2,port:[3,4,9],port_list:[],portfolio:[0,7],portfolio_act:7,pos:[1,7],posit:[1,2,7],possibl:[2,5,7],potenti:[],ppo:[8,9],ppo_loss_def:[],pre:0,preced:2,predict:1,prefer:9,prenext:9,prepar:9,preprocess:[],present:[7,9],prevent:5,previou:[0,2,4],prgn:5,price:[3,5,7,9],principl:7,priorit:1,priority_sampl:1,priority_sample_s:1,pro:[],probabl:[0,1,2],process:[0,1,3,5,9],process_data:[],process_rp:1,process_summari:[],produc:[],profit:7,proper:2,properli:2,properti:[],provid:[0,1,2,3,4,7,9],proxim:[],pseudocod:9,pull:9,purge_previ:4,put:3,python:[],queri:9,queue:1,quickstart:8,r_target:[],rais:[],random:[2,3,9],random_beta:2,random_sample_:2,random_se:1,randomli:[2,9],rate:4,rather:9,ratio:7,raw:7,raw_stat:[3,5,7,9],rcvtimeo:3,reach:[1,7],read_csv:2,readi:[0,1,2,3,7,9],real:[1,7,9],realiz:7,realli:3,rebalanc:1,receiv:[0,3,5,7,9],recent:2,reciev:9,recommend:9,record:2,reduc:[1,9],refer:[1,3,7],refresh:4,regist:9,regular:9,reinforc:9,reject:2,rel:5,relat:[2,3,9],releas:3,reliabl:5,reload:4,remot:3,remov:2,render:[0,3,8,9],render_arg:3,render_boxtext:5,render_cmap:5,render_dpi:5,render_en:3,render_mod:[3,5],render_plotstyl:5,render_size_episod:5,render_size_human:5,render_size_st:5,render_state_as_imag:5,render_state_channel:5,render_titl:5,render_xlabel:5,render_ylabel:5,rep:3,repali:[],repeat:[2,9],repeatedli:9,replai:[1,9],replay_batch_s:[],replay_memory_s:[],replay_rollout_length:[],repli:9,report:0,repositori:[1,9],repres:3,req:3,request:9,requir:[0,2],requr:9,research:8,reserv:2,reset:[2,3,9],reset_data:[2,3],reset_kwarg:0,reshap:[],resourc:[3,5],respect:[1,2],respons:[0,3,5,7,9],restart:3,result:[0,3,7],result_pip:5,retriev:[0,2,3,9],retrurn:5,reus:2,reward:[0,1,3,5,7,9],reward_threshold:1,rewind:0,rgb:5,rgb_arrai:5,rgb_empti:5,rich:7,right:2,rise:3,rnddatadomain:2,rnn:[1,9],rnn_1:[],rnn_2:[],rnn_cell:[],rnn_cell_impl:[],rnn_state:[],rnn_timestep:[],robot:[],rollout:8,rollout_gett:1,rollout_length:1,rollout_provid:1,root_random_se:[],roughli:3,routin:[7,9],rp_lambda:[],rp_loss:[],rp_loss_def:[],rp_reward_threshold:[],rp_sequence_s:[],rp_target:1,rule:9,run:[0,1,3,5,9],runner:8,runnerthread:1,runtim:[0,1,7,9],safe:[],sai:[],same:[1,2,7,9],sampl:[0,1,2,3,9],sample_attempt:1,sample_class_ref:2,sample_config:0,sample_dur:2,sample_expand:2,sample_param:0,sample_typ:[2,3],sample_uniform:1,sampling_param:2,save:1,savefig:5,scalar:[2,4,7],scale:7,scope:[],seaborn:5,search:8,second:[0,3,9],section:8,see:[1,2,7,9],seed:3,seem:9,seen:[2,5],self:[1,7],sell:[0,7],send:[3,9],send_img:5,sensit:3,sent:[],sep:2,separ:[2,5,9],seqdatadomain:2,sequenc:[1,2],sequence_s:1,sequenti:2,seri:[0,9],server:[1,3,4,5,7,8,9],servic:[0,1,9],sess:[1,4],session:1,set:[1,2,3,4,5,7,9],set_datalin:[7,9],set_logg:2,set_param:2,setcash:9,setcommiss:9,setter:2,setup:9,sever:[1,5,9],sgd:[],shamelessli:7,shape:[0,1,2,3,7,9],share:[],shell:3,shift:2,should:[0,1,2,3,7,9],shuffl:[],shut:[0,9],side:3,signal:0,signal_length:[],similar:0,simpl:[2,3,9],simpledataset:2,simpler:0,simpli:9,simul:3,sinc:[2,7,9],singl:[1,2,5,9],size:[1,2,7,9],sizer:9,sizerfix:9,skew:[1,2],skip:7,skip_fram:[2,7,9],slide:[2,7],slow:[5,9],sma:[],sndtimeo:3,socket:3,solut:9,solv:9,some:[0,1,2,3],something_els:5,somewhat:9,sort:2,sourc:[0,1,2,3,4,5,7,9],space:[3,7,8,9],spaces_dict:0,special:2,specif:[1,2,3,9],specifi:[1,2],specific_param:2,split:[2,9],split_point_record:2,stabil:9,stabl:9,stack:[1,9],stacked_lstm:[],stackedlstmpolici:[],stage1:[],stage2:[],stage3:[],stake:9,stanford:[],start:[1,2,3,4,9],start_00:[2,9],start_weekdai:[2,9],startegi:[2,3,7,9],starter:1,stat:7,state:[0,1,3,5,7,8,9],state_high:9,state_low:9,state_shap:[7,9],stationari:9,statis:0,statist:[0,1,2,3,7,9],statu:[0,3],std:2,stdout:5,step:[1,2,3,5,7,9],step_to_rend:5,still:1,stop:[0,3,4,7],store:[0,1,5],str:[0,2,3,7],strang:5,strategi:[3,8,9],strategy_4:8,stream:1,stride:[],string:[0,2,3,5],structur:[7,8],style:9,subclass:[2,3,7,9],subdir:4,subdirectori:4,subj:2,subject:[8,9],subsampl:[],subsequ:[0,2],subset:2,success:1,summar:1,summari:[1,2,4,7],summary_writ:1,supervis:1,suppli:2,support:[0,2],suppos:[1,2,3,5],surrog:[],swap:[],sweep:2,synthet:[],taken:[7,9],talk:3,target:[1,2,7],target_cal:7,target_period:2,tarin:2,task:[0,1,2,3,9],tast:7,tb_log:4,tcp:3,tell:1,templat:2,tempor:0,tensor:[0,7],tensorboard2:8,tensorboard:8,tensorflow:4,termin:[0,1,3,7,9],test:[1,2,9],test_data:2,test_end_tim:2,test_end_time_previous_tri:2,test_mod:1,test_numb:[],test_period:2,test_start_tim:2,text:[4,5],than:[1,2,9],theori:[],therebi:2,thi:[0,1,2,3,4,7,8,9],those:[],though:9,thought:2,thougt:9,thread:1,thread_runn:[],threadrunn:1,three:9,threshold:2,through:3,thu:[1,2],tight:5,time:[1,2,3,7,9],time_:1,time_embed:[],time_flat:[1,9],time_flatten:1,time_gap:[2,9],time_s:1,timefram:2,timeout:3,timestep:5,titl:5,tmp:[],to_btfe:2,to_str:5,todo:0,toler:2,too:7,top:2,total:[1,2],total_btgym_dataset_step:2,total_step:2,toward:[],track:[7,9],trade:[3,7,9],trail:2,train:[0,1,2,9],train_data:2,train_end_tim:2,train_numb:[],train_start_tim:2,train_start_time_next_tri:2,trainer:1,trainer_config:1,trajectori:1,transform:[],transmit:7,treat:7,treshghold:7,trial:[0,2,3,9],trial_class_ref:2,trial_config:2,trial_end_tim:2,trial_num:[],trial_param:2,trial_sampl:0,trial_sequ:2,trial_start_tim:2,trial_stat:0,truncat:2,tune:[2,9],tupl:[0,1,2,3,7,9],tutori:7,two:[2,9],twofold:9,type:[0,1,2,3,7,9],under:1,uni:[],uniform:2,uniformli:1,univers:1,unreal:[7,8,9],unrol:[],unstabl:8,until:[2,9],updat:[4,5,7,9],update_sliding_stat:7,upgrad:9,upload:[],upon:[2,7,9],upper:[],upper_row_numb:2,use:[1,2,3,5,7],use_off_policy_aac:[],use_pixel_control:[],use_priority_sampl:1,use_reward_predict:[],use_value_replai:[],used:[0,1,2,3],user:9,uses:9,using:[0,1,5],usual:[0,2],util:[4,7],v5555:9,val:[],valid:2,valu:[0,1,2,4,5,7,9],value_fn_loss_def:[],vanilla:[],variabl:7,vector:[],verbos:[3,9],version:9,via:[2,3,7,9],virtual:9,visual:1,visualis:[3,5],volum:[2,7],vr_lambda:[],vr_loss:[],wai:[2,5,9],wait:9,wang:[],want:[],warn:3,watcher:3,web:4,webpag:4,weekdai:2,weekend:2,weight:[],well:[1,9],what:[1,9],whatev:3,when:[1,2,3,5,7,9],where:[0,2],whether:1,which:[2,9],wide:[],width:5,window:2,wise:[],within:[0,2,7],without:[2,3],work:9,worker:8,workflow:9,world:9,worst:7,would:1,wrapper:[0,1,4,9],write:4,written:5,wrt:7,www:[2,7,9],xlabel:5,year:2,yeld:1,yet:1,ylabel:5,you:9,your:[2,9],zero:[1,2,7],zmq:3},titles:["btgym.dataserver module","btgym.algorithms package","btgym.datafeed package","btgym.envs package","btgym.monitor package","btgym.rendering package","btgym.research package","btgym.strategy package","BTGym DOCs","Package Description"],titleterms:{a3c:9,aac:1,algorithm:[1,8],api:8,backtrad:3,base:[2,7],btgym:[0,1,2,3,4,5,6,7,8],code:8,data:[8,9],datafe:2,dataserv:0,deriv:2,descript:9,doc:8,engin:9,env:[1,3],environ:[8,9],experiment:8,flow:9,framework:9,indic:8,instal:9,launcher:1,loss:1,memori:1,modul:[0,1,2,3,4,5,6,7],monitor:4,nn_util:1,observ:7,packag:[1,2,3,4,5,6,7,9],pipe:8,plotter:5,polici:1,policy_stacked_lstm:6,quickstart:9,refer:8,render:5,research:6,rollout:1,runner:1,server:0,space:0,state:2,strategi:7,strategy_4:6,structur:9,tabl:8,tensorboard2:4,tensorboard:4,worker:1}})