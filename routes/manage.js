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
  utils.add('manager', req.body.manager, function(){
    res.json({});
  }, res);
});

//管理员删除
router.post('/manager/remove', function(req, res, next) {
  utils.remove('manager', req.body.manager._id, function(result){
    res.json({});
  }, res);
});

//管理员修改
router.post('/manager/change', function(req, res, next) {
  utils.search('manager', req.body.manager._id, req.body.manager, function(result){
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
  utils.add('user', req.body.user, function(){
    res.json({});
  }, res);
});

//用户删除
router.post('/user/remove', function(req, res, next) {
  utils.remove('user', req.body.user._id, function(result){
    res.json({});
  }, res);
});

//用户修改
router.post('/user/change', function(req, res, next) {
  utils.search('user', req.body.user._id, req.body.user, function(result){
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
  utils.add('firsttype', req.body.firsttype, function(){
    res.json({});
  }, res);
});

//一级类型删除
router.post('/firsttype/remove', function(req, res, next) {
  utils.remove('firsttype', req.body.firsttype._id, function(result){
    res.json({});
  }, res);
});

//一级类型修改
router.post('/firsttype/change', function(req, res, next) {
  utils.search('firsttype', req.body.firsttype._id, req.body.firsttype, function(result){
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
  utils.add('secondtype', req.body.secondtype, function(){
    res.json({});
  }, res);
});

//二级类型删除
router.post('/secondtype/remove', function(req, res, next) {
  utils.remove('secondtype', req.body.secondtype._id, function(result){
    res.json({});
  }, res);
});

//二级类型修改
router.post('/secondtype/change', function(req, res, next) {
  utils.search('secondtype', req.body.secondtype._id, req.body.secondtype, function(result){
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
  utils.add('thirdtype', req.body.thirdtype, function(){
    res.json({});
  }, res);
});

//三级类型删除
router.post('/thirdtype/remove', function(req, res, next) {
  utils.remove('thirdtype', req.body.thirdtype._id, function(result){
    res.json({});
  }, res);
});

//三级类型修改
router.post('/thirdtype/change', function(req, res, next) {
  utils.search('thirdtype', req.body.thirdtype._id, req.body.thirdtype, function(result){
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
  utils.add('question', req.body.question, function(){
    res.json({});
  }, res);
});

//问题类型删除
router.post('/question/remove', function(req, res, next) {
  utils.remove('question', req.body.question._id, function(result){
    res.json({});
  }, res);
});

//问题类型修改
router.post('/question/change', function(req, res, next) {
  utils.search('question', req.body.question._id, req.body.question, function(result){
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
  utils.add('guess', req.body.guess, function(){
    res.json({});
  }, res);
});

//竞猜条目删除
router.post('/guess/remove', function(req, res, next) {
  utils.remove('guess', req.body.guess._id, function(result){
    res.json({});
  }, res);
});

//竞猜条目修改
router.post('/guess/change', function(req, res, next) {
  utils.search('guess', req.body.guess._id, req.body.guess, function(result){
    res.json({});
  }, res);
});

module.exports = router;
