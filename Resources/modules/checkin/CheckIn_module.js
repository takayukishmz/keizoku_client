var tt;
tt = {};
tt.UI = {};
tt.param = {};
Titanium.include('../Common_module.js');
Titanium.include('../../lib/Facebook.js');
Titanium.include('../../lib/Twitter.js');
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
      var newWindow, point;
      info('countUpResult json:' + JSON.stringify(json));
      point = json.point;
      if (json.success) {
        info('success');
        newWindow = Ti.UI.createWindow({
          title: 'congratulations!',
          backgroundColor: '#fff',
          url: '../../controller/checkin/GetPoint.js',
          data: point
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