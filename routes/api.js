// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Patient = require('../models/patient');
var Diagnostic = require('../models/diagnostic');

// Routes
Patient.methods(['get', 'put', 'post', 'delete']);
Patient.register(router, '/patients');

Diagnostic.methods(['get', 'put', 'post', 'delete']);
Diagnostic.register(router, '/diagnostics');

// Return router
module.exports = router;