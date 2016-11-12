var database = require('../database');

//管理员信息
var guess = new database.Schema({
  num: {
    type:String,
    validate:/.+/
  },
  unum: {
    type:Number,
    validate:/.+/
  },
  qnum:{
    type:Number,
    validate:/.+/
  },
  question:{
    type:String,
    validate:/.+/
  },
  perpoint:{
    type:Number,
    validate:/.+/
  },
  pit:{
    type:Number,
    validate:/.+/
  },
  optionid:{
    type:Number,
    validate:/.+/
  },
  option:{
    type:String,
    validate:/.+/
  },
  created_at:{
    type:Date,
    default: Date.now
  }
});

var guessSchema = {
  guess: guess
};

module.exports = guessSchema;