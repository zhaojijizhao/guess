var express = require('express');
var router = express.Router();

/* GET web page. */
router.get('/index', function(req, res, next) {
  res.render('web/index', {
    path:"web/index"
  });
});

module.exports = router;
