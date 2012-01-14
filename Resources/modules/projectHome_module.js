var tt;
tt = {};
tt.UI = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadTimeline = function() {
    var base, data, header, header_text, i, reports, section, _ref, _ref2;
    data = [];
    base = [];
    base[0] = Titanium.UI.createTableViewRow(styles.base_top);
    base[1] = Titanium.UI.createTableViewRow(styles.base_middle);
    for (i = 0, _ref = base.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      info(i);
      section = Ti.UI.createTableViewSection();
      section.add(base[i]);
      data.push(section);
    }
    info('get api response');
    reports = [1, 2, 3];
    for (i = 0, _ref2 = reports.length - 1; 0 <= _ref2 ? i <= _ref2 : i >= _ref2; 0 <= _ref2 ? i++ : i--) {
      info('create row:' + i);
      data.push(tt.UI.createListView(reports[i], styles));
    }
    header = Ti.UI.createView({
      height: 20,
      text: 'Timeline',
      backgroundColor: '#ddd'
    });
    header_text = Ti.UI.createLabel({
      height: 20,
      text: 'Timeline'
    });
    header.add(header_text);
    data[2].headerView = header;
    tt.UI.tableView.data = data;
  };
  tt.UI.createListView = function(report, styles) {
    var check_cnt, counter, counter_text, i, message, row, section, star, star_num;
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
    message = Ti.UI.createLabel(styles.message);
    message.text = 'name' + ' done his project:' + '[projectTitle]' + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#########";
    row.add(counter);
    row.add(message);
    section.add(row);
    return section;
  };
})();