require(['/js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper'],
		function($,_,Backbone,Helper){
			var view = Backbone.View.extend({
				initialize:function(){
				},
				el:$("#main"),
				events:{
				},
				render:function(){
				}
			});
			var page = new view();
			page.render();
	});
});