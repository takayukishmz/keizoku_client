var tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadListView = function() {
    var params;
    params = {
      user_id: Ti.App.user_id
    };
    return API.callAPI('GET', 'getNotice', params, function(json) {
      var i, notices, _ref;
      info('success getNoticeAPI');
      notices = json.notices;
      tt.UI.tableView.data = [];
      for (i = 0, _ref = notices.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        info(i);
        tt.UI.tableView.appendRow(tt.UI.createNoticeRow(notices[i]));
      }
    });
  };
  tt.UI.createNoticeRow = function(notice) {
    var icon, row, text, user;
    info('createNoticeRow');
    row = Titanium.UI.createTableViewRow(styles.row);
    row.notice = notice;
    icon = Ti.UI.createView(styles.icon);
    user = Titanium.UI.createLabel(styles.user);
    text = Titanium.UI.createLabel(styles.text);
    user.text = notice.nickname + ' san ga';
    switch (notice.type) {
      case 'share':
        info('share');
        text.text = 'done \'' + notice.pjt_name + '\' ' + notice.count + ' times and share ' + notice.point / 4 + ' points';
        break;
      case 'support':
        info('support');
        text.text = 'became your supporter';
        break;
      case 'like':
        info('like');
        text.text = 'like your puroject:' + notice.pjt_name;
    }
    row.add(icon);
    row.add(user);
    row.add(text);
    return row;
  };
})();