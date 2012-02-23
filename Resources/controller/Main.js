var stars, win;
win = Titanium.UI.currentWindow;
stars = [];
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/Main_module.js');
Titanium.include('../styles/Main_style.js');
/* event */
button_checkin.addEventListener('click', function(e) {
  Ti.API.info('click checkin');
  tt.UI.createCheckInView();
});
week_base.addEventListener('click', function(event) {
  tt.UI.createCollectionView();
});
win.addEventListener('focus', function(e) {
  Ti.API.info('userHome focus');
  indicator.setStatus(false);
  if (Ti.App.checkInUpdate) {
    Ti.App.checkInUpdate = false;
    return tt.UI.updateView();
  }
});
win.addEventListener('blur', function(e) {
  Ti.API.info('userHome blur');
  return indicator.setStatus(true);
});
/* loadView */
tt.UI.setRightButton(function() {
  API.callAPI('GET', 'testsession', {}, function(json) {
    alert(JSON.stringify(json));
  });
});