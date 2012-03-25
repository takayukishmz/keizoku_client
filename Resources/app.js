var $;
Titanium.include('./styles/Const.js');
Titanium.include('./TextConst.js');
Titanium.include('./DebugUtil.js');
$ = {};
Ti.App.user_id = 2;
Ti.App.checkInUpdate = true;
(function() {
  var Comparison, Home, Notice, TabGroup, api, timelineWindow;
  api = require('lib/ServerAPI').API;
  timelineWindow = require('controller/Timeline').Timeline;
  Comparison = require('ui/window/Comparison').Comparison;
  Home = require('ui/window/Home').Home;
  Notice = require('ui/window/Notice').Notice;
  TabGroup = require("ui/TabGroup").TabGroup;
  $.Util = require('modules/Util').Util;
  $.API = new api();
  $.tabs = new TabGroup({
    title: "Todo",
    icon: "images/KS_nav_ui.png",
    window: new timelineWindow()
  }, {
    title: "hoge",
    icon: "images/KS_nav_ui.png",
    window: new Comparison()
  }, {
    title: "hoge",
    icon: "images/KS_nav_ui.png",
    window: new Home()
  }, {
    title: "hoge",
    icon: "images/KS_nav_ui.png",
    window: new Notice()
  });
  $.tabs.open();
})();