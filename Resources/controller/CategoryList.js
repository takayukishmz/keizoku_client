var data, tableview, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../styles/Const.js');
win.barColor = Const.COLOR_MAIN;
data = [];
data[0] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[0],
  backgroundColor: '#56ffff',
  height: 50
});
data[1] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[1],
  backgroundColor: '#56ff56',
  height: 50
});
data[2] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[2],
  backgroundColor: '#ffff56',
  height: 50
});
data[3] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[3],
  backgroundColor: '#ffaa56',
  height: 50
});
data[4] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[4],
  backgroundColor: '#ff5656',
  height: 50
});
data[5] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[0],
  backgroundColor: '#ff56ff',
  height: 50
});
data[6] = Ti.UI.createTableViewRow({
  title: TEXT.CATEGORY[0],
  backgroundColor: '#aa56ff',
  height: 50
});
tableview = Titanium.UI.createTableView({
  data: data
});
win.add(tableview);
/* listener */
tableview.addEventListener('click', function(e) {
  var nextWindow;
  info(JSON.stringify(e));
  info(e.rowData.title);
  nextWindow = Ti.UI.createWindow({
    title: 'select App',
    backgroundColor: '#fff'
  });
  Ti.App.nav.open(nextWindow, {
    animated: true
  });
});