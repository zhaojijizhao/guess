define(['jquery','underscore','vue','helper','text!/html/cms/thirdtype.html'],
  function($,_,Vue,Helper,thirdtypeTpl){
    var thirdtype = Vue.extend({
      template: thirdtypeTpl,
      data: function(){
        return {
          tablehead: [
            {
              name:"三级分类编号",
              key:"num",
              edit: false
            },
            {
              name:"三级分类名称",
              key:"name",
              edit: true
            },
            {
              name:"所属一级分类",
              key:"firsttypenum",
              edit: false
            },
            {
              name:"所属二级分类",
              key:"secondtypenum",
              edit: true
            },
            {
              name:"三级分类创建时间",
              key:"created_at",
              edit: false
            }
          ],
          thirdtypelist: []
        }
      },
      methods: {
        getList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/thirdtype',
            info: '获取三级分类列表',
            success:function(result){
              _this.thirdtypelist = result;
            }
          });
        },
        change: function(thirdtype){
          thirdtype.edit = true;
          this.$set(thirdtype);
        },
        save: function(thirdtype){
          var _this = this;
          if(thirdtype._id){
            Helper.ajax({
              url:'/manage/thirdtype/change',
              info: '修改三级分类',
              data: {thirdtype},
              success:function(result){
                thirdtype.edit = false;
              }
            });
          }else{
            _this.add(thirdtype);
          }
        },
        remove: function(thirdtype){
          var _this = this;
          Helper.ajax({
            url:'/manage/thirdtype/remove',
            info: '删除三级分类',
            data: {thirdtype},
            success:function(result){
              _this.getList();
            }
          });
        },
        add: function(thirdtype){
          var _this = this;
          Helper.ajax({
            url:'/manage/thirdtype/add',
            info: '添加三级分类',
            data: {thirdtype},
            success:function(result){
              _this.getList();
            }
          });
        },
        newitem: function(){
          this.thirdtypelist.push({edit:true});
        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return thirdtype;
});
