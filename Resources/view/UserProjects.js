var UserProjects;
UserProjects = {};
UserProjects = {
  createListView: function(project) {
    var row;
    Ti.API.info(JSON.stringify(project));
    row = Titanium.UI.createTableViewRow();
    row.height = 100;
    row.add(Titanium.UI.createLabel({
      text: '1',
      top: 8,
      left: 64,
      height: 16
    }));
    row.add(Titanium.UI.createLabel({
      text: project.pjt_info,
      top: 32,
      left: 64,
      width: '256',
      height: 'auto'
    }));
    row.add(Titanium.UI.createImageView({
      image: 'images/user.png',
      top: 8,
      left: 8,
      width: '48',
      height: '48'
    }));
    row.project = project;
    row.addEventListener('click', function(e) {
      var thisProject;
      Ti.API.info('click row');
      thisProject = e.rowData.project;
      return Titanium.UI.currentTab.open(CheckinVew.createView(thisProject));
    });
    Ti.API.info('click row');
    return row;
  }
};