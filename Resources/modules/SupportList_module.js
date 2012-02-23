var tt;
tt = {};
tt.UI = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadListView = function(listType, user_id) {
    var apiName;
    apiName = "";
    switch (listType) {
      case TEXT.LISTTYPE.SUPPORTER:
        apiName = 'getSupporters';
        break;
      case TEXT.LISTTYPE.SUPPORTING:
        apiName = 'getSupportings';
        break;
      default:
        info('Invalid listType');
        return;
    }
    API.callAPI('GET', apiName, {
      user_id: user_id
    }, function(json) {
      var data, i, list, _ref;
      list = json.list;
      data = [];
      for (i = 0, _ref = list.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        info('create row:' + i);
        data.push(tt.UI.createListView(list[i], styles));
      }
      tt.UI.tableView.data = data;
    });
  };
  tt.UI.createListView = function(userData) {
    var icon, row, section, user;
    info_obj(userData);
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(styles.row);
    row.user = userData;
    icon = Ti.UI.createView(styles.icon);
    user = Titanium.UI.createLabel(styles.title);
    user.text = userData.nickname;
    row.add(icon);
    row.add(user);
    section.add(row);
    return section;
  };
})();