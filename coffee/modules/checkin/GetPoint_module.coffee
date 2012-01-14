
tt = {}
tt.UI = {}
tt.module = {}
do ->
	tt.UI.pointDetail = () ->
		for i in [0..2]
			info 'tt.UI.pointDetail'
			info i
			box = Titanium.UI.createView styles.point_box
			
			
			box.top = S.MARGIN+(S.MARGIN+S.ICON)*i
			
			point_label = Titanium.UI.createLabel styles.point_label
			point_num = Titanium.UI.createLabel styles.point_num
			box.add point_label
			box.add point_num
			point.add box

	
	tt.UI.SupporterList = () ->
		info 'call api and get supporter list'

	

Titanium.include('../Common_module.js');