var database = require('../database');

//用户信息
var user = new database.Schema({
  name:{
    type:String,
    validate:/.+/
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
    validate:/.+/
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