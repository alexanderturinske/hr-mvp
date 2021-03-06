var express = require('express');
var bodyParser = require('body-parser');
// require router to handle requests to /
var animalRouter = require('./routers/animalRouter');
var userRouter = require('./routers/userRouter');
// require database
var db = require('./database');

// create server
var app = express();

// setup port
var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('App is running on port ' + port);
});

// use middleware to made collecting the data from requests easier
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve up static files
app.use(express.static(__dirname + '/../client'));

// use router for requests to '/'
app.use('/api/animals', animalRouter);
app.use('/api/users', userRouter);