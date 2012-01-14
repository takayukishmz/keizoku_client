var tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('Common_module.js');
Ti.App.main_pointbar_flg = true;
(function() {
  tt.UI.updateView = function() {
    API.callAPI('GET', 'getUserData', {
      user_id: Ti.App.user_id
    }, function(json) {
      var profile, recordPoint, weeklyPoint;
      profile = json.profile;
      name.text = profile.nickname;
      dayOnRibbon.text = profile.count_total + 'days / 21';
      weeklyPoint = 50;
      recordPoint = 100;
      if (Ti.App.main_pointbar_flg) {
        tt.module.move(pointbar_max, pointbar_now, pointbar_max.width * (weeklyPoint / recordPoint));
      }
    });
  };
  tt.UI.createCheckInView = function() {
    var newWindow;
    Ti.API.info("createCheckInWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/checkin/CheckIn.js',
      navBarHidden: true,
      modal: true
    });
    newWindow.open();
  };
  tt.module.move = function(baseBar, statusBar, number) {
    var move;
    move = function() {
      var limit, rest, speed;
      if (!Ti.App.main_pointbar_flg) {
        info('move complete');
        return;
      }
      speed = 50;
      limit = Number(baseBar.width);
      rest = baseBar.width - statusBar.width;
      statusBar.width += rest / speed;
      if (statusBar.width > number) {
        Ti.App.main_pointbar_flg = false;
      }
      setTimeout(move, 10);
    };
    move();
  };
})();