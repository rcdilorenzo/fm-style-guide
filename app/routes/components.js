var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:component', function(req, res, next) {
  res.render('components/' + req.params.component);
});

module.exports = router;
