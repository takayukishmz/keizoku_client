if Titanium.Platform.osname != 'android'
	path_lib = 'lib/'
else
	path_lib = ''

Ti.include("twitter_api.js");

Ti.App.twitterApi = new TwitterApi
	consumerKey:'gjIaSeyEHXC2R9jEEaUbQg',
	consumerSecret: 'f5cdvqzkK2VeDfQ8eFqcvDmmymZ0zb0P7lqqT391l0'


tt.tw ={}

do->
	tt.tw.testTweet  = () ->
		info 'testTweet'
		Ti.App.twitterApi.statuses_update
			onSuccess:(response) ->
				alert 'tweet success'
				info response
			onError:(error) ->
				Ti.API.error 'error'
			parameters:
				status:'test post test'
		return
	return
	

