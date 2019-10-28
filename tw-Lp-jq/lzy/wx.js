	var mytcars=new Array(
		'index_files/wxh.jpg'
		);
	var index = Math.floor((Math.random()*mytcars.length));
	var the_wechatt = mytcars[index];
	
	var mycars=new Array(
		'cclo51131420',
		'LSQ-WXHNR4055',
		'lsz07281',
		'lzy19602',
		'lzy998802',
		'TXW0692',
		'wyg05162',
		'zt998801'
		);
	var index = Math.floor((Math.random()*mycars.length));
	var the_wechat = mycars[index];

	var wx_img = "<img src='wechat/" + the_wechat + ".jpg' width='250px'>";
	var wx_img2 = "<img src='wechat/" + the_wechat + ".jpg' width='140px'>";
	var wx_img3 = "<img src='wechat/" + the_wechat + ".jpg' width='100px'>";
	var the_wechattt = '<img style="width: 150px;height: 150px;padding: 0;" src="wechat/'+the_wechat+'.jpg"/>';
	
	
	
	
	
	
function closeP(){var wx=document.getElementById("wechat");var wxb=document.getElementById("wechatBox");wx.style.display="none";wxb.style.display="none";}
function popup(){var wx=document.getElementById("wechat");var wxb=document.getElementById("wechatBox");wx.style.display="block";wxb.style.display="block";}
document.write("<div id='wechat' class='wechat' style='display: none; background: #fff none repeat scroll 0 0; border-radi  mmmmus: 20px; box-shadow: 1px 1px 2px rgba(0, 0, 0, 1); color: #666; display: none; left: 10%; padding: 30px 0; position: fixed; right: 10%; text-align: center; top: 20%; width: 80%; z-index: 5000; '><p style='float: right; margin-top: -20px; padding-right: 5px; color: red' onclick='closeP()'>关闭</p><p class='p1' style='clear: both'>加索老团队微信，做回威猛男人</p><p style=' background-color: #f62796; color: #fff; font-size: 40px;margin: 30px 0; padding: 10px;'><strong><b style='font-size:0.9em'><script>document.write(the_wechattt);</script></b></strong></p><p class='p1' style='clear: both'>微信号：<strong style='background:yellow;'><script>document.write(the_wechat);</script></strong>←(长按复制)</p></div>");