var tt;
tt = {};
tt.UI = {};
tt.param = {};
Titanium.include('Common_module.js');
Titanium.include('../lib/Facebook.js');
Titanium.include('../lib/Twitter.js');
(function() {
  tt.execCountUp = function() {
    var params;
    info('tt/execCountUp');
    if (tt.validateText(text.value, 0, 141, 'not_null')) {
      info('valid textx value');
    } else {
      info('invalid input');
      text.backgroundColor = '#ffcccc';
      return;
    }
    params = {
      user_id: Ti.App.user_id,
      comment: text.value,
      time: 10,
      challenge_flg: 0
    };
    API.callAPI('GET', 'countUpResult', params, function(json) {
      var is_success, newWindow;
      info('countUpResult json:' + JSON.stringify(json));
      is_success = json.is_success;
      if (is_success) {
        info('success');
        newWindow = Ti.UI.createWindow({
          title: 'congratulations!',
          backgroundColor: '#fff',
          url: '../controller/GetPoint.js'
        });
        Ti.App.nav.open(newWindow, {
          animated: true
        });
      } else {
        info('false');
      }
    });
  };
  tt.UI.createGetPointWindow = function() {
    Ti.API.info("createGetPointWindow");
    return newWindow;
  };
  tt.UI.setLeftButton(function() {
    info('SelectNewWay.js close');
    rootWindow.close();
  });
})();