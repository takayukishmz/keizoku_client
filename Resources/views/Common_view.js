(function() {
  tt.UI.tableView = Titanium.UI.createTableView();
  tt.UI.setRefreshButton = function(callback) {
    var activity, rightBotton;
    if (Titanium.Platform.osname === 'android') {
      activity = Titanium.Android.currentActivity;
      if (activity) {
        return acitivity.onCreateOptionsMenu = function(e) {
          var menu, menuItem;
          menu = e.menu;
          menuItem = menu.add({
            title: "再読込"
          });
          menuItem.setIcon("dark_refresh.png");
          return menuItem.addEventListener("click", function(e) {
            return callback;
          });
        };
      }
    } else {
      rightBotton = Titanium.UI.createButton({
        title: '再読込',
        systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
      });
      win.rightNavButton = rightBotton;
      rightBotton.addEventListener('click', function() {
        Ti.API.info('click right button:' + callback);
        callback();
      });
    }
  };
})();