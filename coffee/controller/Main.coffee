win = Titanium.UI.currentWindow

# global ---------------------------------------------------------------------
stars = []	#star images Arr
# ----------------------------------------------------------------------------

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/Main_module.js'
Titanium.include '../styles/Main_style.js'


### event ####################################################################
button_checkin.addEventListener 'click', (e)->
	Ti.API.info 'click checkin'
	# Titanium.UI.currentTab.open tt.UI.createCheckInCompleteView()
	tt.UI.createCheckInView()
	return
week_base.addEventListener 'click', (event)->
	tt.UI.createCollectionView()
	return
win.addEventListener 'focus', (e)  ->
	Ti.API.info 'userHome focus'  
	indicator.setStatus(false)
	if Ti.App.checkInUpdate
		Ti.App.checkInUpdate = false
		tt.UI.updateView()
	
win.addEventListener 'blur', (e)  ->
	Ti.API.info 'userHome blur'  
	indicator.setStatus(true)

### loadView #################################################################
tt.UI.setRightButton () ->
	# tt.UI.updateView()
	API.callAPI 'GET','testsession',{}, (json) ->
		alert JSON.stringify json
		return
		
	return

