win = Titanium.UI.currentWindow
# win.backgroundColor = '#ccc'
# win.backgroundImage = '../images/UI/base_pink.png'
# win.barColor = '#1e8dd7ff'

Titanium.include '../Util.js'  
Titanium.include '../lib/ServerAPI.js'  
Titanium.include '../modules/UserHome_module.js'
Titanium.include '../styles/UserHome_style.js'  

#global
#user = win.data
#
#仮データ
user_id = win.data.user_id

#-----------------------------------------------------------------------------
# ui
#-----------------------------------------------------------------------------
tt.UI.updateView()
#-----------------------------------------------------------------------------
# event
#-----------------------------------------------------------------------------
button41.addEventListener 'click', (e)->
rank.addEventListener 'click', (e)->
collection.addEventListener 'click', (e)->
	Titanium.UI.currentTab.open tt.UI.createRecordListView win.data ,{animated:true}
	return
challenge.addEventListener 'click', (e)->

support.addEventListener 'click', (e)->
	listType = TEXT.LISTTYPE.SUPPORTER
	Titanium.UI.currentTab.open tt.UI.createSuppotListView listType, user_id ,{animated:true}
	return

supporter.addEventListener 'click', (e)->
	listType = TEXT.LISTTYPE.SUPPORTING
	Titanium.UI.currentTab.open tt.UI.createSuppotListView listType, user_id ,{animated:true}
	return
	
win.addEventListener 'focus', (e)  ->
	Ti.API.info 'userHome focus'  