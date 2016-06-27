require(['../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper','text!/template/detail.html'],
		function($,_,Backbone,Helper,detailTemplate){
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
						url = Helper.baseUrl('guessdetail/' + listId);
					}else{
						url = Helper.baseUrl("guessdetail/guessdetail");
					}
					$.ajax({
						url: url,
						type: 'get',
						dataType: 'json',
						success:function(data){
							self.$el.html(_.template(detailTemplate)(data));
							self.bindEvents.apply(self);
						},
						error:function(error){
							alert('网络不畅，请刷新重试');
						}
					});
				},
				bindEvents:function(el){
					this.$el.find("#J_area li").on('click',function(e){
						$(this).siblings().removeClass('on');
						$(this).addClass('on');
					});
					this.$el.find("#J_minus").on('click',function(e){
						var pit = $(this).siblings("#pit");
						if(pit.val()<=1){
							pit.val(1);
						}else{
							pit.val(parseInt(pit.val())-1);
						}
					});
					this.$el.find("#J_add").on('click',function(e){
						var pit = $(this).siblings("#pit");
						pit.val(parseInt(pit.val())+1);
					});
					this.$el.find("#J_submit").on('click',function(e){
						e.preventDefault();
						// var data = {
						// 	option: $("#J_area li.on").attr("data-id"),
						// 	pit: parseInt($("#pit").val());
						// }
						// $.ajax({
						// 	url: Helper.baseUrl + 'guessdetail/' + $("detailid").val(),
						// 	type: 'post',
						//  data: data,
						// 	dataType: 'json',
						// 	success:function(data){
						// 		alert('竞猜成功！');
						// 		location.href='./guessmenu.html';
						// 	},
						// 	error:function(error){
						// 		alert('网络不畅，请刷新重试');
						// 	}
						// });
						alert('竞猜成功！');
						location.href='./guessmenu.html';
					});
				}
			});
			var page = new view();
			page.render();
	});
});