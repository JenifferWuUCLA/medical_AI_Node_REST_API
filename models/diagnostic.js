// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Return model
module.exports = restful.model('Diagnostics', mongoose.Schema({ }, {collection: 'diagnostics', strict:false}));