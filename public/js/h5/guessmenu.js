define(['jquery','underscore','vue','helper','text!/html/h5/guessmenu.html'],
  function($,_,Vue,Helper,guessmenuTpl){
    var guessMenu = Vue.extend({
      template: guessmenuTpl,
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
    return guessMenu;
});
