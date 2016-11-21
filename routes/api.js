var express = require('express');
var router = express.Router();
var collection = require('../model/collection');
var utils = require('./utils');

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

//竞猜主目录
router.post('/guessmenu', function(req, res, next) {
	utils.search('firsttype', {}, function(result){
    res.json(result);
  }, res);
});

//竞猜一级目录
router.post('/guessmenu/:id', function(req, res, next) {
	utils.search('firsttype', {firsttype}, function(result){
    res.json(result);
  }, res);
});

//竞猜二级目录
router.post('/guesslist/:id', function(req, res, next) {
});

//竞猜详情页接口
router.post('/guessdetail/:id', function(req, res, next) {
});

//竞猜接口
router.post('/guess/:id', function(req, res, next) {
});

//个人资料接口

module.exports = router;
