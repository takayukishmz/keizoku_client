var tt;
tt = {};
tt.UI = {};
tt.module = {};
(function() {
  tt.UI.timeline = function(report, styles) {
    var comment, comment_text, counter, counter_text, icon, row, support, support_button, support_button_text, support_text, title, title_text, user;
    Ti.API.info('tt.UI.timeline:param=' + JSON.stringify(report));
    row = Titanium.UI.createTableViewRow();
    row.height = styles.row_height;
    row.hasChild = true;
    row.report = report;
    user = Ti.UI.createLabel(styles.user);
    user.text = report.nickname + ' done ';
    row.add(user);
    counter = Ti.UI.createView(styles.counter);
    counter_text = Ti.UI.createLabel(styles.counter_text);
    counter_text.text = '1\nday!';
    row.add(counter);
    counter.add(counter_text);
    title = Ti.UI.createView(styles.title);
    title_text = Ti.UI.createLabel(styles.title_text);
    title_text.text = report.pjt_name;
    title.add(title_text);
    row.add(title);
    icon = Ti.UI.createView(styles.icon);
    row.add(icon);
    comment = Ti.UI.createView(styles.comment);
    comment_text = Ti.UI.createLabel(styles.comment_text);
    comment_text.text = report.report_text;
    comment.add(comment_text);
    row.add(comment);
    support = Ti.UI.createView(styles.support);
    support_text = Ti.UI.createLabel(styles.support_text);
    support.add(support_text);
    row.add(support);
    if (Ti.App.user_id !== Number(report.user_id)) {
      info('create support button');
      support_button = Ti.UI.createLabel(styles.support_button);
      support_button_text = Ti.UI.createLabel(styles.support_button_text);
      support_button.add(support_button_text);
      row.add(support_button);
    }
    return row;
  };
  tt.UI.gotoProjectHome = function(pjt_id) {
    var newWindow;
    Ti.API.info("open projectHomeWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: 'ProjectHome.js'
    });
    Ti.App.ProjectHomeWindow = newWindow;
    return newWindow;
  };
  tt.UI.setCreateNewButton = function(callback) {
    var activity, rightBotton;
    if (Titanium.Platform.osname === 'android') {
      activity = Titanium.Android.currentActivity;
      if (activity) {
        return acitivity.onCreateOptionsMenu = function(e) {
          var menu, menuItem;
          menu = e.menu;
          menuItem = menu.add({
            title: "再読込"
          });
          menuItem.setIcon("dark_refresh.png");
          return menuItem.addEventListener("click", function(e) {
            return callback;
          });
        };
      }
    } else {
      rightBotton = Titanium.UI.createButton({
        title: 'create new'
      });
      win.rightNavButton = rightBotton;
      rightBotton.addEventListener('click', function() {
        alert('click right button:' + callback);
        callback();
      });
    }
  };
  tt.execSupport = function(e, pjt_id, user_id) {
    var params;
    params = {
      user_id: Ti.App.user_id,
      pjt_id: pjt_id,
      support_user_id: user_id
    };
    API.callAPI('GET', 'execSupport', params, function(json) {
      var support_success;
      support_success = 1;
      if (support_success) {
        alert('success');
        info(JSON.stringify(e));
        info(tt.UI.tableView.Data[0]);
        e.source.text = done;
        e.rowData.text = done;
      } else {
        alert('false');
      }
    });
  };
})();
Titanium.include('Common_view.js');