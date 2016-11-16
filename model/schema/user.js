var database = require('../database');

//用户信息
var user = new database.Schema({
  num:{
    type:Number,
    validate:/.+/
  },
  name:{
    type:String
  },
  cell:{
    type:Number,
    validate:/.+/
  },
  psw:{
    type:String,
    validate:/.+/
  },
  point: {
    type:Number,
    validate:/.+/,
    default: 0
  },
  cookie: {
    type:String
  },
  guess: [String],
  created_at:{
    type:Date,
    default: Date.now
  }
});

var userSchema = {
  user:user
};

module.exports = userSchema;