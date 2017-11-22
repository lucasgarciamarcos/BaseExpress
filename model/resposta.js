var Factory = require('./factory.js');
var mongoose = Factory.mongoose;
var Schema = Factory.schema;

var RespostaSchema = new Schema({
    descricao: {
      type: String,
      required: 'Descricao Inválida'
    },
    datahora: {
      type: String,
      default: new Date()
    }
  });
  
  module.exports = RespostaSchema;