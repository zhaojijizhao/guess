var express = require('express');
var router = express.Router();

/* GET h5 page. */
router.get('/', function(req, res, next) {
  res.render('h5/index', {
  	path:"h5/index"
  });
});

router.get('/login', function(req, res, next) {
  res.render('h5/login', {
  	path:"h5/login"
  });
});

router.get('/sign', function(req, res, next) {
  res.render('h5/sign', {
  	path:"h5/sign"
  });
});

router.get('/shopmenu', function(req, res, next) {
  res.render('h5/shopmenu', {
    path:"h5/shopmenu",
    listid: ""
  });
});

router.get('/guessmenu', function(req, res, next) {
  res.render('h5/guessmenu', {
  	path:"h5/guessmenu",
    listid: ""
  });
});

router.get('/guessmenu/:id', function(req, res, next) {
  res.render('h5/guessmenu', {
    path:"h5/guessmenu",
    listid: req.params.id
  });
});

router.get('/guesslist/:id', function(req, res, next) {
  res.render('h5/guesslist', {
  	path:"h5/guesslist",
    listid: req.params.id
  });
});

router.get('/guessdetail/:id', function(req, res, next) {
  res.render('h5/guessdetail', {
  	path:"h5/guessdetail",
    detailid: req.params.id
  });
});

module.exports = router;
