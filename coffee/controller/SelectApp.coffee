win = Titanium.UI.currentWindow
Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/SelectApp_module.js'
Titanium.include '../styles/SelectApp_style.js'


Ti.API.info 'SelectApp.js'

### const ####################################################################
Ti.App.SelectApp_type = '';
Ti.App.update_tl = true

### UI #######################################################################

listview = Ti.UI.createView()
listview.add tt.UI.tableView

win.add listview


tt.UI.setCreateNewButton () ->
	# when dialog already opened
	if Ti.App.selectDialog_flg
		return

	Ti.App.selectDialog_flg = true


	w = Titanium.UI.createWindow
		backgroundColor:'#336699'
		borderWidth:2
		borderColor:'#999'
		height:400
		width:300
		borderRadius:5
		opacity:0.92
		# transform:t
		url:'../controller/SelectTimeline.js'

	tt.UI.create2DMatrixDialog w
	return
### call API #################################################################

win.addEventListener 'focus',() ->
	info 'focus - SelectApp'
	if Ti.App.update_tl
		Ti.App.update_tl = false
		tt.UI.loadTimeline()
	
	
### eventListener #############################################
tt.UI.tableView.addEventListener 'click',(e) ->
	info JSON.stringify e
	info 'table event'
	tt.module.rowEventController e
	return