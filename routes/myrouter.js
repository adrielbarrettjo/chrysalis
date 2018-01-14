var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //gives the homepage
  // res.send('respond with a resource');
  res.render('landing', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/transactions', function(req, res, next) {
  res.send('respond with a resource');
});

//
// exports default router;
module.exports = router;