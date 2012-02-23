win = Titanium.UI.currentWindow
Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../styles/Notice_style.js'
Titanium.include '../modules/UserRecordList_module.js'

user_id = win.user_id
### grobal ####################################################################

### UI #######################################################################
win.add tt.UI.tableView

user_id = win.user_id
tt.UI.loadListView(user_id)
### eventListener #############################################
tt.UI.setRightButton () ->
	user_id = win.user_id
	tt.UI.loadListView(user_id)

tt.UI.tableView.addEventListener 'click',(e) ->
	info 'table event'

	return
