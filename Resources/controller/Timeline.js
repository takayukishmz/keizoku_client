var listview, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../styles/Timeline_style.js');
Titanium.include('../modules/Timeline_module.js');
Ti.API.info('timeline.js');
info('Util check');
/* const */
Ti.App.timeline_type = '';
Ti.App.update_tl = true;
/* UI */
listview = Ti.UI.createView({});
listview.add(tt.UI.tableView);
win.add(listview);
tt.UI.setCreateNewButton(function() {
  var w;
  if (Ti.App.selectDialog_flg) {
    return;
  }
  Ti.App.selectDialog_flg = true;
  w = Titanium.UI.createWindow({
    backgroundColor: '#336699',
    borderWidth: 2,
    borderColor: '#999',
    height: 400,
    width: 300,
    borderRadius: 5,
    opacity: 0.92,
    url: '../controller/SelectTimeline.js'
  });
  tt.UI.create2DMatrixDialog(w);
});
/* call API */
win.addEventListener('focus', function() {
  info('focus - Timeline');
  if (Ti.App.update_tl) {
    Ti.App.update_tl = false;
    return tt.UI.loadTimeline();
  }
});
/* eventListener */
tt.UI.tableView.addEventListener('click', function(e) {
  info(JSON.stringify(e));
  info('table event');
  tt.module.rowEventController(e);
});