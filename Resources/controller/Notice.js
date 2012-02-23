var win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/Notice_module.js');
Titanium.include('../styles/Notice_style.js');
info('Nitice.js');
/* const */
/* UI */
win.add(tt.UI.tableView);
/* call API */
tt.UI.loadListView();
/* eventListener */
tt.UI.tableView.addEventListener('click', function(e) {
  info(JSON.stringify(e));
  info('table event');
  tt.module.rowEventController(e);
});