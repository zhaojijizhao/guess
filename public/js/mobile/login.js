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
					var url = Helper.baseUrl('login');
					$.ajax({
						url: url,
						type: 'post',
						data: {
							cell:$("#cell").val(),
							password:$('#password').val()
						},
						dataType: 'json',
						success:function(data){
							alert('登录成功');
							location.href="./guessmenu.html";
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