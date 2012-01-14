win = Titanium.UI.currentWindow

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../styles/UserDetail_style.js'
Titanium.include '../modules/UserDetail_module.js'

# win = tt.UI.loadView win,styles
# win.title = Ti.App.Selected_Project.pjt_name


data = []
#########################
#top
#########################
row_top = Titanium.UI.createTableViewRow styles.base_profile
section_top = Ti.UI.createTableViewSection()
section_top.add row_top

photo = Ti.UI.createView STYLE.PHOTO
photo.backgroundImage = '../images/user.png'

username = Ti.UI.createLabel styles.username 

support_box = Ti.UI.createView styles.support_box
support_text = Ti.UI.createLabel styles.support_text #いずれは画像で
support_box.add support_text

star_box = Ti.UI.createView styles.count_box  
star_num = Ti.UI.createLabel styles.count_num #いずれは画像で
star_text = Ti.UI.createLabel styles.count_text #いずれは画像で
star_text.text = 'stars'
star_box.add star_num
star_box.add star_text

point_box = Ti.UI.createView styles.point_box  
point_num = Ti.UI.createLabel styles.count_num #いずれは画像で
point_text = Ti.UI.createLabel styles.count_text #いずれは画像で
point_text.text = 'point'
point_box.add point_num
point_box.add point_text

series_box = Ti.UI.createView styles.series_box  
series_num = Ti.UI.createLabel styles.count_num #いずれは画像で
series_text = Ti.UI.createLabel styles.count_text #いずれは画像で
series_text.text = '連続記録'
series_box.add series_num
series_box.add series_text

row_top.add photo
row_top.add username
row_top.add support_box
row_top.add star_box
row_top.add point_box
row_top.add series_box

#########################
#middle
#########################
row_middle = Titanium.UI.createTableViewRow styles.base_black
row_middle.hasChild = true
section_middle = Ti.UI.createTableViewSection()
section_middle.add row_middle		

header = Ti.UI.createView styles.header
header_text= Ti.UI.createLabel styles.header_text
header.add header_text

section_middle.headerView = header

star_num = 3
for i in [0..star_num]
	info 'star:'+i
	star = Titanium.UI.createImageView STYLE.BIGSTAR
	# star.right = 0
	star.left = S.MARGIN+(S.ICON)*i
	star.top = S.MARGIN*2
	row_middle.add star

#########################
#support
#########################
row_support = Titanium.UI.createTableViewRow styles.base_support

section_support = Ti.UI.createTableViewSection()
section_support.add row_support

#########################
#supporter
#########################
row_supporter = Titanium.UI.createTableViewRow styles.base_supporter
section_supporter = Ti.UI.createTableViewSection()
section_supporter.add row_supporter

#########################
#setup
#########################
data.push section_top
data.push section_middle
data.push section_support
data.push section_supporter

tt.UI.tableView.data = data

win.add tt.UI.tableView


# tt.UI.loadTimeline()

