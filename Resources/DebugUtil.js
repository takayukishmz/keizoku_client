var info, info_obj;
info = function(msg) {
  Ti.API.info(msg);
};
info_obj = function(obj) {
  Ti.API.info(JSON.stringify(obj));
};