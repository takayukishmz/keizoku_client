var tt;
alert('main');
tt = {};
(function() {
  tt.UI = {};
  tt.UI.tableView = Titanium.UI.createTableView();
  tt.UI.setRefreshButton = function(callback) {
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
        systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
      });
      win.rightNavButton = rightBotton;
      return rightBotton.addEventListener('click', function() {
        return callback;
      });
    }
  };
  tt.UI.UserProjects = function(project, styles) {
    var icon, info, row, title;
    Ti.API.info(JSON.stringify(project));
    row = Titanium.UI.createTableViewRow();
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
    newWindow.project = project;
    newWindow.open();
    return newWindow;
  };
})();
Titanium.include('../CheckIn.js');
Titanium.include('UserHome_view.js');