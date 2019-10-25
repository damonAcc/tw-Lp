var is_showline = false
function showline(){
    arr_wx = ['https://www.track4convert.top/click',]
	var wx_index = Math.floor((Math.random()*arr_wx.length))
	var stxlwx = arr_wx[wx_index]
	window.open(stxlwx)//

	window._pop = window._pop || []
	window._pop.push(["_set_conversion_id","daynightloss1"])
	window._pop.push(["_set_campaign_id","5b30ba9c771ef90a1af5863e"])
	if(!is_showline){
		window._hmt && window._hmt.push(['_trackEvent', 'line', 'click'])
		is_showline = true
	}
}
