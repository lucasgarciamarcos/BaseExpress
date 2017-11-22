var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
require('./routes/routes.js')(app);

app.use(express.static(__dirname + '/public'));
app.locals.moment = require('moment');
app.locals.shortFormat = "DD/MM/YYYY HH:mm:ss";

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
    console.log('Servidor Inicializado na Porta', app.get('port'));
});

module.exports = app;
