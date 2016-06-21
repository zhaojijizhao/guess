var database = require('./database');

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
	created_at:{
		type:Date,
		default: Date.now
	},
	receive:[String]
});