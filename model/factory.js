var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/database', { useMongoClient: true }).then().catch();

module.exports = {mongoose: mongoose, schema: Schema};

