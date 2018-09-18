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
/**get Selection page */
router.get('/selection',function(req,res,next){
  //get data for that user here:
  var uid=req.query.user;
  //verify idToken
  firebase.auth().verifyIdToken(uid)
  .then(function(decodedToken) {
    let uid = decodedToken.uid;
    //get the user
    firebase.auth().getUser(uid).then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
    //now render selection page:
    res.render('selection',{'userData':userRecord.toJSON()});
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });
    // ...
  }).catch(function(error) {
    // Handle error
    console.log('user not logged in')
    //redirect to login:
    res.redirect('/login');
  });


})


module.exports = router;
