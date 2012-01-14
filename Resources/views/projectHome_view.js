var tt;
tt = {};
tt.UI = {};
(function() {
  tt.UI.createCheckInCompleteView = function() {
    var newWindow;
    Ti.API.info("createCheckInCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: 'UpLoad',
      backgroundColor: '#fff',
      url: 'CheckInComplete.js'
    });
    return newWindow;
  };
  tt.UI.getParticipants = function(pjt_id) {};
})();
Titanium.include('Common_view.js');