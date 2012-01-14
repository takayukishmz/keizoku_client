rootWindow = Titanium.UI.currentWindow



win = Ti.UI.createWindow 
	backgroundColor:'#fff'
	title:'SelectNewWay'

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/SelectNewWay_module.js'
Titanium.include '../styles/SelectNewWay_style.js'

### UI #######################################################################
case1 = Ti.UI.createLabel styles.case1
goCreate = Ti.UI.createButton styles.gocreate 
case2 = Ti.UI.createLabel styles.case2
goJoin = Ti.UI.createButton styles.gojoin 
case3 = Ti.UI.createLabel styles.case3
goApp = Ti.UI.createButton styles.goapp

win.add case1
win.add goCreate 
win.add case2
win.add goJoin
win.add case3
win.add goApp

Ti.App.nav = Ti.UI.iPhone.createNavigationGroup 
	window:win
	
rootWindow.add Ti.App.nav

### event ##################################################################


goCreate.addEventListener 'click',(e) ->
	tt.module.eventSetter e
	return

goJoin.addEventListener 'click',(e) ->
	tt.module.eventSetter e
	return

goApp.addEventListener 'click',(e) ->
	tt.module.eventSetter e
	return



tt.UI.setLeftButton () ->
	info 'SelectNewWay.js close'
	# win.close()
	rootWindow.close()
	return

win.addEventListener 'focus', () ->
	info 'focus SelectNewWay.js'

