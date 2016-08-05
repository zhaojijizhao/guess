require(['../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper'],
		function($,_,Backbone,Helper){
			var view = Backbone.View.extend({
				initialize:function(){
					Helper.initPage();
				},
				el:$("#main"),
				events:{
					'click button':'btn'
				},
				render:function(){
				},
				btn:function(e){
					e.preventDefault();
					var url = Helper.baseUrl('login?phone=' + $("#cell").val() +'&password='+$('#password').val());
					$.ajax({
						url: url,
						type: 'post',
						// data: {
						// 	phone:$("#cell").val(),
						// 	password:$('#password').val()
						// },
						dataType: 'json',
						success:function(data){
							if(data && data.code == 200){
								data.user.token = data.token;
								Helper.setlogin(data.user);
								alert('登录成功');
								location.href="./guessmenu.html";
							}else{
								alert('登陆失败'+(data.msg?data.msg:''));
							}
						},
						error:function(error){
							alert('登录失败，请重试');
						}
					});
				}
			});
			var page = new view();
			page.render();
	});
});