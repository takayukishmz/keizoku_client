var tt;
tt = {};
tt.UI = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadListView = function(user_id) {
    API.callAPI('GET', 'getTimeline', {
      user_id: user_id
    }, function(json) {
      var data, i, list, _ref;
      list = json.reports;
      data = [];
      for (i = 0, _ref = list.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        info('create row:' + i);
        data.push(tt.UI.createListView(list[i], styles));
      }
      tt.UI.tableView.data = data;
    });
  };
  tt.UI.createListView = function(report) {
    var icon, row, section, text, user;
    info_obj(report);
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(styles.row);
    row.report = report;
    icon = Ti.UI.createView(styles.icon);
    user = Titanium.UI.createLabel(styles.user);
    text = Titanium.UI.createLabel(styles.text);
    user.text = report.nickname;
    row.add(icon);
    row.add(user);
    section.add(row);
    return section;
  };
})();