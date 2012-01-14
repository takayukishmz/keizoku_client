var App;
App = {};
(function() {
  App.UI = {};
  App.UI.tableView = Titanium.UI.createTableView();
  App.UI.setRefreshButton = function(callback) {
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
  App.UI.UserProjects = function(project, styles) {
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
      Titanium.UI.currentTab.open(App.UI.createCheckinView(thisProject));
    });
    Ti.API.info('click row');
    return row;
  };
  App.UI.createCheckinView = function(project) {
    var checkin, checkin_text, newWindow, view;
    Ti.API.info("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff'
    });
    view = Titanium.UI.createView({
      top: 0,
      height: 480,
      backgroundColor: '#ccc'
    });
    view.add(Titanium.UI.createImageView({
      image: 'images/user.png',
      top: 8,
      left: 8,
      width: 72,
      height: 72
    }));
    view.add(Titanium.UI.createLabel({
      top: 8,
      left: 88,
      right: 8,
      height: 20,
      text: project.pjt_name
    }));
    view.add(Titanium.UI.createView({
      top: 36,
      left: 88,
      height: 44,
      right: 8,
      backgroundColor: '#fff'
    }));
    view.add(Titanium.UI.createLabel({
      top: 36,
      left: 88,
      right: 8,
      height: 44,
      text: project.result,
      textAlign: 'center',
      font: {
        fontSize: 20
      }
    }));
    checkin = Ti.UI.createView({
      backgroundColor: '#3DFF00',
      borderRadius: 4,
      top: 88,
      left: 8,
      width: 300,
      height: 40,
      clickName: 'button'
    });
    checkin_text = Ti.UI.createLabel({
      color: '#222',
      font: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Arial'
      },
      left: 0,
      top: 0,
      height: 40,
      width: 300,
      clickName: 'rank',
      text: 'check in ',
      textAlign: 'center'
    });
    checkin.addEventListener('click', function(e) {
      return Ti.API.info('click checkin');
    });
    checkin.add(checkin_text);
    view.add(checkin);
    newWindow.add(view);
    return newWindow;
  };
})();