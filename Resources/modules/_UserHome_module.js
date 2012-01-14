var tt;
tt = {};
tt.UI = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.createCheckinView = function(project) {
    var newWindow;
    Ti.API.info("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: '../controller/CheckIn.js'
    });
    Ti.App.Selected_pjt = project;
    Ti.App.CheckInWindow = newWindow;
    return newWindow;
  };
  tt.UI.createNewProjectView = function() {
    var newWindow;
    Ti.API.info("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/SelectNewWay.js',
      navBarHidden: true,
      modal: true
    });
    newWindow.open();
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
})();