var tt;
tt = {};
tt.UI = {};
tt.module = {};
tt.param = {};
Titanium.include('Common_module.js');
(function() {
  tt.module.eventSetter = function(e) {
    var goWindow;
    info('eventSetter');
    info(e.source.clickName);
    goWindow;
    switch (e.source.clickName) {
      case 'gocreate':
        goWindow = Ti.UI.createWindow({
          title: 'Create New',
          backgroundColor: '#fff',
          url: '../controller/Start.js'
        });
        break;
      case 'gojoin':
        goWindow = Ti.UI.createWindow({
          title: 'Select Project',
          backgroundColor: '#fff',
          url: '../controller/CategoryList.js'
        });
        break;
      case 'goapp':
        goWindow = Ti.UI.createWindow({
          title: 'select App',
          backgroundColor: '#fff',
          url: '../controller/SelectApp.js'
        });
        break;
      default:
        info('else');
        return;
    }
    Ti.App.nav.open(goWindow, {
      animated: true
    });
  };
})();