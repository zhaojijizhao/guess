define(['jquery','underscore','vue','helper','text!/html/h5/guessdetail.html'],
  function($,_,Vue,Helper,guessdetailTpl){
    var guessDetail = Vue.extend({
      template: guessdetailTpl,
      data: function(){
        return {
        }
      },
      methods: {
        getList: function(){

        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return guessDetail;
});
