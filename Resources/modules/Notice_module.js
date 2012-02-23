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
    var icon, message, row;
    info('createNoticeRow');
    row = Titanium.UI.createTableViewRow(styles.row);
    row.notice = notice;
    icon = Ti.UI.createImageView(styles.icon);
    icon.image = notice.picture_url;
    message = Titanium.UI.createLabel(styles.title);
    notice.type = "support";
    switch (notice.type) {
      case 'share':
        message.text = setTT('NOTICE_SHARE', [notice.nickname, notice.point]);
        message.clickName = 'share';
        row.clickName = 'share';
        break;
      case 'support':
        message.text = setTT('NOTICE_SUPPORT', [notice.nickname]);
        message.clickName = 'support';
        row.clickName = 'support';
        break;
      case 'like':
        message.text = 'like your puroject:' + notice.pjt_name;
    }
    row.add(icon);
    row.add(message);
    return row;
  };
  tt.module.rowEventController = function(e) {
    switch (e.source.clickName) {
      case 'share':
        info('share');
        break;
      case 'support':
        info('support');
        Titanium.UI.currentTab.open(tt.UI.createUserHomeView(e.rowData.notice.user_id, {
          animated: true
        }));
        break;
      default:
        info('else');
    }
  };
})();