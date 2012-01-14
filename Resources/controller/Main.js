var win;
win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/UI/base_pink.png';
win.barColor = '#1e8dd7ff';
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
  return tt.UI.updateView();
});
/* loadView */