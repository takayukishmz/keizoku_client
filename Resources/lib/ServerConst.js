var Request;
Request = {};
Request = {
  HOST: {
    sakuraVPS: 'http://49.212.124.181:5000/',
    localhost: 'http://192.168.56.101:5000/'
  },
  getRequestURL: function(api, params) {
    var url;
    url = this.HOST.sakuraVPS + api + "?" + this.parseParams(params);
    Ti.API.info('HOST:' + url);
    return url;
  },
  parseParams: function(params) {
    var key, query, queryString, value;
    query = '';
    for (key in params) {
      value = params[key];
      query += key + '=' + value + '&';
    }
    Ti.API.info('QUERY' + query);
    return queryString = query;
  }
};