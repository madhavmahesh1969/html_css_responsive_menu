// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.use('/app',  express.static( path.join(__dirname, '/app')));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
