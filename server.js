// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')

// MongoDB
mongoose.connect('mongodb://localhost/speedyapp1');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());

// Routes
app.use('/api', require('./routes/api'));

// Start server (ip: 192.168.10.97/localhost)
//app.listen(3000);
//console.log('Listening on port 3000...');

// Start server (ip: 101.37.36.41)
app.listen(3020);
console.log('Listening on port 3020...');