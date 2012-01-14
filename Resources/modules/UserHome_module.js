var collection_all, tt;
tt = {};
tt.UI = {};
collection_all = 21;
Titanium.include('Common_module.js');
(function() {
  tt.UI.updateView = function(user_id) {
    user_id = Ti.App.user_id;
    return API.callAPI('GET', 'getUserData', {
      user_id: user_id
    }, function(json) {
      var profile, recordPoint, weeklyPoint;
      profile = json.profile;
      name.text = profile.nickname;
      weeklyPoint = 50;
      recordPoint = 100;
      tt.module.move(collectionbar_max, collectionbar_now, collectionbar_max.width * (profile.count_total / collection_all));
      tt.module.move(pointbar_max, pointbar_now, pointbar_max.width * (weeklyPoint / recordPoint));
    });
  };
  tt.UI.createRecordListView = function(user) {
    var newWindow;
    Ti.API.info("createRecordListView");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: '../controller/UserRecordList.js',
      data: user
    });
    Ti.App.CheckInWindow = newWindow;
    return newWindow;
  };
  tt.UI.createCheckinView = function(project) {
    var newWindow;
    Ti.API.info("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: '../controller/CheckIn.js'
    });
    Ti.App.CheckInWindow = newWindow;
    return newWindow;
  };
  tt.UI.createSuppotListView = function(listType, user_id) {
    var newWindow;
    Ti.API.info("createSupportListWindow");
    newWindow = Ti.UI.createWindow({
      title: listType,
      backgroundColor: '#fff',
      url: '../controller/SupportList.js',
      data: {
        listType: listType,
        user_id: user_id
      }
    });
    return newWindow;
  };
  tt.UI.getUserData = function(user_id) {
    API.callAPI('GET', 'getUserData', {
      user_id: user_id
    }, function(json) {
      var profile;
      info('callback getUserData');
      info(JSON.stringify(json));
      info(JSON.stringify(point_cnt));
      profile = json.profile;
      user.text = profile.nickname;
      point_cnt.text = profile.point_total;
      day_cnt_total.text = profile.count_total;
      support_cnt.text = profile.bonus_total;
    });
  };
  tt.module.move = function(baseBar, statusBar, number) {
    var move, pointbar_flg;
    pointbar_flg = true;
    move = function() {
      var limit, rest, speed;
      if (!pointbar_flg) {
        info('move complete');
        return;
      }
      speed = 50;
      limit = Number(baseBar.width);
      rest = baseBar.width - statusBar.width;
      statusBar.width += rest / speed;
      setTimeout(move, 10);
      if (statusBar.width > number) {
        pointbar_flg = false;
      }
    };
    move();
  };
})();