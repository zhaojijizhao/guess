var express = require('express');
var router = express.Router();
var collection = require('../model/collection');
var utils = require('./utils');

/* manage listing. */

//管理员登录

//管理员搜索
router.post('/manager', function(req, res, next) {
  utils.search('manager', {}, function(result){
    res.json(result);
  }, res);
});

//管理员新增
router.post('/manager/add', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.search('manager', {}, function(managers){
    body.manager.num = utils.getnum(managers);
    utils.add('manager', body.manager, function(result){
      res.json({});
    }, res);
  }, res);
});

//管理员删除
router.post('/manager/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('manager', body.manager._id, function(result){
    res.json({});
  }, res);
});

//管理员修改
router.post('/manager/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('manager', body.manager._id, body.manager, function(result){
    res.json({});
  }, res);
});

//用户搜索
router.post('/user', function(req, res, next) {
  utils.search('user', {}, function(result){
    res.json(result);
  }, res);
});

//用户新增
router.post('/user/add', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.search('user', {}, function(users){
    var i = users.find((v, k) => {
      v.cell == body.cell
    });
    if(i > -1){
      res.json({msg:'电话号码已存在'}, 500);
    }
    body.user.num = utils.getnum(users);
    utils.add('user', body.user, function(result){
      res.json({});
    }, res);
  }, res);
});

//用户删除
router.post('/user/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('user', body.user._id, function(result){
    res.json({});
  }, res);
});

//用户修改
router.post('/user/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('user', body.user._id, body.user, function(result){
    res.json({});
  }, res);
});

//一级类型搜索
router.post('/firsttype', function(req, res, next) {
  utils.search('firsttype', {}, function(result){
    res.json(result);
  }, res);
});

//一级类型新增
router.post('/firsttype/add', function(req, res, next) {
  var body = utils.parsebody(req.body)
  utils.search('firsttype', {}, function(firsttypes){
    body.firsttype.num = utils.getnum(firsttypes);
    utils.add('firsttype', body.firsttype, function(result){
      res.json({});
    }, res);
  }, res);
});

//一级类型删除
router.post('/firsttype/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('firsttype', body.firsttype._id, function(result){
    res.json({});
  }, res);
});

//一级类型修改
router.post('/firsttype/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('firsttype', body.firsttype._id, body.firsttype, function(result){
    res.json({});
  }, res);
});

//二级类型搜索
router.post('/secondtype', function(req, res, next) {
  utils.search('secondtype', {}, function(result){
    res.json(result);
  }, res);
});

//二级类型新增
router.post('/secondtype/add', function(req, res, next) {
  var body = utils.parsebody(req.body)
  utils.search('secondtype', {}, function(secondtypes){
    body.secondtype.num = utils.getnum(secondtypes);
    utils.add('secondtype', body.secondtype, function(result){
      res.json({});
    }, res);
  }, res);
});

//二级类型删除
router.post('/secondtype/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('secondtype', body.secondtype._id, function(result){
    res.json({});
  }, res);
});

//二级类型修改
router.post('/secondtype/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('secondtype', body.secondtype._id, body.secondtype, function(result){
    res.json({});
  }, res);
});

//三级类型搜索
router.post('/thirdtype', function(req, res, next) {
  utils.search('thirdtype', {}, function(result){
    res.json(result);
  }, res);
});

//三级类型新增
router.post('/thirdtype/add', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.search('thirdtype', {}, function(thirdtypes){
    body.thirdtype.num = utils.getnum(thirdtypes);
    utils.add('thirdtype', body.thirdtype, function(result){
      res.json({result});
    }, res);
  }, res);
});

//三级类型删除
router.post('/thirdtype/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('thirdtype', body.thirdtype._id, function(result){
    res.json({});
  }, res);
});

//三级类型修改
router.post('/thirdtype/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('thirdtype', body.thirdtype._id, body.thirdtype, function(result){
    res.json({});
  }, res);
});

//问题类型搜索
router.post('/question', function(req, res, next) {
  utils.search('question', {}, function(result){
    res.json(result);
  }, res);
});

//问题类型新增
router.post('/question/add', function(req, res, next) {
  var body = utils.parsebody(req.body)
  utils.search('question', {}, function(questions){
    body.question.num = utils.getnum(questions);
    utils.add('question', body.question, function(result){
      res.json({});
    }, res);
  }, res);
});

//问题类型删除
router.post('/question/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('question', body.question._id, function(result){
    res.json({});
  }, res);
});

//问题类型修改
router.post('/question/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('question', body.question._id, body.question, function(result){
    res.json({});
  }, res);
});

//竞猜条目搜索
router.post('/guess', function(req, res, next) {
  utils.search('guess', {}, function(result){
    res.json(result);
  }, res);
});

//竞猜条目新增
router.post('/guess/add', function(req, res, next) {
  var body = utils.parsebody(req.body)
  utils.search('guess', {}, function(guesss){
    body.guess.num = utils.getnum(guesss);
    utils.add('guess', body.guess, function(result){
      res.json({});
    }, res);
  }, res);
});

//竞猜条目删除
router.post('/guess/remove', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.remove('guess', body.guess._id, function(result){
    res.json({});
  }, res);
});

//竞猜条目修改
router.post('/guess/change', function(req, res, next) {
  var body = utils.parsebody(req.body);
  utils.change('guess', body.guess._id, body.guess, function(result){
    res.json({});
  }, res);
});

module.exports = router;