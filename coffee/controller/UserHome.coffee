win = Titanium.UI.currentWindow
# win.backgroundColor = '#ccc'
# win.backgroundImage = '../images/UI/base_pink.png'
# win.barColor = '#1e8dd7ff'

#-----------------------------------------------------------------------------
# global
stars = []	#star images Arr
user = {}
user.user_id = win.data
user.isSupport = ""
#-----------------------------------------------------------------------------
Titanium.include '../Util.js'  
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/UserHome_module.js'
Titanium.include '../styles/UserHome_style.js'  
#仮データ
#-----------------------------------------------------------------------------
# ui
#-----------------------------------------------------------------------------
if Number Ti.App.user_id != Number user.user_id
	rightButton = tt.UI.setRightButton tt.module.SupportButton, {title:setTT("SUPPORT")}
# rightButton.title = 'hoge'

tt.UI.updateView(Ti.App.user_id, user.user_id)
#-----------------------------------------------------------------------------
# event
#-----------------------------------------------------------------------------
history.addEventListener 'click', (e)->
	Titanium.UI.currentTab.open tt.UI.createRecordListView user.user_id ,{animated:true}
	return
supporter.addEventListener 'click', (e)->
	listType = TEXT.LISTTYPE.SUPPORTER
	Titanium.UI.currentTab.open tt.UI.createSuppotListView listType, user.user_id ,{animated:true}
	return

supporting.addEventListener 'click', (e)->
	listType = TEXT.LISTTYPE.SUPPORTING
	Titanium.UI.currentTab.open tt.UI.createSuppotListView listType, user.user_id ,{animated:true}
	return
	
win.addEventListener 'focus', (e)  ->
	



