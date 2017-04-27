// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var diagnosticSchema = new mongoose.Schema({
    name: {
        type: String
    },
    diagnosticPeriod: {
        type: String
    },
    encounterType: {
        type: String
    },
    visitReason: {
        type: String
    },
    physician: {
        type: String
    },
    facility: {
        type: String
    },
    weight: {
        type: String
    },
    height: {
        type: String
    },
    BMI: {
        type: Number
    },
    temperature: {
        type: String
    },
    bloodPressure: {
        type: String
    },
    pulse: {
        type: Number
    },
    respiratoryRate: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    }
});

// Return model
module.exports = restful.model('Diagnostics', diagnosticSchema);