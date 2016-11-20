define(['jquery','underscore','vue','helper','text!/html/h5/guesslist.html'],
  function($,_,Vue,Helper,guesslistTpl){
    var guessList = Vue.extend({
      template: guesslistTpl,
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
    return guessList;
});
