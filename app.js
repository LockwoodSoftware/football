var express = require('express');
var monk = require('monk')('localhost/geotest');
var logger = require('morgan');
var path = require('path');

var routes = require('./routes/index');


// Instantiate Express
var app = express();

// =================================================================================
// Configure Express
// =================================================================================
app.use( logger('combined') );
app.use( express.static( path.join( __dirname, 'vendor' )) );	// appear to be served from root
app.use( '/', routes );

// view engine setup
app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'jade' );


var server = app.listen( 3001, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log( 'App listening at http://%s:%s', host, port );
});

module.exports = app;
