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
    win.setRightNavButton(actInd);
    actInd.show();
    API.callAPI('GET', 'countUpResult', params, function(json) {
      var newWindow, point;
      actInd.hide();
      tt.UI.setRightButton(tt.execCountUp);
      if (json.success) {
        point = json.point;
        info('success');
        newWindow = Ti.UI.createWindow({
          title: 'congratulations!',
          backgroundColor: '#fff',
          url: '../../controller/checkin/GetPoint.js',
          data: point,
          barColor: Const.BARCOLOR
        });
        Ti.App.nav.open(newWindow, {
          animated: true
        });
      } else {
        info('false');
      }
    });
  };
})();