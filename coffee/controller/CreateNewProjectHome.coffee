Titanium.UI.setBackgroundColor '#000'

tabGroup =Titanium.UI.createTabGroup()
Titanium.include '../Util.js'

info ' new tab'
### tabs #####################################################################
win1 = Titanium.UI.createWindow
    title:'create New'
    backgroundColor:'#fff'
    # url:'Start.js'

tab1 = Titanium.UI.createTab
    icon:'../images/KS_nav_ui.png'
    title:'create New'
    window:win1
# 
# win2 = Titanium.UI.createWindow
#     title:'Join Project'
#     backgroundColor:'#fff'
#     url:'controller/Ranking.js'
# 
# tab2 = Titanium.UI.createTab
#     icon:'images/KS_nav_ui.png'
#     title:'Join Project'
#     window:win2
# 
# 

# win2.add label2


tabGroup.addTab tab1  
# tabGroup.addTab tab2  
info ' new tab'
tabGroup.open()
