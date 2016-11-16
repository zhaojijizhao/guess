var database = require('./database');
var userSchema = require('./schema/user');
var managerSchema = require('./schema/manager');
var questionSchema = require('./schema/question');
var guessSchema = require('./schema/guess');

var user = userSchema.user;
var manager = managerSchema.manager;
var question = questionSchema.question;
var firsttype = questionSchema.firsttype;
var secondtype = questionSchema.secondtype;
var thirdtype = questionSchema.thirdtype;
var guess = guessSchema.guess;

var userModel = database.mongoose.model('user',user);
var managerModel = database.mongoose.model('manager',manager);
var questionModel = database.mongoose.model('question',question);
var firsttypeModel = database.mongoose.model('firsttype',firsttype);
var secondtypeModel = database.mongoose.model('secondtype',secondtype);
var thirdtypeModel = database.mongoose.model('thirdtype',thirdtype);
var guessModel = database.mongoose.model('guess',guess);

var collection = {
	user: userModel,
	manager: managerModel,
	question: questionModel,
  firsttype: firsttypeModel,
  secondtype: secondtypeModel,
  thirdtype: thirdtypeModel,
	guess: guessModel
}

module.exports = collection;