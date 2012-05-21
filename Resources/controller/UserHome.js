var rightButton, stars, user, win;
win = Titanium.UI.currentWindow;
stars = [];
user = {};
user.user_id = win.data;
user.isSupport = "";
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/UserHome_module.js');
Titanium.include('../styles/UserHome_style.js');
if (Number(Ti.App.user_id !== Number(user.user_id))) {
  rightButton = tt.UI.setRightButton(tt.module.SupportButton, {
    title: setTT("SUPPORT")
  });
}
tt.UI.updateView(Ti.App.user_id, user.user_id);
history.addEventListener('click', function(e) {
  Titanium.UI.currentTab.open(tt.UI.createRecordListView(user.user_id, {
    animated: true
  }));
});
supporter.addEventListener('click', function(e) {
  var listType;
  listType = TEXT.LISTTYPE.SUPPORTER;
  Titanium.UI.currentTab.open(tt.UI.createSuppotListView(listType, user.user_id, {
    animated: true
  }));
});
supporting.addEventListener('click', function(e) {
  var listType;
  listType = TEXT.LISTTYPE.SUPPORTING;
  Titanium.UI.currentTab.open(tt.UI.createSuppotListView(listType, user.user_id, {
    animated: true
  }));
});
win.addEventListener('focus', function(e) {});