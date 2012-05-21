var UserHome;
UserHome = require('ui/window/UserHome').UserHome;
exports.Util = {
  setRightButton: function(win, callback, style) {
    var activity, rightButton;
    if (!callback) {
      alert('You have to set callback func ');
    }
    if (!style) {
      style = {
        title: '再読込',
        systemButton: Titanium.UI.iPhone.SystemButton.REFRESH,
        backgroundColor: 'black'
      };
    }
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
          menuItem.addEventListener("click", function(e) {
            callback;
          });
        };
      }
    } else {
      rightButton = Titanium.UI.createButton(style);
      win.rightNavButton = rightButton;
      rightButton.addEventListener('click', function() {
        Ti.API.info('click right button:' + callback);
        callback();
      });
      return rightButton;
    }
  },
  setLeftButton: function(win, callback, style) {
    var activity, leftButton;
    if (!callback) {
      alert('You have to set callback func ');
    }
    if (!style) {
      style = {
        title: 'update',
        systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
      };
    }
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
      leftButton = Titanium.UI.createButton(style);
      win.leftNavButton = leftButton;
      leftButton.addEventListener('click', function() {
        Ti.API.info('click right button:' + callback);
        callback();
      });
    }
  },
  create2DMatrixDialog: function(win) {
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
  },
  validateText: function(text, min, max, not_null) {
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
  },
  createCollectionView: function() {
    var newWindow;
    Ti.API.info("createCollectionWindow");
    newWindow = Ti.UI.createWindow({
      title: setTT("APPTITLE"),
      backgroundColor: '#fff',
      url: '../controller/Collection.js',
      navBarHidden: true,
      modal: true,
      barColor: Const.BARCOLOR
    });
    return newWindow;
  },
  createUserHomeView: function(user_id) {
    var newWindow;
    newWindow = new UserHome(user_id);
    return newWindow;
  },
  move: function(target, startWidth, endWidth) {
    var move;
    info('--------move---------');
    while (target.width > startWidth) {
      target.width = startWidth;
    }
    info(target.width);
    info(startWidth);
    info(endWidth);
    move = function() {
      var limit, rest, speed;
      if (target.width >= endWidth) {
        info('----------move complete----------');
        return;
      }
      speed = 50;
      limit = Number(endWidth);
      rest = endWidth - startWidth;
      target.width += rest / speed;
      setTimeout(move, 10);
    };
    move();
  },
  updateUserData: function(json) {
    var endWidth, i, profile, recordPoint, weeklyPoint, weeklyRecord, _i, _len;
    info('updateUserData');
    profile = json.profile;
    icon.image = profile.picture_url ? profile.picture_url : '../images/' + Const.DEFALT.USER;
    name.text = profile.nickname;
    weeklyPoint = 50;
    recordPoint = 100;
    endWidth = pointbar_max.width * (weeklyPoint / recordPoint);
    tt.module.move(pointbar_now, 0, endWidth);
    info(json.weekly_record);
    weeklyRecord = json.weekly_record;
    for (_i = 0, _len = weeklyRecord.length; _i < _len; _i++) {
      i = weeklyRecord[_i];
      info(i);
      if (i.wday !== null) {
        info(i);
        stars[i.wday].backgroundImage = '../images/star/' + i.color_id + '.png';
      }
    }
  }
};