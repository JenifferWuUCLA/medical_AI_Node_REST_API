// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Patient = require('../models/patient');

// Routes
Patient.methods(['get', 'put', 'post', 'delete']);
Patient.register(router, '/patients');

// Return router
module.exports = router;