var tt;
tt = {};
tt.UI = {};
tt.module = {};
(function() {
  tt.UI.pointDetail = function() {
    var box, i, point_label, point_num, _results;
    _results = [];
    for (i = 0; i <= 2; i++) {
      info('tt.UI.pointDetail');
      info(i);
      box = Titanium.UI.createView(styles.point_box);
      box.top = S.MARGIN + (S.MARGIN + S.ICON) * i;
      point_label = Titanium.UI.createLabel(styles.point_label);
      point_num = Titanium.UI.createLabel(styles.point_num);
      box.add(point_label);
      box.add(point_num);
      _results.push(point.add(box));
    }
    return _results;
  };
  return tt.UI.SupporterList = function() {
    return info('call api and get supporter list');
  };
})();
Titanium.include('Common_module.js');