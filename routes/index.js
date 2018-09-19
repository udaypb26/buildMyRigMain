var express = require('express');
var router = express.Router();
var firebaseFunctions=require('../utils/firebaseFunctions');
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
/**get Selection page */
router.get('/selection',function(req,res,next){
  //get data for that user here:
  var uid=req.query.user;
  //verify idToken
  firebaseFunctions.checkIdToken(uid,res,function(err,user){
    if(err){
      //return error
      res.status(500).json({
        status:'failed',
        error:err
      });
      return;
    }
    //render selection page
     res.render('selection',{'userData':user});
    
  
  })
  
});
/**get Selection page */
router.get('/build',function(req,res,next){
  //get data for that user here:
  var uid=req.query.user;
  //verify idToken
  firebaseFunctions.checkIdToken(uid,res,function(err,user){
    if(err){
      //return error
      res.status(500).json({
        status:'failed',
        error:err
      });
      return;
    }
    //render selection page
     res.render('build',{'userData':user});
    
  
  })
  
});





module.exports = router;
