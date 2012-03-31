var $;
Titanium.include('./styles/Const.js');
Titanium.include('./TextConst.js');
Titanium.include('./DebugUtil.js');
$ = {};
Ti.App.user_id = 2;
Ti.App.checkInUpdate = true;
(function() {
  var TabGroup, api, timelineWindow;
  api = require('lib/ServerAPI').API;
  timelineWindow = require('ui/window/Timeline').Timeline;
  TabGroup = require("ui/TabGroup").TabGroup;
  $.Util = require('lib/Util').Util;
  $.API = new api();
  $.tabs = new TabGroup({
    title: "Todo",
    icon: "images/KS_nav_ui.png",
    window: new timelineWindow()
  });
  $.tabs.open();
})();