var path_lib;
if (Titanium.Platform.osname !== 'android') {
  path_lib = 'lib/';
} else {
  path_lib = '';
}
Ti.include("twitter_api.js");
Ti.App.twitterApi = new TwitterApi({
  consumerKey: 'gjIaSeyEHXC2R9jEEaUbQg',
  consumerSecret: 'f5cdvqzkK2VeDfQ8eFqcvDmmymZ0zb0P7lqqT391l0'
});
tt.tw = {};
(function() {
  tt.tw.testTweet = function() {
    info('testTweet');
    Ti.App.twitterApi.statuses_update({
      onSuccess: function(response) {
        alert('tweet success');
        return info(response);
      },
      onError: function(error) {
        return Ti.API.error('error');
      },
      parameters: {
        status: 'test post test'
      }
    });
  };
})();