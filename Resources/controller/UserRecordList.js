var user_id, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../styles/Notice_style.js');
Titanium.include('../modules/UserRecordList_module.js');
user_id = win.user_id;
/* grobal */
/* UI */
win.add(tt.UI.tableView);
user_id = win.user_id;
tt.UI.loadListView(user_id);
/* eventListener */
tt.UI.setRightButton(function() {
  user_id = win.user_id;
  return tt.UI.loadListView(user_id);
});
tt.UI.tableView.addEventListener('click', function(e) {
  info('table event');
});