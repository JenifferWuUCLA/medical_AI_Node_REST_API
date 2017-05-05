// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Return model
module.exports = restful.model('Patients', mongoose.Schema({ }, {collection: 'patients', strict:false}));