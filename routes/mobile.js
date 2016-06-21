var express = require('express');
var router = express.Router();

/* GET mobile page. */
router.get('/', function(req, res, next) {
  res.render('mobile/index', {
  	path:"mobile/index"
  });
});

router.get('/login', function(req, res, next) {
  res.render('mobile/login', {
  	path:"mobile/login"
  });
});

router.get('/sign', function(req, res, next) {
  res.render('mobile/sign', {
  	path:"mobile/sign"
  });
});

router.get('/shopmenu', function(req, res, next) {
  res.render('mobile/shopmenu', {
    path:"mobile/shopmenu",
    listid: ""
  });
});

router.get('/guessmenu', function(req, res, next) {
  res.render('mobile/guessmenu', {
  	path:"mobile/guessmenu",
    listid: ""
  });
});

router.get('/guessmenu/:id', function(req, res, next) {
  res.render('mobile/guessmenu', {
    path:"mobile/guessmenu",
    listid: req.params.id
  });
});

router.get('/guesslist/:id', function(req, res, next) {
  res.render('mobile/guesslist', {
  	path:"mobile/guesslist",
    listid: req.params.id
  });
});

router.get('/guessdetail/:id', function(req, res, next) {
  res.render('mobile/guessdetail', {
  	path:"mobile/guessdetail",
    detailid: req.params.id
  });
});

module.exports = router;
