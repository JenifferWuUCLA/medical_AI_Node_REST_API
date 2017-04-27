// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var patientSchema = new mongoose.Schema({
    name: String,
    DOB:  String,
    age:  Number,
    gender:  String,
    zipcode:  String,
    phoneNumber:  String,
    preferredLanguage:  String,
    smokingStatus:  String
});

// Return model
module.exports = restful.model('Patients', patientSchema);