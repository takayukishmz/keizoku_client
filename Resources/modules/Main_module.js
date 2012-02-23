Titanium.include('Common_module.js');
Ti.App.main_pointbar_flg = true;
(function() {
  tt.UI.updateView = function() {
    API.callAPI('GET', 'getUserData', {
      user_id: Ti.App.user_id
    }, function(json) {
      dayOnRibbon.text = json.profile.day_total + ' days ';
      tt.module.updateUserData(json);
    });
  };
  tt.UI.createCheckInView = function() {
    var newWindow;
    Ti.API.info("createCheckInWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/checkin/CheckIn.js',
      navBarHidden: true,
      modal: true,
      barColor: Const.BARCOLOR
    });
    newWindow.open();
  };
})();