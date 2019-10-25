window.addEventListener('load',function(){
  var tracker_domain = "https://m5.nutra555.com/"
  !function(){
      var d_now = new Date()
      var timezone = 0-d_now.getTimezoneOffset()/60
      var userLanguage = navigator.language
      var platform = navigator.platform
      var hm = document.createElement("script")
      hm.src = tracker_domain+"just_a_tracking?views=true"+"&timezone="+timezone+"&userLanguage="+userLanguage+"&platform="+platform
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.appendChild(hm, s)
  }()
})