var collection_all, tt;
tt = {};
tt.UI = {};
collection_all = 21;
Titanium.include('Common_module.js');
(function() {
  tt.UI.updateView = function(user_id, selected_user_id) {
    return API.callAPI('GET', 'getUserData', {
      user_id: user_id,
      selected_user_id: selected_user_id
    }, function(json) {
      if (json.isSupport && Number(user_id !== Number(selected_user_id))) {
        rightButton.title = setTT("SUPPORTING");
        user.isSupport = true;
      }
      tt.module.updateUserData(json);
    });
  };
  tt.module.SupportButton = function() {
    var params;
    params = {
      user_id: Ti.App.user_id,
      support_user_id: user.user_id
    };
    if (user.isSupport) {
      API.callAPI('GET', 'remove', params, function(json) {
        if (json.remove_success) {
          rightButton.title = setTT("SUPPORT");
          user.isSupport = false;
        }
        if (json.message) {
          alert(json.message);
          return;
        }
      });
    } else {
      API.callAPI('GET', 'execSupport', params, function(json) {
        if (json.support_success) {
          rightButton.title = setTT("SUPPORTING");
          user.isSupport = true;
        }
        if (json.message) {
          alert(json.message);
          return;
        }
      });
    }
  };
  tt.UI.createRecordListView = function(user_id) {
    var newWindow;
    Ti.API.info("createRecordListView");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: '../controller/UserRecordList.js',
      user_id: user_id,
      barColor: Const.BARCOLOR
    });
    Ti.App.CheckInWindow = newWindow;
    return newWindow;
  };
  tt.UI.createSuppotListView = function(listType, user_id) {
    var newWindow;
    Ti.API.info("createSupportListWindow");
    newWindow = Ti.UI.createWindow({
      title: listType,
      backgroundColor: '#fff',
      url: '../controller/SupportList.js',
      barColor: Const.BARCOLOR,
      data: {
        listType: listType,
        user_id: user_id
      }
    });
    return newWindow;
  };
})();