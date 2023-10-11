var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('strictQuery', true);

module.exports = {mongoose: mongoose, schema: Schema};

