require(['../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper','text!/template/personlist.html'],
		function($,_,Backbone,Helper,listListTemplate){
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
						url = Helper.baseUrl('personlist/' + listId);
					}else{
						url = Helper.baseUrl("personlist/personlist");
					}
					$.ajax({
						url: url,
						type: 'get',
						dataType:'json',
						success:function(data){
							self.$el.html(_.template(listListTemplate)(data));
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