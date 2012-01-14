var user_id, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../modules/UserHome_module.js');
Titanium.include('../styles/UserHome_style.js');
user_id = win.data.user_id;
tt.UI.updateView();
button41.addEventListener('click', function(e) {});
rank.addEventListener('click', function(e) {});
collection.addEventListener('click', function(e) {
  Titanium.UI.currentTab.open(tt.UI.createRecordListView(win.data, {
    animated: true
  }));
});
challenge.addEventListener('click', function(e) {});
support.addEventListener('click', function(e) {
  var listType;
  listType = TEXT.LISTTYPE.SUPPORTER;
  Titanium.UI.currentTab.open(tt.UI.createSuppotListView(listType, user_id, {
    animated: true
  }));
});
supporter.addEventListener('click', function(e) {
  var listType;
  listType = TEXT.LISTTYPE.SUPPORTING;
  Titanium.UI.currentTab.open(tt.UI.createSuppotListView(listType, user_id, {
    animated: true
  }));
});
win.addEventListener('focus', function(e) {
  return Ti.API.info('userHome focus');
});