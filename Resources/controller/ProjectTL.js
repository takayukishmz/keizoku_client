var count_box, count_num, count_text, member_box, member_num, member_text, owner, row_middle, row_top, section_middle, section_top, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../styles/ProjectTL_style.js');
Titanium.include('../modules/ProjectTL_module.js');
win.title = Ti.App.Selected_Report_timeline.pjt_name;
row_top = Titanium.UI.createTableViewRow(styles.row_top);
row_middle = Titanium.UI.createTableViewRow(styles.base_gray);
owner = Ti.UI.createLabel(styles.owner);
count_box = Ti.UI.createView(styles.count_box);
count_num = Ti.UI.createLabel(styles.count_num);
count_text = Ti.UI.createLabel(styles.count_text);
count_box.add(count_text);
count_box.add(count_num);
member_box = Ti.UI.createView(styles.member_box);
member_num = Ti.UI.createLabel(styles.count_num);
member_text = Ti.UI.createLabel(styles.count_text);
member_box.add(member_text);
member_box.add(member_num);
owner.text = 'test owner';
row_top.add(owner);
row_top.add(count_box);
row_top.add(member_box);
section_top = Ti.UI.createTableViewSection();
section_middle = Ti.UI.createTableViewSection();
section_top.add(row_top);
section_middle.add(row_middle);
win.add(tt.UI.tableView);
tt.UI.loadTimeline();
tt.UI.tableView.addEventListener('click', function(e) {
  info(JSON.stringify(e));
  info('table event');
  tt.module.rowEventController(e);
});