var globals;
Titanium.include('./styles/Const.js');
Titanium.include('./DebugUtil.js');
globals = {};
Ti.App.user_id = 1;
(function() {
  var TabGroup, api, timelineWindow;
  api = require('lib/ServerAPI').API;
  timelineWindow = require('controller/Timeline').Timeline;
  TabGroup = require("ui/TabGroup").TabGroup;
  globals.API = new api();
  globals.tabs = new TabGroup({
    title: "Todo",
    icon: "images/KS_nav_ui.png",
    window: new timelineWindow()
  });
  globals.tabs.open();
})();