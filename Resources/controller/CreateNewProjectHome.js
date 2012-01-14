var tab1, tabGroup, win1;
Titanium.UI.setBackgroundColor('#000');
tabGroup = Titanium.UI.createTabGroup();
Titanium.include('../Util.js');
info(' new tab');
/* tabs */
win1 = Titanium.UI.createWindow({
  title: 'create New',
  backgroundColor: '#fff'
});
tab1 = Titanium.UI.createTab({
  icon: '../images/KS_nav_ui.png',
  title: 'create New',
  window: win1
});
tabGroup.addTab(tab1);
info(' new tab');
tabGroup.open();