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
            // {
            //   name:"一级分类",
            //   key:"firsttypenum",
            //   edit: false
            // },
            // {
            //   name:"二级分类",
            //   key:"secondtypenum",
            //   edit: false
            // },
            // {
            //   name:"三级分类",
            //   key:"thirdtypenum",
            //   edit: true
            // },
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
              edit: true,
              type: 'date'
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
            // {
            //   name:"介绍信息",
            //   key:"intro",
            //   edit: true
            // },
            // {
            //   name:"最近信息",
            //   key:"recent",
            //   edit: true
            // },
            {
              name:"问题",
              key:"question",
              edit: true
            },
            {
              name:"选项",
              key:"options",
              edit: true,
              type: 'list'
            },
            {
              name:"题目创建时间",
              key:"created_at",
              edit: false,
              type: 'date'
            }
          ],
          detailhead: [
            {
              name:"题目编号",
              key:"num",
              edit: false
            },
            {
              name:"一级分类",
              key:"firsttypenum",
              edit: true,
              type: 'select',
              option: 'firsttypelist',
            },
            {
              name:"二级分类",
              key:"secondtypenum",
              edit: true,
              type: 'select',
              option: 'secondtypelist',
              change: function(item, option){
                return item.firsttypenum == option.firsttypenum;
              }
            },
            {
              name:"三级分类",
              key:"thirdtypenum",
              edit: true,
              type: 'select',
              option: 'thirdtypelist',
              change: function(item, option){
                return item.secondtypenum == option.secondtypenum;
              }
            },
            {
              name:"题目名称",
              key:"name",
              edit: true
            },
            {
              name:"轮次",
              key:"round",
              edit: true,
              type: 'number'
            },
            {
              name:"截止日期",
              key:"date",
              edit: true,
              type: "date"
            },
            {
              name:"单次点数",
              key:"perpoint",
              edit: true,
              type: 'number'
            },
            {
              name:"总人次",
              key:"times",
              edit: false,
              type: 'number'
            },
            {
              name:"总点数",
              key:"totalpoint",
              edit: false,
              type: 'number'
            },
            {
              name:"状态",
              key:"state",
              edit: true
            },
            {
              name:"介绍信息",
              key:"intro",
              edit: true,
              type: 'area'
            },
            {
              name:"最近信息",
              key:"recent",
              edit: true,
              type: 'area'
            },
            {
              name:"问题",
              key:"question",
              edit: true
            },
            {
              name:"选项",
              key:"options",
              edit: true,
              type: 'list'
            },
            {
              name:"题目创建时间",
              key:"created_at",
              edit: false,
              type: 'date'
            }
          ],
          questionlist: [],
          questiondetail: {
            options:[]
          },
          options: {
            secondtypelist: [],
            firsttypelist: [],
            thirdtypelist: []
          },
          date: {
          },
          filter: {
            firsttype: null,
            secondtype: null,
            thirdtype: null
          }
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
        getOptionList: function(){
          var _this = this;
          Helper.ajax({
            url:'/manage/firsttype',
            info: '获取选项',
            success:function(result){
              _this.options.firsttypelist = result;
            }
          });
          Helper.ajax({
            url:'/manage/secondtype',
            info: '获取选项',
            success:function(result){
              _this.options.secondtypelist = result;
            }
          });
          Helper.ajax({
            url:'/manage/thirdtype',
            info: '获取选项',
            success:function(result){
              _this.options.thirdtypelist = result;
            }
          });
        },
        changedetail: function(){
          this.detailhead.push({});
          this.detailhead.pop({});
        },
        toDateStr: function(str,dateobj){
          let date = new Date(str);
          let year = date.getYear()+1900;
          let month = (date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1);
          let day = date.getDate()>9?date.getDate():'0'+date.getDate();
          let hour = date.getHours()>9?date.getHours():'0'+date.getHours();
          let minute = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
          let result = year+'-'+month+'-'+day+"T"+hour+':'+minute;
          dateobj = result;
          return result;
        },
        changetime: function(type){
          this.questiondetail[type] = new Date(this.date[type]);
        },
        isshowfiltersecond: function(option){
          return option.firsttypenum == this.filter.firsttype;
        },
        isshowfilterthird: function(option){
          return option.secondtypenum == this.filter.secondtype;
        },
        deleteanswer: function(obj, index){
          obj.splice(index,1);
        },
        addanswer: function(obj){
          obj.push('');
        },
        // change: function(question){
        //   question.edit = true;
        //   this.$set(question);
        // },
        detail: function(question) {
          this.questiondetail = question;
        },
        save: function(){
          var _this = this;
          if(_this.questiondetail._id){
            Helper.ajax({
              url:'/manage/question/change',
              info: '修改题目',
              data: {question:_this.questiondetail},
              success:function(result){
                _this.getList();
              }
            });
          }else{
            _this.add(_this.questiondetail);
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
          this.questiondetail={
            options:[],
            firsttypenum: this.filter.firsttype,
            secondtypenum: this.filter.secondtype,
            thirdtypenum: this.filter.thirdtype
          };
        }
      },
      mounted: function(){
        this.getList();
        this.getOptionList();
      }
    });
    return question;
});
