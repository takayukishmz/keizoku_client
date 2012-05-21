var $;
Titanium.include('./styles/Const.js');
Titanium.include('./TextConst.js');
Titanium.include('./DebugUtil.js');
$ = {};
Ti.App.user_id = 1;
(function() {
  var Group, Home, LoginWindow, MockWindow, Notice, TabGroup, api, login, timelineWindow;
  api = require('lib/ServerAPI').API;
  MockWindow = require('ui/window/MockWindow').MockWindow;
  LoginWindow = require('ui/window/Login').Login;
  timelineWindow = require('ui/window/Timeline').Timeline;
  Group = require('ui/window/Group').Group;
  Home = require('ui/window/Home').Home;
  Notice = require('ui/window/Notice').Notice;
  TabGroup = require("ui/TabGroup").TabGroup;
  $.Util = require('lib/Util').Util;
  $.API = new api();
  $.tabs = new TabGroup({
    title: "みんな",
    icon: "images/icon/light_list.png",
    window: new timelineWindow()
  }, {
    title: "グループ",
    icon: "images/icon/light_chat.png",
    window: new Group()
  }, {
    title: "記録",
    icon: "images/icon/light_check.png",
    window: new Home()
  }, {
    title: "お知らせ",
    icon: "images/icon/light_mail.png",
    window: new Notice()
  }, {
    title: "カレンダー",
    icon: "images/icon/light_more....png",
    window: new Notice()
  });
  $.tabs.open();
  login = new LoginWindow;
  login.checkLogin();
})();