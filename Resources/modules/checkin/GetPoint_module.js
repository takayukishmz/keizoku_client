var tt;
tt = {};
tt.UI = {};
tt.module = {};
Titanium.include('../Common_module.js');
(function() {
  tt.UI.pointDetail = function() {
    var box, i, point_label, point_num;
    for (i = 0; i <= 2; i++) {
      info('tt.UI.pointDetail');
      info(i);
      box = Titanium.UI.createView(styles.point_box);
      box.top = S.MARGIN + (S.MARGIN + S.ICON) * i;
      point_label = Titanium.UI.createLabel(styles.point_label);
      point_num = Titanium.UI.createLabel(styles.point_num);
      box.add(point_label);
      box.add(point_num);
      point.add(box);
    }
  };
  return tt.UI.SupporterList = function() {
    info('call api and get supporter list');
  };
})();