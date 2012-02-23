win = Titanium.UI.currentWindow

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/Ranking_module.js'
Titanium.include '../styles/Ranking_style.js'

### UI #######################################################################
win.backgroundImage = '../images/UI/base_pink.png'
### event ####################################################################
button_share.addEventListener 'click', (e)->
### loadView #################################################################
tt.api.getWeeklyTotalData()


tt.UI.setRightButton tt.api.updateWeeklyTotalData
# win.addEventListener "focus", () ->
# 	tt.api.getWeeklyTotalData()



