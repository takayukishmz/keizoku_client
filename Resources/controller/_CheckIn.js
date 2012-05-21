var checkin, checkin_text, counter, counter_text, data, header, header_text, i, icon, member, member_text, owner, rootWindow, row_bottom, row_middle, row_top, section_bottom, section_middle, section_top, star, star_num, win, _ref;
rootWindow = Titanium.UI.currentWindow;
win = Ti.UI.createWindow({
  backgroundColor: '#fff',
  title: 'checkin'
});
Titanium.include('../Util.js');
Titanium.include('../modules/CheckIn_module.js');
Titanium.include('../styles/CheckIn_style.js');
/* UI */
/* common */
data = [];
win.add(tt.UI.tableView);
section_top = Ti.UI.createTableViewSection();
section_middle = Ti.UI.createTableViewSection();
section_bottom = Ti.UI.createTableViewSection();
data.push(section_top);
data.push(section_middle);
data.push(section_bottom);
row_top = Titanium.UI.createTableViewRow(styles.row_top);
row_middle = Titanium.UI.createTableViewRow(styles.row_middle);
row_bottom = Titanium.UI.createTableViewRow(styles.row_top);
row_top.hasChild = true;
row_bottom.hasChild = true;
section_top.add(row_top);
section_middle.add(row_middle);
section_bottom.add(row_bottom);
/* top */
icon = Titanium.UI.createImageView(styles.icon);
owner = Titanium.UI.createLabel(styles.owner);
owner.text = 'user name';
counter = Titanium.UI.createView(styles.counter);
counter_text = Titanium.UI.createLabel(styles.counter_text);
member = Titanium.UI.createView(styles.member);
member_text = Titanium.UI.createLabel(styles.member_text);
checkin = Ti.UI.createView(styles.checkin);
checkin_text = Ti.UI.createLabel(styles.checkin_text);
checkin.add(checkin_text);
row_top.add(icon);
row_top.add(owner);
row_top.add(counter);
row_top.add(member);
row_top.add(checkin);
/* top  end */
/* middle */
star_num = 7;
for (i = 0, _ref = star_num - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
  info('star:' + i);
  star = Titanium.UI.createImageView(styles.star);
  star.left = S.MARGIN + S.ICON * i;
  row_middle.add(star);
}
header = Ti.UI.createView(styles.header);
header_text = Ti.UI.createLabel(styles.header_text);
header.add(header_text);
data[1].headerView = header;
/* bottom */
header = Ti.UI.createView(styles.header);
header_text = Ti.UI.createLabel(styles.header_text);
header_text.text = 'supporters';
header.add(header_text);
data[2].headerView = header;
/* setlist　*/
tt.UI.tableView.data = data;
Ti.App.nav = Ti.UI.iPhone.createNavigationGroup({
  window: win
});
rootWindow.add(Ti.App.nav);
/* end */
/* user view */
/* eventListener */
checkin.addEventListener('click', function(e) {
  Ti.API.info('click checkin');
  tt.UI.createNewProjectView();
});
win.addEventListener('focus', function(e) {
  Ti.API.info('checkin focus');
});
/* call API */