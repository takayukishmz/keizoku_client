var user_id, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/UserRecordList_module.js');
user_id = win.data.user_id;
/* grobal */
/* UI */
win.add(tt.UI.tableView);
/* eventListener */
win.addEventListener('focus', function() {
  var listType;
  listType = win.data.listType;
  user_id = win.data.user_id;
  return tt.UI.loadListView(user_id);
});
tt.UI.tableView.addEventListener('click', function(e) {
  info(JSON.stringify(e));
  info('table event');
  tt.module.rowEventController(e);
});