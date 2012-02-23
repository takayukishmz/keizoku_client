Titanium.UI.setBackgroundColor '#000'

Titanium.include './styles/Const.js'

# hoge = require('./hoge').hoge

# hoge.init()s
tabGroup =Titanium.UI.createTabGroup
	backgroundColor:"#777"
	backgroundImage:'./images/UI/'+Const.BACKGROUND

### const ####################################################################
Ti.App.user_id = 1
Ti.App.checkInUpdate = true

### tabs #####################################################################
win1 = Titanium.UI.createWindow
    title:'Timeline'
    backgroundColor:'#fff'
    url:'controller/Timeline.js'
    barColor: Const.BARCOLOR
    # barImage: './images/'+Const.BARIMAGE



tab1 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Timeline'
    window:win1

win2 = Titanium.UI.createWindow
    title:'Ranking'
    backgroundColor:'#fff'
    url:'controller/Ranking.js'
    barColor: Const.BARCOLOR

tab2 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Ranking'
    window:win2

win3 = Titanium.UI.createWindow
    title:'1 Week English'
    backgroundImage:'images/UI/'+ Const.BACKGROUND
    url:'controller/Main.js'
    barColor: Const.BARCOLOR


tab3 = Titanium.UI.createTab  
    icon:'images/KS_nav_views.png'
    title:'my list'
    window:win3


win4 = Titanium.UI.createWindow
    title:'Notice'
    backgroundColor:'#fff'
    url:'controller/Notice.js'
    barColor: Const.BARCOLOR

tab4 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Notice'
    window:win4


win5 = Titanium.UI.createWindow
    title:'test'
    backgroundColor:'#fff'
    url:'./test.js'
    barColor: Const.BARCOLOR

tab5 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'test'
    window:win5

tabGroup.addTab tab1  
tabGroup.addTab tab2  
tabGroup.addTab tab3 
tabGroup.addTab tab4
tabGroup.addTab tab5

tabGroup.open()
