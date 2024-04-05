var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { isLogin: true });
  // res.render('users', { name: 'Hello World' });
  // res.send('respond with a resource');
});

module.exports = router;
