define(['jquery','underscore','vue','helper','text!/html/h5/login.html'],
  function($,_,Vue,Helper,loginTpl){
    var login = Vue.extend({
      template: loginTpl,
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
    return login;
});
