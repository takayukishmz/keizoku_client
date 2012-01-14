var tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('Common_module.js');
(function() {
  tt.UI.loadTimeline = function() {
    var data, header, header_text, i, photo, point_box, point_num, point_text, row_middle, row_top, section_middle, section_top, series_box, series_num, series_text, star, star_box, star_num, star_text, support_box, support_text, username;
    data = [];
    row_top = Titanium.UI.createTableViewRow(styles.base_profile);
    section_top = Ti.UI.createTableViewSection();
    section_top.add(row_top);
    photo = Ti.UI.createView(STYLE.PHOTO);
    photo.backgroundImage = '../images/user.png';
    username = Ti.UI.createLabel(styles.username);
    support_box = Ti.UI.createView(styles.support_box);
    support_text = Ti.UI.createLabel(styles.support_text);
    support_box.add(support_text);
    star_box = Ti.UI.createView(styles.count_box);
    star_num = Ti.UI.createLabel(styles.count_num);
    star_text = Ti.UI.createLabel(styles.count_text);
    star_text.text = 'stars';
    star_box.add(star_num);
    star_box.add(star_text);
    point_box = Ti.UI.createView(styles.point_box);
    point_num = Ti.UI.createLabel(styles.count_num);
    point_text = Ti.UI.createLabel(styles.count_text);
    point_text.text = 'point';
    point_box.add(point_num);
    point_box.add(point_text);
    series_box = Ti.UI.createView(styles.series_box);
    series_num = Ti.UI.createLabel(styles.count_num);
    series_text = Ti.UI.createLabel(styles.count_text);
    series_text.text = '連続記録';
    series_box.add(series_num);
    series_box.add(series_text);
    row_top.add(photo);
    row_top.add(username);
    row_top.add(support_box);
    row_top.add(star_box);
    row_top.add(point_box);
    row_top.add(series_box);
    row_middle = Titanium.UI.createTableViewRow(styles.base_black);
    row_middle.hasChild = true;
    section_middle = Ti.UI.createTableViewSection();
    section_middle.add(row_middle);
    header = Ti.UI.createView(styles.header);
    header_text = Ti.UI.createLabel(styles.header_text);
    header.add(header_text);
    section_middle.headerView = header;
    star_num = 3;
    for (i = 0; 0 <= star_num ? i <= star_num : i >= star_num; 0 <= star_num ? i++ : i--) {
      info('star:' + i);
      star = Titanium.UI.createImageView(STYLE.BIGSTAR);
      star.left = S.MARGIN + S.ICON * i;
      star.top = S.MARGIN * 2;
      row_middle.add(star);
    }
    data.push(section_top);
    data.push(section_middle);
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
  tt.module.rowEventController = function(e) {
    info('rowEventController start');
    info(JSON.stringify(e));
    switch (e.source.clickName) {
      case 'top':
        info('top');
        break;
      case 'middle':
        info('middle');
        Titanium.UI.currentTab.open(tt.UI.gotoProjectTL('hoge'));
        break;
      default:
        info('else');
    }
  };
  tt.UI.gotoProjectTL = function(report) {
    var newWindow;
    Ti.API.info("open ProjectTLWindow");
    newWindow = Ti.UI.createWindow({
      backgroundColor: '#fff',
      url: '../controller/ProjectTL.js'
    });
    return newWindow;
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
})();