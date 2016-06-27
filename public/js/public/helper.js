define(['jquery','underscore','backbone'],
	function($,_,Backbone){
		function getEnv(){
			var host = location.host,
				env = 'dev';
			if(host.indexOf('localhost')>-1){
				env = 'dev';
			}
			if(host.search(/\w+\.\w+\.\w+\.\w+/)>-1){
				env = 'test';
			}
			if(host.indexOf(":")<0){
				env = 'product';
			}
			return env;
		}
		function getBaseUrl(str){
			switch(getEnv()){
				default:
				case 'dev':
					return '/mock/' + str;
					break;
				case 'test':
					return '/mock/' + str;
					break;
				case 'product':
					return 'http://120.25.84.140:3000/mock/' + str;
					break;
			}
		}
		function getQueryParam(){
			var query = location.search.substr(1),
				queryArr = query.split("&"),
				result = {};
			for(var i in queryArr){
				result[queryArr[i].split('=')[0]]=queryArr[i].split('=')[1];
			}
			return result;
		}
		var helper={
			islogin:function(){
				return !!localStorage.getItem("guessuser");
			},
			setlogin:function(data){
				localStorage.setItem("guessuser",JSON.stringify(data));
			},
			getlogin:function(){
				return JSON.parse(localStorage.getItem("guessuser"));
			},
			deletelogin:function(){
				localStorage.removeItem("guessuser");
			},
			initPage:function(){
				$(".link-block .link-btn").on('click',function(e){
					$(this).siblings('.links')
						.add($(this).siblings('.mask'))
						.addClass('on');
				});
				$(".link-block .mask").on('click',function(e){
					$(this).add($(this).siblings('.links'))
						.removeClass('on');
				});
			},	
			baseUrl:getBaseUrl,
			queryParam:getQueryParam
		};
		return helper;
});