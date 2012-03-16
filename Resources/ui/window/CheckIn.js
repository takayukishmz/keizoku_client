var BaseWindow, CheckIn, GetPointWindow, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
GetPointWindow = require('ui/window/GetPoint').GetPoint;
CheckIn = (function() {
  __extends(CheckIn, BaseWindow);
  function CheckIn() {
    this.execCountUp = __bind(this.execCountUp, this);
    var share_facebook, share_twitter;
    share_facebook = false;
    share_twitter = false;
    this.params = {
      title: 'rootWindow',
      navBarHidden: true,
      modal: true
    };
    CheckIn.__super__.constructor.call(this, this.params);
    Ti.App.rootWindow = this.win;
    return this.win;
  }
  CheckIn.prototype.setView = function() {
    var inputData, tableView;
    this.text = Titanium.UI.createTextField(styles.text);
    this.comment = Ti.UI.createTableViewRow({
      height: 40
    });
    this.term = Ti.UI.createTableViewRow(styles.termRow);
    this.term_content = Titanium.UI.createTabbedBar(styles.tabbedBar);
    this.tw = Ti.UI.createTableViewRow({
      height: 40
    });
    this.fb = Ti.UI.createTableViewRow({
      height: 40
    });
    this.switch_tw = Titanium.UI.createSwitch(styles.switch_tw);
    this.switch_fb = Titanium.UI.createSwitch(styles.switch_fb);
    this.tw.title = 'twitter';
    this.tw.header = 'social';
    this.fb.title = 'facebook';
    this.term.header = 'time(minute)';
    this.comment.header = 'comment\
		';
    this.term.add(this.term_content);
    this.comment.add(this.text);
    this.tw.add(this.switch_tw);
    this.fb.add(this.switch_fb);
    inputData = [];
    inputData[0] = this.comment;
    inputData[1] = this.term;
    inputData[2] = this.tw;
    inputData[3] = this.fb;
    tableView = Titanium.UI.createTableView({
      data: inputData,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
      backgroundImage: '../../images/UI/base_pink.png'
    });
    this.subWin = Ti.UI.createWindow({
      title: 'share',
      backgroundImage: '../../images/UI/base_pink.png',
      barColor: Const.BARCOLOR
    });
    this.subWin.add(tableView);
    Ti.App.nav = Ti.UI.iPhone.createNavigationGroup({
      window: this.subWin
    });
    return this.win.add(Ti.App.nav);
  };
  CheckIn.prototype.execCountUp = function() {
    var params;
    info('tt/execCountUp');
    if ($.Util.validateText(this.text.value, 0, 141, 'not_null')) {
      info('valid textx value');
    } else {
      info('invalid input');
      this.text.backgroundColor = '#ffcccc';
      return;
    }
    params = {
      user_id: Ti.App.user_id,
      comment: this.text.value,
      time: 10,
      challenge_flg: 0
    };
    this.subWin.setRightNavButton(actInd);
    actInd.show();
    $.API.callAPI('GET', 'countUpResult', params, __bind(function(json) {
      var newWindow;
      actInd.hide();
      $.Util.setRightButton(this.subWin, this.execCountUp);
      if (json.success) {
        info('success');
        newWindow = new GetPointWindow(json.point);
        Ti.App.nav.open(newWindow, {
          animated: true
        });
      } else {
        info('false');
      }
    }, this));
  };
  CheckIn.prototype.setButton = function() {
    $.Util.setRightButton(this.subWin, this.execCountUp, {
      title: '記録する'
    });
    return $.Util.setLeftButton(this.subWin, __bind(function() {
      this.win.close();
    }, this), {
      title: setTT("CANCEL")
    });
  };
  CheckIn.prototype.setEvent = function() {
    this.subWin.addEventListener('focus', function(e) {
      Ti.API.info('CheckIn focus');
      indicator.setStatus(false);
    });
    this.subWin.addEventListener('blur', function(e) {
      Ti.API.info('CheckIn blur');
      indicator.setStatus(true);
    });
    this.switch_fb.addEventListener('change', function(e) {
      info('change switch_fb');
      if (Ti.Facebook.loggedIn) {
        info('fb already login');
        return tt.FB.getProfile();
      } else {
        info('fb login');
        return Ti.Facebook.authorize();
      }
    });
    this.switch_tw.addEventListener('change', function(e) {
      info('change switch_tw');
      if (Ti.App.twitterLogin) {
        return info('twitter already login');
      } else {
        info('twitter login');
        Ti.App.twitterLogin = true;
        return Ti.App.twitterApi.init();
      }
    });
    return this.term_content.addEventListener('click', function(e) {
      info_obj(e);
      info(e.source.labels[e.index]);
      tableView.data[1].headerTitle = e.source.labels[e.index];
    });
  };
  return CheckIn;
})();
exports.CheckIn = CheckIn;
styles = {
  text: {
    color: '#336699',
    height: 30,
    top: 5,
    left: 5,
    width: 250,
    hintText: 'hint',
    value: 'hoge',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
  },
  time_content: {
    color: '#336699',
    height: 30,
    top: 5,
    left: 5,
    width: 250,
    hintText: 'hint',
    value: '15min',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
    labels: TEXT.TERM_ARRAY
  },
  term_bar: {
    backgroundColor: '#336699',
    left: 0,
    style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height: 40,
    width: 300,
    index: 0
  },
  switch_tw: {
    value: false,
    top: 5,
    right: 5
  },
  switch_fb: {
    value: false,
    top: 5,
    right: 5
  },
  tabbedBar: {
    labels: TEXT.TERM_ARRAY,
    backgroundColor: '#336699',
    left: 0,
    style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height: 40,
    width: 300,
    index: 0
  },
  termRow: {
    height: 37,
    backgroundImage: '../../images/UI/base_pink.png'
  }
};