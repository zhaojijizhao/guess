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
				vertify:function(){
					if(!/^1[0-9]{10}$/.test($("#cell").val())){
						alert("请填写正确的手机号");
						return false;
					}
					if(!/^[0-9a-zA-Z]{4,8}$/.test($("#password").val()) || $("#password").val()!=$("#confirm").val()){
						alert("密码为4-8位数字字母，且确认密码和密码相同");
						return false;
					}
					return true;
				},
				btn:function(e){
					e.preventDefault();
					if(!this.vertify()){
						return false;
					}
					var url = Helper.baseUrl('sign');
					$.ajax({
						url: url,
						type: 'post',
						data: {
							cell:$("#cell").val(),
							password:$('#password').val()
						},
						dataType: 'json',
						success:function(data){
							alert('注册成功');
							location.href="./guessmenu.html";
						},
						error:function(error){
							alert('注册失败，请重试');
						}
					});
				}
			});
			var page = new view();
			page.render();
	});
});