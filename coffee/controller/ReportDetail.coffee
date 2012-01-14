win = Titanium.UI.currentWindow

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../styles/Detail_style.js'
Titanium.include '../modules/ReportDetail_module.js'

# win = tt.UI.loadView win,styles
win.title = Ti.App.Selected_Report_timeline.pjt_name



		
row_top = Titanium.UI.createTableViewRow styles.base_black
row_middle = Titanium.UI.createTableViewRow styles.base_gray

section_top = Ti.UI.createTableViewSection()
section_middle = Ti.UI.createTableViewSection()


photo = Ti.UI.createView STYLE.PHOTO
pjt_name = Ti.UI.createLabel styles.pjt_name  


row_middle.add photo
row_middle.add pjt_name



section_middle.add row_middle
section_top.add row_top		




win.add tt.UI.tableView

### loaddView #############################################
tt.UI.loadTimeline()
### eventListener #############################################
tt.UI.tableView.addEventListener 'click',(e) ->
	info 'table event'
	tt.module.rowEventController e
	return
