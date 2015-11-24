var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'));
app.use('/ex2', express.static(__dirname + '/ex2'));

var server = app.listen(3000);