var express = require('express');
var router = express.Router();

/* GET mobile page. */
router.get('/web', function(req, res, next) {
  res.render('web/index', {
    path:"web/index"
  });
});

module.exports = router;
