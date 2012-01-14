var tt;
tt = {};
tt.UI = {};
tt.param = {};
(function() {
  tt.UI.execCreateNewProject = function() {
    var params;
    params = {
      user_id: Ti.App.user_id,
      pjt_name: title.value,
      pjt_info: intro.value,
      category: category.value
    };
    Ti.API.info('start exec button');
    API.callAPI('GET', 'createNewProject', params, function(json) {
      var is_success;
      is_success = json.is_success;
      if (join_success && new_success) {
        alert('success');
        Ti.App.CheckInWindow.close();
        win.close();
      } else {
        alert('false');
      }
    });
  };
})();
Titanium.include('Common_view.js');