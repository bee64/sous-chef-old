var express = require('express');
var app     = express();
var path    = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
var json = require('./app/config.json');
var PORT = json.PORT;

app.listen(PORT, function(){
	console.log('Server listening on port ' + PORT + " . . .");
});