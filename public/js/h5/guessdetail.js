define(['jquery','underscore','vue','helper','text!/html/h5/guessdetail.html'],
  function($,_,Vue,Helper,guessdetailTpl){
    var guessDetail = Vue.extend({
      template: guessdetailTpl,
      data: function(){
        return {
          detail: {}
        }
      },
      methods: {
        getList: function(){
          var self = this;
          var ajaxdata = {};
          if(self.id){
            ajaxdata.id = self.id;
          }
          Helper.ajax({
            url:'/api/guessdetail',
            info: '获取详情',
            data: ajaxdata,
            success:function(result){
              self.detail = result[0] || {};
            }
          });
        },
        eventsinit: function(){
          $(document).find("#J_area li").on('click',function(e){
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
          });
          $(document).find("#J_minus").on('click',function(e){
            var pit = $(this).siblings("#pit");
            if(pit.val()<=1){
              pit.val(1);
            }else{
              pit.val(parseInt(pit.val())-1);
            }
          });
          $(document).find("#J_add").on('click',function(e){
            var pit = $(this).siblings("#pit");
            pit.val(parseInt(pit.val())+1);
          });
          $(document).find("#J_submit").on('click',function(e){
            e.preventDefault();
            // var token = Helper.getlogin() && Helper.getlogin().token;
            // if(!token){
            //   alert('请先登录');
            //   location.href='./login.html';
            //   return;
            // }
            var data = {
              id: $("#detailid").val(),
              option: $("#J_area li.on").attr("data-id"),
              pit: parseInt($("#pit").val()),
              // token: token
            };
            Helper.ajax({
              url:'/api/guess',
              info: '竞猜',
              data: data,
              success:function(result){
                alert('竞猜成功！');
              }
            });
          });
        }
      },
      mounted: function(){
        if(this.$route.params.id){
          this.id = this.$route.params.id;
        }
        this.getList();
        this.eventsinit();
      }
    });
    return guessDetail;
});
