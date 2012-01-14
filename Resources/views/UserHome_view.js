var tt;
tt = {};
tt.UI = {};
Ti.App.Selected_pjt = {};
(function() {
  tt.UI.loadView = function(win, styles) {};
  tt.UI.loadListView = function() {
    Ti.API.info('tt.UI.tableView');
    API.callAPI('GET', 'userProjects', {
      user_id: Ti.App.user_id
    }, function(json) {
      var i, projects, _ref;
      projects = json.projects;
      tt.UI.tableView.data = [];
      Ti.API.info(projects.length + ':' + tt.UI.tableView.data.length);
      for (i = 0, _ref = projects.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        Ti.API.info(i);
        tt.UI.tableView.appendRow(tt.UI.UserProjects(projects[i], styles));
        Ti.API.info('done' + +tt.UI.tableView.data.length);
      }
      Ti.API.info('after loop' + tt.UI.tableView.data.length);
    });
  };
  tt.UI.UserProjects = function(project, styles) {
    var icon, info, row, title;
    Ti.API.info(JSON.stringify(project));
    row = Titanium.UI.createTableViewRow();
    row.hasChild = true;
    row.height = styles.row_height;
    title = Titanium.UI.createLabel(styles.title);
    title.text = project.pjt_name;
    info = Titanium.UI.createLabel(styles.info);
    info.text = project.pjt_info;
    icon = Titanium.UI.createImageView(styles.icon);
    icon.image = 'images/user.png';
    row.project = project;
    row.add(title);
    row.add(info);
    row.add(icon);
    row.addEventListener('click', function(e) {
      var thisProject;
      Ti.API.info('click row');
      thisProject = e.rowData.project;
      Titanium.UI.currentTab.open(tt.UI.createCheckinView(thisProject));
    });
    return row;
  };
  tt.UI.createCheckinView = function(project) {
    var newWindow;
    Ti.API.info("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff',
      url: 'CheckIn.js'
    });
    Ti.App.Selected_pjt = project;
    Ti.App.CheckInWindow = newWindow;
    return newWindow;
  };
  tt.UI.getUserData = function(user_id) {
    API.callAPI('GET', 'getUserData', {
      user_id: user_id
    }, function(json) {
      var profile;
      info('callback getUserData');
      info(JSON.stringify(json));
      info(JSON.stringify(point_cnt));
      profile = json.profile;
      user.text = profile.nickname;
      point_cnt.text = profile.point_total;
      day_cnt.text = profile.count_total;
      support_cnt.text = profile.bonus_total;
    });
  };
})();
Titanium.include('Common_view.js');