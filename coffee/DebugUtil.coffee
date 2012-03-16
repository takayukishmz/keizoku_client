info = (msg) ->
	Ti.API.info msg
	return

log = ( key , msg) ->
	Ti.API.info "< "+key+" >" + msg
	return

info_obj =(obj) ->
	Ti.API.info JSON.stringify obj
	return
