define(['jquery','underscore','vue','helper','text!/html/cms/guess.html'],
  function($,_,Vue,Helper,guessTpl){
    var guess = Vue.extend({
      template: guessTpl,
      data: function(){
        return {
          tablehead: [
            {
              name:"竞猜编号",
              key:"num",
              edit: false
            },
            {
              name:"竞猜用户编号",
              key:"unum",
              edit: false
            },
            {
              name:"竞猜题目编号",
              key:"qnum",
              edit: false
            },
            {
              name:"竞猜题目",
              key:"question",
              edit: false
            },
            {
              name:"单次点数",
              key:"perpoint",
              edit: false
            },
            {
              name:"选择次数",
              key:"pit",
              edit: false
            },
            {
              name:"选项编号",
              key:"optionid",
              edit: false
            },
            {
              name:"选项名称",
              key:"option",
              edit: false
            },
            {
              name:"竞猜创建时间",
              key:"created_at",
              edit: false
            }
          ],
          guesslist: []
        }
      },
      methods: {
        getList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/guess',
            info: '获取竞猜列表',
            success:function(result){
              _this.guesslist = result;
            }
          });
        },
        change: function(guess){
          guess.edit = true;
          this.$set(guess);
        },
        save: function(guess){
          var _this = this;
          if(guess._id){
            Helper.ajax({
              url:'/manage/guess/change',
              info: '修改竞猜',
              data: {guess},
              success:function(result){
                guess.edit = false;
              }
            });
          }else{
            _this.add(guess);
          }
        },
        remove: function(guess){
          var _this = this;
          Helper.ajax({
            url:'/manage/guess/remove',
            info: '删除竞猜',
            data: {guess},
            success:function(result){
              _this.getList();
            }
          });
        },
        add: function(guess){
          var _this = this;
          Helper.ajax({
            url:'/manage/guess/add',
            info: '添加竞猜',
            data: {guess},
            success:function(result){
              _this.getList();
            }
          });
        },
        newitem: function(){
          this.guesslist.push({edit:true});
        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return guess;
});
