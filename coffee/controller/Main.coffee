win = Titanium.UI.currentWindow
# win.backgroundColor = '#ccc'
win.backgroundImage = '../images/UI/base_pink.png'
win.barColor = '#1e8dd7ff'

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
	tt.UI.updateView()
### loadView #################################################################



