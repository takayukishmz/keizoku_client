var tt;
tt = {};
tt.UI = {};
tt.param = {};
(function() {
  tt.execCountUp = function() {
    var params;
    info('tt/execCountUp');
    if (!text.value || text.value.length > 140) {
      info('invalid textx value');
      return;
    }
    params = {
      user_id: Ti.App.user_id,
      pjt_id: Ti.App.Selected_pjt.pjt_id,
      report_text: text.value
    };
    info('call API');
    Ti.API.info('start exec button');
    API.callAPI('GET', 'countUpResult', params, function(json) {
      var is_success;
      info('countUpResult json:' + JSON.stringify(json));
      is_success = json.is_success;
      if (is_success) {
        info('success');
        Titanium.UI.currentTab.open(tt.UI.createGetPointWindow());
      } else {
        info('false');
      }
    });
  };
  tt.UI.createGetPointWindow = function() {
    var newWindow;
    Ti.API.info("createGetPointWindow");
    newWindow = Ti.UI.createWindow({
      title: 'congratulations!',
      backgroundColor: '#fff',
      url: 'GetPoint.js'
    });
    return newWindow;
  };
})();
Titanium.include('Common_view.js');