var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Build my Rig!' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Build my Rig!' });
});


/*signup*/
router.post('/signup',function(req,res,next){
  var password=req.body.password;
  var username=req.body.username;
  var email=req.body.email;
  console.log('signup called');
  
 

});


module.exports = router;
