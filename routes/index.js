var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:verse', function(req, res, next) {
  res.render('index', { title: 'Verse 1' });
});

module.exports = router;
