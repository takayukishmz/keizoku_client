var rightBotton, tt;
tt = {};
tt.UI = {};
tt.module = {};
rightBotton = {};
(function() {
  tt.UI.loadTimeline = function() {
    var params;
    info(info(Ti.App.timeline_type));
    rightBotton.title = Ti.App.timeline_type;
    if (!Ti.App.timeline_type) {
      rightBotton.title = 'new';
    }
    params = {
      user_id: Ti.App.user_id,
      opt: Ti.App.timeline_type
    };
    API.callAPI('GET', 'getTimeline', params, function(json) {
      var data, i, reports, _ref;
      Ti.App.timeline_type = '';
      info('get api response');
      reports = json.reports;
      data = [];
      if (reports[0]) {
        for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          info('create row:' + i);
          data.push(tt.UI.createListView(reports[i], styles));
        }
      }
      tt.UI.tableView.data = data;
    });
  };
  tt.UI.createListView = function(report, styles) {
    var developer, icon, row, section, support, support_button, support_button_text, support_text, title;
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(styles.row);
    developer = Ti.UI.createLabel(styles.developer);
    icon = Ti.UI.createView(styles.icon);
    title = Ti.UI.createLabel(styles.title);
    row.report = report;
    developer.text = report.pjt_name;
    title.text = report.report_text;
    support = Ti.UI.createView(styles.support);
    support_text = Ti.UI.createLabel(styles.support_text);
    support.add(support_text);
    row.add(title);
    row.add(developer);
    row.add(icon);
    row.add(support);
    if (Ti.App.user_id !== Number(report.user_id)) {
      info('create support button');
      support_button = Ti.UI.createLabel(styles.support_button);
      support_button_text = Ti.UI.createLabel(styles.support_button_text);
      support_button.add(support_button_text);
      row.add(support_button);
    }
    section.add(row);
    return section;
  };
  tt.UI.gotoReportDetail = function(report) {
    var newWindow;
    Ti.API.info("open projectHomeWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/ReportDetail.js'
    });
    Ti.App.Selected_Report = report;
    return newWindow;
  };
  tt.UI.setCreateNewButton = function(callback) {
    var activity;
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
        title: 'new'
      });
      win.rightNavButton = rightBotton;
      rightBotton.addEventListener('click', function() {
        info('click right button:' + callback);
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
  tt.module.rowEventController = function(e) {
    var pjt_id, user_id;
    info('tt.module.rowEventController start');
    info(JSON.stringify(e));
    switch (e.source.clickName) {
      case 'support_text':
        user_id = e.rowData.report.user_id;
        pjt_id = e.rowData.report.pjt_id;
        info('support ckicked id=' + e.rowData.user_id);
        tt.execSupport(e, pjt_id, user_id);
        break;
      case 'icon':
        info('icon ckicked');
        break;
      default:
        info('window open');
        Titanium.UI.currentTab.open(tt.UI.gotoReportDetail(e.rowData.report));
    }
  };
})();
Titanium.include('Common_module.js');