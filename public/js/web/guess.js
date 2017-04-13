define(['jquery','underscore','vue','helper','text!/html/web/guess.html'],
  function($,_,Vue,Helper,guessTpl){
    var guess = Vue.extend({
      template: guessTpl,
      data: function(){
        return {
        }
      },
      methods: {
        // getList: function(){
        //   var self = this;
        //   var ajaxdata = {};
        //   if(self.id){
        //     ajaxdata.id = self.id;
        //   }
        //   Helper.ajax({
        //     url:'/api/guessdetail',
        //     info: '获取详情',
        //     data: ajaxdata,
        //     success:function(result){
        //       self.detail = result[0] || {};
        //     }
        //   });
        // }
      },
      mounted: function(){
        // this.getList();
      }
    });
    return guess;
});
