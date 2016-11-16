define(['jquery','underscore','vue','helper','text!/html/cms/user.html'],
  function($,_,Vue,Helper,userTpl){
    var user = Vue.extend({
      template: userTpl,
      data: function(){
        return {
          tablehead: [
            {
              name:"用户编号",
              key:"num",
              edit: false
            },
            {
              name:"用户手机",
              key:"cell",
              edit: true
            },
            {
              name:"用户密码",
              key:"psw",
              edit: true
            },
            {
              name:"用户总点数",
              key:"point",
              edit: false
            },
            {
              name:"用户创建时间",
              key:"created_at",
              edit: false
            }
          ],
          userlist: []
        }
      },
      methods: {
        getList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/user',
            info: '获取用户列表',
            success:function(result){
              _this.userlist = result;
            }
          });
        },
        change: function(user){
          user.edit = true;
          this.$set(user);
        },
        save: function(user){
          var _this = this;
          if(user._id){
            Helper.ajax({
              url:'/manage/user/change',
              info: '修改用户',
              data: {user},
              success:function(result){
                user.edit = false;
              }
            });
          }else{
            _this.add(user);
          }
        },
        remove: function(user){
          var _this = this;
          Helper.ajax({
            url:'/manage/user/remove',
            info: '删除用户',
            data: {user},
            success:function(result){
              _this.getList();
            }
          });
        },
        add: function(user){
          var _this = this;
          Helper.ajax({
            url:'/manage/user/add',
            info: '添加用户',
            data: {user},
            success:function(result){
              _this.getList();
            }
          });
        },
        newitem: function(){
          this.userlist.push({edit:true});
        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return user;
});
