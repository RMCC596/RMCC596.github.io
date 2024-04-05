var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { isLogin: true });
});

router.post('/users', function (req, res, next) {
  res.render('users', {  
    isLogged: true, 
    name: req.body.username 
  });
});

module.exports = router;
