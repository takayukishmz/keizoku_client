win = Titanium.UI.currentWindow
Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../styles/Notice_style.js'
Titanium.include '../modules/SupportList_module.js'


### grobal ####################################################################

### UI #######################################################################
win.add tt.UI.tableView

### call API #################################################################

win.addEventListener 'focus',() ->
	listType = win.data.listType
	user_id = win.data.user_id
	tt.UI.loadListView(listType,user_id)

	
### eventListener #############################################
tt.UI.tableView.addEventListener 'click',(e) ->
	info JSON.stringify e
	info 'table event'
	tt.module.rowEventController e
	return