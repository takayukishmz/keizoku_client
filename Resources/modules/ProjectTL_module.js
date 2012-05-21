var tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadTimeline = function() {
    var base, data, header, header_text, params, photo;
    data = [];
    base = [];
    photo = Ti.UI.createView(STYLE.BIGPHOTO);
    photo.backgroundImage = '../images/user.png';
    row_top.add(photo);
    data.push(section_top);
    info('test');
    info_obj(Ti.App.Selected_Report_reportdetail);
    params = {
      pjt_id: Ti.App.Selected_Report_reportdetail.pjt_id
    };
    API.callAPI('GET', 'getTimeline', params, function(json) {
      var i, reports, _ref, _results;
      info('get api response');
      reports = json.reports;
      _results = [];
      for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        info('create row:' + i);
        _results.push(data.push(tt.UI.createListView(reports[i], styles)));
      }
      return _results;
    });
    header = Ti.UI.createView(styles.header);
    header_text = Ti.UI.createLabel(styles.header_text);
    header.add(header_text);
    data[1].headerView = header;
    tt.UI.tableView.data = data;
  };
  tt.UI.createListView = function(report, styles) {
    var check_cnt, counter, counter_text, i, message, miniicon, row, section, star, star_num;
    info('createlistview');
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(styles.row);
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
  tt.UI.gotoUserDetail = function(report) {
    var newWindow;
    Ti.API.info("open UserDetailWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/UserDetail.js'
    });
    return newWindow;
  };
  tt.module.rowEventController = function(e) {
    var user_id;
    info('at projectTL');
    info('tt.module.rowEventController start');
    info(e.source.clickName);
    switch (e.source.clickName) {
      case 'timeline':
        info('click user report ');
        user_id = e.rowData.report.user_id;
        Titanium.UI.currentTab.open(tt.UI.gotoUserDetail(user_id));
        break;
      case 'icon':
        info('icon ckicked');
        break;
      default:
        info('window open');
    }
  };
})();