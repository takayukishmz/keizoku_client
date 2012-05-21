var setup_flg, tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('Common_module.js');
info_obj(Ti.App);
setup_flg = true;
(function() {
  tt.UI.loadTimeline = function() {
    var data, i, icon, params, user_num;
    data = [];
    user_num = 2;
    for (i = 0; 0 <= user_num ? i <= user_num : i >= user_num; 0 <= user_num ? i++ : i--) {
      info('user:' + i);
      icon = Ti.UI.createView(STYLE.PHOTO);
      icon.left = S.MARGIN * (1 + i) + S.ICON * i;
      icon.backgroundImage = '../images/user.png';
      row_top.add(icon);
    }
    photo.backgroundImage = '../images/user.png';
    pjt_name.text = Ti.App.Selected_Report_timeline.pjt_name;
    data.push(section_top);
    data.push(section_middle);
    params = {
      user_id: Ti.App.Selected_Report_timeline.user_id,
      pjt_id: Ti.App.Selected_Report_timeline.pjt_id
    };
    return API.callAPI('GET', 'getTimeline', params, function(json) {
      var header, header_text, i, reports, _ref;
      info('get api response');
      reports = json.reports;
      tt.UI.tableView.data = data;
      if (setup_flg) {
        info('setup');
        setup_flg = false;
        for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          info('create row:' + i);
          data.push(tt.UI.createListView(reports[i], styles));
        }
        header = Ti.UI.createView(styles.header);
        header_text = Ti.UI.createLabel(styles.header_text);
        header.add(header_text);
        data[2].headerView = header;
        tt.UI.tableView.data = data;
      } else {
        tt.UI.updateRow(reports);
      }
    });
  };
  tt.UI.updateRow = function() {
    var i, _ref;
    for (i = 2, _ref = tt.UI.tableView.data.length - 1; 2 <= _ref ? i <= _ref : i >= _ref; 2 <= _ref ? i++ : i--) {
      info('create row:' + i);
      tt.UI.tableView.updateRow(i, tt.UI.createListView(reports[i - 2], styles));
    }
  };
  tt.UI.createListView = function(report, styles) {
    var check_cnt, counter, counter_text, i, message, miniicon, row, section, star, star_num;
    info('createlistview');
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(styles.row);
    info_obj(report);
    row.report = report;
    counter = Ti.UI.createView(styles.counter);
    counter_text = Ti.UI.createLabel(styles.counter_text);
    counter_text.text = report.count;
    counter.add(counter_text);
    check_cnt = report.count % 3;
    info('check_cnt' + check_cnt);
    switch (check_cnt) {
      case 0:
        star_num = 2;
        break;
      case 1:
        star_num = 0;
        break;
      case 2:
        star_num = 1;
        break;
      default:
        info('check_cnt error');
        star_num = 0;
    }
    for (i = 0; 0 <= star_num ? i <= star_num : i >= star_num; 0 <= star_num ? i++ : i--) {
      info('star:' + i);
      star = Titanium.UI.createImageView(styles.star);
      star.left = S.MARGIN + (S.ICON / 3) * i;
      row.add(star);
    }
    miniicon = Ti.UI.createView(STYLE.MINIPHOTO);
    miniicon.left = S.ICON + S.MARGIN * 2;
    miniicon.top = S.ICON * 2 / 3 + S.MARGIN * 2;
    miniicon.backgroundImage = '../images/user.png';
    message = Ti.UI.createLabel(styles.message);
    message.text = report.report_text;
    row.add(counter);
    row.add(message);
    row.add(miniicon);
    section.add(row);
    return section;
  };
  tt.module.rowEventController = function(e) {
    info('rowEventController start');
    info(JSON.stringify(e));
    switch (e.source.clickName) {
      case 'top':
        info('top');
        break;
      case 'middle':
        info('middle');
        Titanium.UI.currentTab.open(tt.UI.gotoProjectTL(Ti.App.Selected_Report_timeline));
        break;
      default:
        info('else');
        Titanium.UI.currentTab.open(tt.UI.gotoUserDetail(e.rowData.report));
    }
  };
  tt.UI.gotoProjectTL = function(report) {
    var newWindow;
    Ti.API.info("open ProjectTLWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/ProjectTL.js'
    });
    Ti.App.Selected_Report_reportdetail = report;
    return newWindow;
  };
})();