var tt;
tt = {};
tt.UI = {};
tt.module = {};
tt.param = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.execCreateNewProject = function() {
    var params;
    info(term.labels[term.index]);
    info(time.labels[time.index]);
    if (tt.validateText(title.value, 0, 20, 'not_null')) {
      info('OK / title validated');
    } else {
      alert('invalid title text');
    }
    if (!Ti.App.Category_flg || !category.text) {
      alert('select category');
    }
    params = {
      user_id: Ti.App.user_id,
      pjt_name: title.value,
      pjt_info: intro.value,
      category: category.text
    };
    Ti.API.info('start exec button');
    API.callAPI('GET', 'createNewProject', params, function(json) {
      if (json.join_success && json.new_success) {
        alert('success');
        rootWindow.close();
      } else {
        alert('false');
      }
    });
  };
  tt.module.rowEventController = function(e) {
    var newWindow;
    info('tt.module.rowEventController start');
    info(JSON.stringify(e));
    newWindow = Ti.UI.createWindow({
      title: 'Select Category',
      backgroundColor: '#fff',
      url: '../controller/SelectCategory.js'
    });
    Ti.App.nav.open(newWindow, {
      animated: true
    });
  };
  return;
})();