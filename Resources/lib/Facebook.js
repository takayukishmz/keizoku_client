Ti.Facebook.appid = '203800316311425';
Ti.Facebook.permissions = ['publish_stream', 'manage_friendlists'];
tt.FB = {};
(function() {
  tt.FB.postWall = function(msg) {
    var requestData;
    info('start postWall');
    requestData = {
      access_token: Ti.Facebook.accessToken
    };
    if (Ti.App.dryrun) {
      info('dryrun share FB');
      info('message:' + msg);
      return;
    }
    Ti.Facebook.requestWithGraphPath('me/feed', requestData, "POST", function(e) {
      info('callback fb postWall');
      if (e.success) {
        info('post success.' + e.result);
      }
    });
  };
  tt.FB.getFriends = function(msg) {
    var requestData;
    info('start fb getFriends');
    info(Ti.Facebook.accessToken);
    requestData = {
      access_token: Ti.Facebook.accessToken
    };
    Ti.Facebook.requestWithGraphPath('me/friends', requestData, "GET", function(e) {
      info('callback fb getFriends');
      if (e.success) {
        info('post success.' + e.result);
      } else {
        return info('not success');
      }
    });
  };
  tt.FB.getProfile = function(callback) {
    var query;
    query = "SELECT uid, name, pic_square, status,email FROM user WHERE uid = me()";
    Ti.API.info('user id ' + Titanium.Facebook.uid);
    return Titanium.Facebook.request('fql.query', {
      query: query
    }, function(json) {
      if (!json.success) {
        if (r.error) {
          alert(r.error);
        } else {
          alert("call was unsuccessful");
        }
        return;
      }
      info_obj(json);
      return callback(json);
    });
  };
})();