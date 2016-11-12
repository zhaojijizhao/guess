var database = require('../database');

//一级分类
var firsttype = new database.Schema({
  num:{
    type:Number,
    validate:/.+/
  },
  name:{
    type:String,
    validate:/.+/
  },
  created_at:{
    type:Date,
    default: Date.now
  }
});

//二级分类
var secondtype = new database.Schema({
  num:{
    type:Number,
    validate:/.+/
  },
  firsttypenum:{
    type:Number,
    validate:/.+/
  },
  name:{
    type:String,
    validate:/.+/
  },
  created_at:{
    type:Date,
    default: Date.now
  }
});

//三级分类
var thirdtype = new database.Schema({
  num:{
    type:Number,
    validate:/.+/
  },
  firsttypenum:{
    type:Number,
    validate:/.+/
  },
  secondtypenum:{
    type:Number,
    validate:/.+/
  },
  name:{
    type:String,
    validate:/.+/
  },
  created_at:{
    type:Date,
    default: Date.now
  }
});

//题目信息
var question = new database.Schema({
  num:{
    type:String,
    validate:/.+/
  },
  firsttypenum:{
    type:Number,
    validate:/.+/
  },
  secondtypenum:{
    type:Number,
    validate:/.+/
  },
  thirdtypenum:{
    type:Number,
    validate:/.+/
  },
  name: {
    type:String,
    validation:/.+/
  },
  round: {
    type:Number,
    validation:/.+/
  },
  date: {
    type:Date,
    validation:/.+/
  },
  perpoint: {
    type:Number,
    validation:/.+/
  },
  times: {
    type:Number,
    validation:/.+/
  },
  totalpoint: {
    type:Number,
    validation:/.+/
  },
  state: {
    type:Number,
    validation:/.+/,
    default: 0
  },
  intro: {
    type:String,
    validation:/.+/
  },
  recent: {
    type:String,
    validation:/.+/
  },
  question: {
    type:String,
    validation:/.+/
  },
  options: [String],
  created_at:{
    type:Date,
    default: Date.now
  }
});

var questionSchema = {
  firsttype: firsttype,
  secondtype: secondtype,
  thirdtype: secondtype,
  question: question
};

module.exports = questionSchema;