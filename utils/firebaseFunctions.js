var express = require('express');
var router = express.Router();




var firebaseFunctions={
    //cheks user idtoken and returns user info
    checkIdToken:function(idToken,res,callback){
        //check token
        firebase.auth().verifyIdToken(idToken)
        .then(function(decodedToken) {
          let uid = decodedToken.uid;
          //get the user
          firebase.auth().getUser(uid).then(function(userRecord) {
          console.log("Successfully fetched user data:", userRecord.toJSON());
          //now render selection page:
          callback(null,userRecord.toJSON());
        })
        .catch(function(error) {
          console.log("Error fetching user data:", error);
          callback(error);
        });
          // ...
        }).catch(function(error) {
          // Handle error
          console.log('user not logged in')
          //redirect to login:
          res.redirect('/login');
        });

    }
}


module.exports=firebaseFunctions;