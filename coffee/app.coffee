
Titanium.include './styles/Const.js'
Titanium.include './TextConst.js'
Titanium.include './DebugUtil.js'
#----------------
#global object
#----------------
$ = {}
Ti.App.user_id = 2
Ti.App.checkInUpdate = true # flag to update HomeWindow



do->
	api 			= require('lib/ServerAPI').API
	timelineWindow 	= require('controller/Timeline').Timeline
	Comparison 		= require('ui/window/Comparison').Comparison
	Home 			= require('ui/window/Home').Home
	Notice 			= require('ui/window/Notice').Notice
	TabGroup 		= require("ui/TabGroup").TabGroup
	$.Util 			= require('modules/Util').Util
	 
	$.API = new api()
	
	$.tabs = new TabGroup(
		title: "Todo"
		icon: "images/KS_nav_ui.png"
		window : new timelineWindow()
	,
		title: "hoge"
		icon: "images/KS_nav_ui.png"
		window : new Comparison()
	,
		title: "hoge"
		icon: "images/KS_nav_ui.png"
		window : new Home()
	,
		title: "hoge"
		icon: "images/KS_nav_ui.png"
		window : new Notice()
	)
	
	$.tabs.open()
	return
# 
# 
# 
# 
# 
# 
# tabGroup =Titanium.UI.createTabGroup
# 	backgroundColor:"#777"
# 	backgroundImage:'./images/UI/'+Const.BACKGROUND
# 
# 
# ### const ####################################################################

# Ti.App.checkInUpdate = true
# 
# ### tabs #####################################################################
# win1 = Titanium.UI.createWindow

#	 # barImage: './images/'+Const.BARIMAGE
# 
# 
# 
# tab1 = Titanium.UI.createTab
#	 icon:'images/KS_nav_ui.png'
#	 title:'Timeline'
#	 window:win1
# # 
# # win2 = Titanium.UI.createWindow
# #	 title:'Ranking'
# #	 backgroundColor:'#fff'
# #	 url:'controller/Ranking.js'
# #	 barColor: Const.BARCOLOR
# # 
# # tab2 = Titanium.UI.createTab
# #	 icon:'images/KS_nav_ui.png'
# #	 title:'Ranking'
# #	 window:win2
# # 
# # win3 = Titanium.UI.createWindow
# #	 title:'1 Week English'
# #	 backgroundImage:'images/UI/'+ Const.BACKGROUND
# #	 url:'controller/Main.js'
# #	 barColor: Const.BARCOLOR
# # 
# # 
# # tab3 = Titanium.UI.createTab  
# #	 icon:'images/KS_nav_views.png'
# #	 title:'my list'
# #	 window:win3
# # 
# # 
# # win4 = Titanium.UI.createWindow
# #	 title:'Notice'
# #	 backgroundColor:'#fff'
# #	 url:'controller/Notice.js'
# #	 barColor: Const.BARCOLOR
# # 
# # tab4 = Titanium.UI.createTab
# #	 icon:'images/KS_nav_ui.png'
# #	 title:'Notice'
# #	 window:win4
# # 
# # 
# # win5 = Titanium.UI.createWindow
# #	 title:'test'
# #	 backgroundColor:'#fff'
# #	 url:'./test.js'
# #	 barColor: Const.BARCOLOR
# # 
# # tab5 = Titanium.UI.createTab
# #	 icon:'images/KS_nav_ui.png'
# #	 title:'test'
# #	 window:win5
# # 
# tabGroup.addTab tab1  
# # tabGroup.addTab tab2  
# # tabGroup.addTab tab3 
# # tabGroup.addTab tab4
# # tabGroup.addTab tab5
# 
# tabGroup.open()
