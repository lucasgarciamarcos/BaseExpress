var Factory = require('./factory.js'),
mongoose = Factory.mongoose,
Schema = Factory.schema,
RespostaSchema = require('./resposta.js');

var EnqueteSchema = new Schema({
    descricao: {
      type: String,
      required: 'Descricao Inválida'
    },
    datahora: {
      type: String,
      default: new Date()
    },
    respostas: [RespostaSchema]
  });
  
  module.exports = mongoose.model('Enquete', EnqueteSchema);