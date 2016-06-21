var express = require('express');
var router = express.Router();
var collection = require('../model/collection');

/* api listing. */

//user api
//用户登录
router.post('/login', function(req, res, next) {
	var name = req.body.user.name,
		psw = req.body.user.psw;
	collection.user.find({name:name,psw:psw},function(err,data){
			if(err){
				res.json(err,500);
			}else{
				if(data.length>0){
					res.json(data);
				}else{
					res.json(err,500);
				}
			}
		}
	);
});

//用户注册
router.post('/user', function(req, res, next) {
	var user = new collection.user(req.body.user);
	user.save(function(err){
		if(err){
			res.json(err,500);
		}else{
			res.json(user);
		}
	});
});

module.exports = router;
