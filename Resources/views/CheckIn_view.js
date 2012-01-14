var tt;
tt = {};
tt.UI = {};
(function() {
  tt.UI.loadView = function(win, styles) {};
  return tt.UI.createCheckInCompleteView = function() {
    var newWindow;
    Ti.API.info("createCheckInCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: 'UpLoad',
      backgroundColor: '#fff',
      url: 'CheckInComplete.js'
    });
    return newWindow;
  };
})();
Titanium.include('Common_view.js');