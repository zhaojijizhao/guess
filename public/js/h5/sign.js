define(['jquery','underscore','vue','helper','text!/html/h5/sign.html'],
  function($,_,Vue,Helper,signTpl){
    var sign = Vue.extend({
      template: signTpl,
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
    return sign;
});
