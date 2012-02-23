win = Titanium.UI.currentWindow
Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../styles/Timeline_style.js'
Titanium.include '../modules/Timeline_module.js'



Ti.API.info 'timeline.js'

info 'Util check'
### const ####################################################################
Ti.App.timeline_type = '';
Ti.App.update_tl = true

### UI #######################################################################
# view = Ti.UI.createView styles.view
# win.add view
# 
# bonus_box = Ti.UI.createView styles.bonus_box
# bonusbar = Ti.UI.createView styles.bonusbar
# 
# bonus_box.add bonusbar
# view.add bonus_box


listview = Ti.UI.createView {}
	# top:styles.header_height

listview.add tt.UI.tableView
win.add listview


tt.UI.setRightButton () ->
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
,	{
	title:'Filter'
	# color:'red'
	width:10
	height:10
	color:'black'
	# image:'../images/UI/base_pink.png'
}


### call API #################################################################

win.addEventListener 'focus',() ->
	info 'focus - Timeline'
	if Ti.App.update_tl
		Ti.App.update_tl = false
		tt.UI.loadTimeline()
	
	
### eventListener #############################################
tt.UI.tableView.addEventListener 'click',(e) ->
	info JSON.stringify e
	info 'timeline -- table event'
	tt.module.rowEventController e
	return
	
lastDistance = 0
listview.addEventListener 'scroll', (e) ->

	offset = e.contentOffset.y
	height = e.size.height
	total = offset + height
	theEnd = e.contentSize.height
	distance = theEnd - total

	if (distance < lastDistance)
		info_obj e

