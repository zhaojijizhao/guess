define(['jquery','underscore','vue','helper','text!/html/cms/question.html'],
  function($,_,Vue,Helper,questionTpl){
    var question = Vue.extend({
      template: questionTpl,
      data: function(){
        return {
          tablehead: [
            {
              name:"题目编号",
              key:"num",
              edit: false
            },
            {
              name:"一级分类",
              key:"firsttypenum",
              edit: false
            },
            {
              name:"二级分类",
              key:"secondtypenum",
              edit: false
            },
            {
              name:"三级分类",
              key:"thirdtypenum",
              edit: true
            },
            {
              name:"题目名称",
              key:"name",
              edit: true
            },
            {
              name:"轮次",
              key:"round",
              edit: true
            },
            {
              name:"截止日期",
              key:"date",
              edit: true
            },
            {
              name:"单次点数",
              key:"perpoint",
              edit: false
            },
            {
              name:"总人次",
              key:"times",
              edit: false
            },
            {
              name:"总点数",
              key:"totalpoint",
              edit: false
            },
            {
              name:"状态",
              key:"state",
              edit: true
            },
            {
              name:"介绍信息",
              key:"intro",
              edit: true
            },
            {
              name:"最近信息",
              key:"recent",
              edit: true
            },
            {
              name:"问题",
              key:"question",
              edit: true
            },
            {
              name:"选项",
              key:"options",
              edit: true
            },
            {
              name:"题目创建时间",
              key:"created_at",
              edit: false
            }
          ],
          questionlist: []
        }
      },
      methods: {
        getList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/question',
            info: '获取题目列表',
            success:function(result){
              _this.questionlist = result;
            }
          });
        },
        change: function(question){
          question.edit = true;
          this.$set(question);
        },
        save: function(question){
          var _this = this;
          if(question._id){
            Helper.ajax({
              url:'/manage/question/change',
              info: '修改题目',
              data: {question},
              success:function(result){
                question.edit = false;
              }
            });
          }else{
            _this.add(question);
          }
        },
        remove: function(question){
          var _this = this;
          Helper.ajax({
            url:'/manage/question/remove',
            info: '删除题目',
            data: {question},
            success:function(result){
              _this.getList();
            }
          });
        },
        add: function(question){
          var _this = this;
          Helper.ajax({
            url:'/manage/question/add',
            info: '添加题目',
            data: {question},
            success:function(result){
              _this.getList();
            }
          });
        },
        newitem: function(){
          this.questionlist.push({edit:true});
        }
      },
      mounted: function(){
        this.getList();
      }
    });
    return question;
});
