var data, tableview, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../styles/Const.js');
win.barColor = Const.COLOR_MAIN;
data = [];
data[0] = Ti.UI.createTableViewRow({
  title: 'language'
});
data[1] = Ti.UI.createTableViewRow({
  title: 'study'
});
data[2] = Ti.UI.createTableViewRow({
  title: 'fitness'
});
data[3] = Ti.UI.createTableViewRow({
  title: 'sport'
});
data[4] = Ti.UI.createTableViewRow({
  title: 'lifestyle'
});
data[5] = Ti.UI.createTableViewRow({
  title: 'buisiness'
});
data[6] = Ti.UI.createTableViewRow({
  title: 'entertaiment',
  backgroundColor: '#aaa'
});
tableview = Titanium.UI.createTableView({
  data: data
});
win.add(tableview);
/* listener */
tableview.addEventListener('click', function(e) {
  info(JSON.stringify(e));
  info(e.rowData.title);
  Ti.App.Category_flg = true;
  Ti.App.category.text = e.rowData.title;
  Ti.App.nav.close(win);
});