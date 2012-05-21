var API;
Titanium.include('lib/ServerConst.js');
Titanium.include('lib/ActivityIndicator.js');
API = {};
API = (function() {
  function API() {}
  API.prototype.costructor = function() {};
  API.prototype.callAPI = function(method, requestType, params, callbackOnLoad) {
    var url, xhr;
    indicator.show();
    Ti.API.info('API:method=' + method);
    Ti.API.info('API:requestType=' + requestType);
    Ti.API.info('API:params=' + JSON.stringify(params));
    Ti.API.info('API:callback=' + callbackOnLoad);
    if (Titanium.Network.online === false) {
      alert('オフラインなのでデータを取得できません。');
      return;
    }
    url = Request.getRequestURL(requestType, params);
    xhr = Titanium.Network.createHTTPClient();
    xhr.open(method, url, false);
    xhr.onload = function() {
      var json;
      info('onload');
      indicator.hide();
      json = 　JSON.parse(xhr.responseText);
      Ti.API.info('requestType:' + requestType + '\n' + 'responseText:' + xhr.responseText);
      callbackOnLoad(json);
    };
    xhr.onerror = function(error) {
      indicator.hide();
      alert(TEXT.ERROR_MESSAGE.SERVER);
      info_obj(error);
    };
    if (method === 'POST') {
      xhr.send(params);
    } else {
      xhr.send();
    }
  };
  API.prototype.filter = function(json) {
    Ti.API.info('hoge');
    if (json.profile) {
      Ti.App.user = json.profile;
    }
  };
  return API;
})();
exports.API = API;