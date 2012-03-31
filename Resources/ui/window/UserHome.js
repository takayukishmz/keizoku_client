var BaseWindow, PointBar, RecordList, SupportList, UserHome, UserInfo, WeeklyResult, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
RecordList = require('ui/window/RecordList').RecordList;
SupportList = require('ui/window/SupportList').SupportList;
UserInfo = require('ui/home/UserInfo').UserInfo;
PointBar = require('ui/home/PointBar').PointBar;
WeeklyResult = require('ui/home/WeeklyResult').WeeklyResult;
UserHome = (function() {
  __extends(UserHome, BaseWindow);
  function UserHome(user_id) {
    this.SupportButton = __bind(this.SupportButton, this);
    this.updateView = __bind(this.updateView, this);
    this.setButton = __bind(this.setButton, this);
    this.setEvent = __bind(this.setEvent, this);
    this.setView = __bind(this.setView, this);    this.user = {
      user_id: user_id,
      isSupport: ""
    };
    UserHome.__super__.constructor.call(this, {
      title: 'userHome'
    });
    this.userInfo = new UserInfo();
    this.pointBar = new PointBar();
    this.weeklyResult = new WeeklyResult();
    this.view.add(this.userInfo.getNodeView());
    this.view.add(this.pointBar.getNodeView());
    this.view.add(this.weeklyResult.getNodeView());
    this.updateView(Ti.App.user_id, this.user.user_id);
    return this.win;
  }
  UserHome.prototype.setView = function() {
    var history_text, like_text, scrollView, supporter_text, supporting_text;
    this.view = Titanium.UI.createView(styles.base);
    scrollView = Titanium.UI.createScrollView(styles.scrollview);
    this.supporter = Titanium.UI.createButton(styles.supporter);
    this.supporting = Titanium.UI.createButton(styles.supporting);
    this.like = Titanium.UI.createButton(styles.like);
    this.history = Titanium.UI.createButton(styles.history);
    this.history_title = Titanium.UI.createLabel(styles.history_title);
    history_text = Titanium.UI.createLabel(styles.history_text);
    supporter_text = Titanium.UI.createLabel(styles.supporter_text);
    supporting_text = Titanium.UI.createLabel(styles.supporting_text);
    like_text = Titanium.UI.createLabel(styles.like_text);
    this.history.add(history_text);
    this.supporter.add(supporter_text);
    this.supporting.add(supporting_text);
    this.like.add(like_text);
    this.view.add(this.supporter);
    this.view.add(this.supporting);
    this.view.add(this.history);
    this.view.add(this.history_title);
    this.view.add(this.like);
    scrollView.add(this.view);
    return this.win.add(scrollView);
  };
  UserHome.prototype.setEvent = function() {
    info('setEvent');
    this.history.addEventListener('click', __bind(function(e) {
      $.tabs.currentTab.open(new RecordList(this.user.user_id), {
        animated: true
      });
    }, this));
    this.supporter.addEventListener('click', __bind(function(e) {
      $.tabs.currentTab.open(new SupportList(this.user.user_id, 'getSupporters'), {
        animated: true
      });
    }, this));
    this.supporting.addEventListener('click', __bind(function(e) {
      $.tabs.currentTab.open(new SupportList(this.user.user_id, 'getSupportings'), {
        animated: true
      });
    }, this));
    return this.win.addEventListener('focus', function(e) {});
  };
  UserHome.prototype.setButton = function() {
    if (Number(Ti.App.user_id !== Number(this.user.user_id))) {
      this.rightButton = $.Util.setRightButton(this.win, this.SupportButton, {
        title: setTT("SUPPORT")
      });
    }
  };
  UserHome.prototype.updateView = function(user_id, selected_user_id) {
    return $.API.callAPI('GET', 'getUserData', {
      user_id: user_id,
      selected_user_id: selected_user_id
    }, __bind(function(json) {
      if (json.isSupport && Number(user_id !== Number(selected_user_id))) {
        info_obj(this.rightButton);
        this.rightButton.title = setTT("SUPPORTING");
        this.user.isSupport = true;
      }
      this.pointBar.update(json.profile.weekly_total_point, json.profile.point_hiscore);
      this.userInfo.setUserData(json.profile);
      this.weeklyResult.update(json.weekly_record);
    }, this));
  };
  UserHome.prototype.SupportButton = function() {
    var params;
    params = {
      user_id: Ti.App.user_id,
      support_user_id: this.user.user_id
    };
    if (this.user.isSupport) {
      $.API.callAPI('GET', 'remove', params, __bind(function(json) {
        if (json.remove_success) {
          this.rightButton.title = setTT("SUPPORT");
          this.user.isSupport = false;
        }
        if (json.message) {
          alert(json.message);
          return;
        }
      }, this));
    } else {
      $.API.callAPI('GET', 'execSupport', params, __bind(function(json) {
        if (json.support_success) {
          this.rightButton.title = setTT("SUPPORTING");
          this.user.isSupport = true;
        }
        if (json.message) {
          alert(json.message);
          return;
        }
      }, this));
    }
  };
  UserHome.prototype.createRecordListView = function(user_id) {
    var newWindow;
    newWindow = new RecordList(user_id);
    return newWindow;
  };
  return UserHome;
})();
exports.UserHome = UserHome;
styles = {
  icon: {
    left: 5,
    top: 5,
    width: 44,
    height: 44,
    image: '../images/user.png',
    borderRadius: 3
  },
  name: {
    left: 57,
    top: 16,
    width: 200,
    height: 21,
    text: 'person1',
    color: '#000000'
  },
  base: {
    backgroundImage: 'images/UI/base_pink.png'
  },
  supporter: {
    left: 5,
    top: 310,
    width: 100,
    height: 44,
    color: '#324f85',
    backgroundImage: 'images/UI/bar_white_short_155x44.png'
  },
  supporting: {
    left: 110,
    top: 310,
    width: 100,
    height: 44,
    color: '#324f85',
    backgroundImage: 'images/UI/bar_white_short_155x44.png'
  },
  like: {
    left: 214,
    top: 310,
    width: 100,
    height: 44,
    color: '#324f85',
    backgroundImage: 'images/UI/bar_white_short_155x44.png'
  },
  history: {
    left: 5,
    top: 250,
    width: 310,
    height: 44,
    color: '#324f85',
    backgroundImage: 'images/UI/bar_white_310x44.png'
  },
  history_title: {
    left: 5,
    top: 230,
    width: 155,
    height: 16,
    text: 'Learning History',
    textAlign: 'left',
    color: '#777',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  },
  history_text: {
    left: 20,
    top: 0,
    width: 127,
    height: 44,
    text: '-- Records'
  },
  supporter_text: {
    left: 0,
    top: 11,
    width: 100,
    height: 22,
    textAlign: 'center',
    text: 'Supporter',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  },
  supporting_text: {
    left: 0,
    top: 11,
    width: 100,
    height: 22,
    textAlign: 'center',
    text: 'Support',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  },
  like_text: {
    left: 0,
    top: 11,
    width: 100,
    height: 22,
    textAlign: 'center',
    text: 'My Like',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  }
};