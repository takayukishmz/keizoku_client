win = Titanium.UI.currentWindow
Titanium.include '../../Util.js'
Titanium.include '../../lib/ServerAPI.js'
Titanium.include '../../styles/checkin/GetPoint_style.js'
Titanium.include '../../modules/checkin/GetPoint_module.js'

# ----------------------------------------------------------------------------
Ti.App.checkInUpdate = true
# ----------------------------------------------------------------------------
# ----------------------------------------------------------------------------
tt.UI.setLeftButton () ->
	Ti.App.rootWindow.close()
	return
, {title:setTT("CLOSE")}
# ----------------------------------------------------------------------------
point_number.text = win.data.total + "pt"

pointList = win.data.lists


for i in [0..pointList.length-1]
	info i
	info 'loop'	
	base_white = Titanium.UI.createView styles.base_white
	base_white.top += 35*i
	point_msg = Titanium.UI.createLabel styles.point_msg
	point_msg.text = pointList[i].msg
	base_white.add point_msg

	point_num = Titanium.UI.createLabel styles.point_num
	point_num.text = pointList[i].point + 'pt'
	base_white.add point_num
	
	win.add base_white
	

# tt.UI.setRightButton () ->
# 	Ti.App.rootWindow.close()
# 	return