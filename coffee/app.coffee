Titanium.UI.setBackgroundColor '#000'

tabGroup =Titanium.UI.createTabGroup()

### const ####################################################################
Ti.App.user_id = 2
### tabs #####################################################################
win1 = Titanium.UI.createWindow
    title:'Timeline'
    backgroundColor:'#fff'
    url:'controller/Timeline.js'

tab1 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Timeline'
    window:win1

win2 = Titanium.UI.createWindow
    title:'Ranking'
    backgroundColor:'#fff'
    url:'controller/Ranking.js'

tab2 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Ranking'
    window:win2

win3 = Titanium.UI.createWindow
    title:'my list'
    backgroundColor:'#fff'
    url:'controller/Main.js'

tab3 = Titanium.UI.createTab  
    icon:'images/KS_nav_views.png'
    title:'my list'
    window:win3


win4 = Titanium.UI.createWindow
    title:'Notice'
    backgroundColor:'#fff'
    url:'controller/Notice.js'

tab4 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'Notice'
    window:win4


win5 = Titanium.UI.createWindow
    title:'test'
    backgroundColor:'#fff'
    url:'controller/Login.js'

tab5 = Titanium.UI.createTab
    icon:'images/KS_nav_ui.png'
    title:'test'
    window:win5


label2 = Titanium.UI.createLabel
    color:'#999'
    text:'I am Window 2'
    font:
    	fontSize:20
    	fontFamily:'Helvetica Neue'
    textAlign:'center'
    width:'auto'


win2.add label2


tabGroup.addTab tab1  
tabGroup.addTab tab2  
tabGroup.addTab tab3 
tabGroup.addTab tab4
tabGroup.addTab tab5

tabGroup.open()
