require(['../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper','text!/template/menulist.html'],
		function($,_,Backbone,Helper,menuListTemplate){
			var view = Backbone.View.extend({
				initialize:function(){
					Helper.initPage();
				},
				el:$("#main"),
				events:{
				},
				render:function(){
					var self = this;
					var url = "";
					var listId = Helper.queryParam().id;
					if(listId){
						url = Helper.baseUrl('shopmenu/' + listId);
					}else{
						url = Helper.baseUrl("shopmenu");
					}
					$.ajax({
						url: url,
						type: 'get',
						dataType: 'json',
						success:function(data){
							self.$el.html(_.template(menuListTemplate)(data));
						},
						error:function(error){
							alert('网络不畅，请刷新重试');
						}
					});
				}
			});
			var page = new view();
			page.render();
	});
});