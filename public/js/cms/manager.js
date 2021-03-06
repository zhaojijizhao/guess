define(['jquery','underscore','vue','helper','text!/html/cms/manager.html'],
  function($,_,Vue,Helper,managerTpl){
    var manager = Vue.extend({
      template: managerTpl,
      data: function(){
        return {
          tablehead: [
            {
              name:"管理员编号",
              key:"num",
              edit: false
            },
            {
              name:"管理员姓名",
              key:"name",
              edit: true
            },
            {
              name:"管理员密码",
              key:"psw",
              edit: true
            },
            {
              name:"管理员级别",
              key:"level",
              edit: false
            },
            {
              name:"管理员创建时间",
              key:"created_at",
              edit: false,
              type: 'date'
            }
          ],
          managerlist: []
        }
      },
      methods: {
        getList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/manager',
            info: '获取管理员列表',
            success:function(result){
              _this.managerlist = result;
            }
          });
        },
        change: function(manager){
          manager.edit = true;
          this.$set(manager);
        },
        save: function(manager){
          var _this = this;
          if(manager._id){
            Helper.ajax({
              url:'/manage/manager/change',
              info: '修改管理员',
              data: {manager},
              success:function(result){
                _this.getList();
              }
            });
          }else{
            _this.add(manager);
          }
        },
        remove: function(manager){
          var _this = this;
          Helper.ajax({
            url:'/manage/manager/remove',
            info: '删除管理员',
            data: {manager},
            success:function(result){
              _this.getList();
            }
          });
        },
        add: function(manager){
          var _this = this;
          Helper.ajax({
            url:'/manage/manager/add',
            info: '添加管理员',
            data: {manager},
            success:function(result){
              _this.getList();
            }
          });
        },
        newitem: function(){
          this.managerlist.push({edit:true});
        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return manager;
});
