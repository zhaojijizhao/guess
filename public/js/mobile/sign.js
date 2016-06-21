require(['/js/public/base.js'],function(Base){
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
					location.href="/mobile/guessmenu";
				}
			});
			var page = new view();
			page.render();
	});
});