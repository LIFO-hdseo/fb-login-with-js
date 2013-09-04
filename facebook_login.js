//페이스북 로그인
<script type="text/html">
	<div id="fb-root"></div>
</script>
<script>
	//페이스북 비동기 초기화 완료된 시점.
	window.fbAsyncInit = function() {
		FB.init({
			appId 		: 'YOUR_APP_ID',
			channelUrl 	: '//WWW.MY_DOMAIN.COM/channel.html',
			status 		: true,
			cookie		: true,
			xfbml		: true

		});

		//추가적인 초기화 코드는 여기에 입력함.
	}

	//비동기 SDK로드 
	(function(d) {
		var js. id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));
</script>