Ti.App.main_pointbar_flg = true;
(function() {
  ({
    updateView: function() {
      API.callAPI('GET', 'getUserData', {
        user_id: Ti.App.user_id
      }, function(json) {
        dayOnRibbon.text = json.profile.day_total + ' days ';
        $.Util.updateUserData(json);
      });
    },
    createCheckInView: function() {
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
    }
  });
})();