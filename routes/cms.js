var express = require('express');
var router = express.Router();

/* GET mobile page. */
router.get('/', function(req, res, next) {
  res.render('cms/index', {
    path:"cms/index"
  });
});

module.exports = router;
