var barMove, bonus_box, bonusbar, day_cnt_total, day_total, hoge, limit, listview, photo, point, point_cnt, speed, support, support_cnt, user, view, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/UserHome_module.js');
Titanium.include('../styles/UserHome_style.js');
win.backgroundColor = S.backgroundColor;
Ti.App.UserHomeWindow = win;
Ti.App.update_flg = true;
Ti.App.CheckIn_flg = false;
Ti.App.CheckInComplete_flg = false;
Ti.App.bar_flg = true;
Ti.App.UserHomeWindow = win;
view = Ti.UI.createView(styles.view);
photo = Ti.UI.createView(styles.photo);
view.add(photo);
user = Ti.UI.createLabel(styles.user);
view.filter = user.text;
view.add(user);
point = Ti.UI.createView(styles.point);
point_cnt = Ti.UI.createLabel(styles.point_cnt);
point.add(point_cnt);
view.add(point);
day_total = Ti.UI.createView(styles.day_total);
day_cnt_total = Ti.UI.createLabel(styles.day_cnt_total);
day_total.add(day_cnt_total);
view.add(day_total);
support = Ti.UI.createView(styles.support);
support_cnt = Ti.UI.createLabel(styles.support_cnt);
support.add(support_cnt);
view.add(support);
bonus_box = Ti.UI.createView(styles.bonus_box);
bonusbar = Ti.UI.createView(styles.bonusbar);
bonus_box.add(bonusbar);
view.add(bonus_box);
win.add(view);
listview = Ti.UI.createView(styles.listview);
listview.add(tt.UI.tableView);
win.add(listview);
hoge = 0;
tt.UI.createNewProjectButton();
tt.UI.getUserData(Ti.App.user_id);
/* call API */
speed = 15;
limit = Number(support_cnt.text);
barMove = function() {
  rest;
  var rest;
  if (!Ti.App.bar_flg) {
    info('boxMove return');
    return;
  }
  rest = limit - bonusbar.width;
  bonusbar.width += rest / speed;
  if (bonusbar.width > 300) {
    limit = 1;
    bonusbar.width = 0;
  }
  return setTimeout(barMove, 8);
};
/* listener */
win.addEventListener('focus', function(e) {
  Ti.API.info('userHome focus');
  if (Ti.App.update_flg) {
    Ti.API.info('userHome update flg');
    Ti.App.update_flg = false;
    tt.UI.getUserData(Ti.App.user_id);
    tt.UI.loadListView();
    info(limit);
    Ti.App.bar_flg;
    return barMove();
  }
});
win.addEventListener('blur', function(e) {
  Ti.API.info('userHome focus');
  if (Ti.App.bar_flg) {
    return Ti.App.bar_flg = false;
  }
});