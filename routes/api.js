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
//竞猜一级目录
router.post('/guessmenu', function(req, res, next) {
	var body = utils.parsebody(req.body);
	if(body.id){
		utils.search('secondtype', {firsttypenum: body.id}, function(result){
	    res.json(result);
	  }, res);
	}else{
		utils.search('firsttype', {}, function(result){
	    res.json(result);
	  }, res);
	}
});

//竞猜二级目录
router.post('/guesslist', function(req, res, next) {
	var body = utils.parsebody(req.body);
	utils.search('thirdtype', {secondtypenum: body.id}, function(result){
    res.json(result);
  }, res);
});

//竞猜详情页接口
router.post('/guessdetail', function(req, res, next) {
	var body = utils.parsebody(req.body);
	utils.search('question', {num: body.id}, function(result){
    res.json(result);
  }, res);
});

//竞猜接口
router.post('/guess', function(req, res, next) {
	var body = utils.parsebody(req.body);
});

//个人资料接口

module.exports = router;
