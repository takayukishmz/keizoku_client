var base_white, i, pointList, point_msg, point_num, win, _ref;
win = Titanium.UI.currentWindow;
Titanium.include('../../Util.js');
Titanium.include('../../lib/ServerAPI.js');
Titanium.include('../../styles/checkin/GetPoint_style.js');
Titanium.include('../../modules/checkin/GetPoint_module.js');
Ti.App.checkInUpdate = true;
tt.UI.setLeftButton(function() {
  Ti.App.rootWindow.close();
}, {
  title: setTT("CLOSE")
});
point_number.text = win.data.total + "pt";
pointList = win.data.lists;
for (i = 0, _ref = pointList.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
  info(i);
  info('loop');
  base_white = Titanium.UI.createView(styles.base_white);
  base_white.top += 35 * i;
  point_msg = Titanium.UI.createLabel(styles.point_msg);
  point_msg.text = pointList[i].msg;
  base_white.add(point_msg);
  point_num = Titanium.UI.createLabel(styles.point_num);
  point_num.text = pointList[i].point + 'pt';
  base_white.add(point_num);
  win.add(base_white);
}