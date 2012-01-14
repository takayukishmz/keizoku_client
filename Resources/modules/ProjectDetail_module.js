var tt;
tt = {};
tt.UI = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadTimeline = function() {
    var base, data, header, header_text, i, photo, pjt_name, reports, _ref;
    data = [];
    base = [];
    photo = Ti.UI.createView(STYLE.PHOTO);
    photo.backgroundImage = '../images/user.png';
    row_top.add(photo);
    pjt_name = Ti.UI.createLabel(styles.pjt_name);
    pjt_name.text = Ti.App.Selected_Report.pjt_name;
    row_top.add(pjt_name);
    data.push(section_top);
    info('get api response');
    reports = [1, 2, 3];
    for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      info('create row:' + i);
      data.push(tt.UI.createListView(reports[i], styles));
    }
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
    counter = Ti.UI.createView(styles.counter);
    counter_text = Ti.UI.createLabel(styles.counter_text);
    counter_text.text = '1';
    counter.add(counter_text);
    check_cnt = 5 % 3;
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
    message.text = 'name' + ' done his project:' + '[projectTitle]' + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#########";
    row.add(counter);
    row.add(message);
    row.add(miniicon);
    section.add(row);
    return section;
  };
})();