define(['jquery','underscore','vue','helper','text!/html/cms/layout.html'],
  function($,_,Vue,Helper,layoutTpl){
    var layout = Vue.extend({
      template: layoutTpl,
      data: function(){
        return {
          navlist: [
            {
              name:"管理员",
              link:"manager"
            },
            {
              name:"用户",
              link:"user"
            },
            {
              name:"一级分类",
              link:"firsttype"
            },
            {
              name:"二级分类",
              link:"secondtype"
            },
            {
              name:"三级分类",
              link:"thirdtype"
            },
            {
              name:"题目管理",
              link:"question"
            },
            {
              name:"竞猜管理",
              link:"guess"
            }
          ]
        }
      }
    });
    return layout;
});
