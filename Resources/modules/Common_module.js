info('common_module');
tt.module = {};
(function() {
  tt.UI.tableView = Titanium.UI.createTableView();
  tt.UI.setRightButton = function(callback) {
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
  tt.UI.setLeftButton = function(callback) {
    var activity, leftBotton;
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
      leftBotton = Titanium.UI.createButton({
        title: 'cancel'
      });
      win.leftNavButton = leftBotton;
      leftBotton.addEventListener('click', function() {
        Ti.API.info('click right button:' + callback);
        callback();
      });
    }
  };
  tt.UI.create2DMatrixDialog = function(win) {
    var a, t, t1;
    t = Titanium.UI.create2DMatrix();
    t = t.scale(0);
    win.transform = t;
    t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;
    a.addEventListener('complete', function() {
      var t2;
      Titanium.API.info('here in complete');
      t2 = Titanium.UI.create2DMatrix();
      t2 = t2.scale(1.0);
      return win.animate({
        transform: t2,
        duration: 200
      });
    });
    win.open(a);
  };
  tt.UI.gotoUserDetail = function(report) {
    var newWindow;
    Ti.API.info("open UserDetailWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/UserDetail.js'
    });
    return newWindow;
  };
  tt.validateText = function(text, min, max, not_null) {
    var textLength;
    info('target text:' + text);
    textLength = text.length;
    info('text length:' + textLength);
    if (not_null && !text) {
      info('null is not accepted. write something');
      return 0;
    } else if (min > textLength || textLength > max) {
      info('invalid text length');
      return 0;
    } else {
      info('OK. valid text');
      return 1;
    }
  };
  tt.UI.createCollectionView = function() {
    var newWindow;
    Ti.API.info("createCollectionWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/Collection.js',
      navBarHidden: true,
      modal: true
    });
    return newWindow;
  };
  tt.UI.createUserHomeView = function(user) {
    var newWindow;
    Ti.API.info("createUserHomeView");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/UserHome.js',
      data: user
    });
    return newWindow;
  };
})();