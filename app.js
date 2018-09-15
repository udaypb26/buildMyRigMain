var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDB=require('mongodb');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var admin = require('firebase-admin');
// db instance connection
// require("./config/db");
//firebase config
var serviceAccount = require("./config/buildmyrig-f7ca2-firebase-adminsdk-9b8ci-2b9fb40f62.json");

var firebaseAdmin=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://buildmyrig-f7ca2.firebaseio.com"
});
global.firebase=firebaseAdmin;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
