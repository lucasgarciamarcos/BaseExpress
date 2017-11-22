var bodyParser = require('body-parser'),
  cors = require('cors'),
  Enquete = require('../model/Enquete'),
  expressLayouts = require('express-ejs-layouts');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(expressLayouts);
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    Enquete.find({}, function (err, r) {
      if (err)
        res.send(err);
      res.render('home.ejs', { response: r });
    });
  });

  app.get('/cadastro', (req, res) => {
      res.render('cadastro.ejs');
  });

  app.post('/cadastro', (req, res) => {
    var enquete = new Enquete(req.body);
    enquete.save(function (err, r) {
      if (err)
        res.send(err);
      res.redirect('/');
    });
  });

  app.get('/cadastro/:enqueteId', (req, res) => {
    Enquete.findById(req.params.enqueteId, function (err, r) {
      if (err)
        res.send(err);
      res.render('cadastro.ejs', {response: r, id: req.params.enqueteId});
    });
  });

  app.post('/cadastro/:enqueteId', (req, res) => {
    req.body.datahora = new Date();
    Enquete.findOneAndUpdate({ _id: req.params.enqueteId }, req.body, function (err, r) {
      if (err)
        res.send(err);
      res.redirect('/');
    });
  });

  app.post('/delete/:enqueteId', (req, res) => {
    Enquete.remove({
      _id: req.params.enqueteId
    }, function (err, r) {
      if (err)
        res.send(err);
      res.redirect('/');
    });
  });

  app.get('/enquete/:enqueteId', (req, res) => {
    Enquete.findById(req.params.enqueteId, function (err, r) {
      if (err)
        res.send(err);
      res.render('respostas.ejs', {response: r, id: req.params.enqueteId});
    });
  });

  app.post('/enquete/:enqueteId', (req, res) => {
    Enquete.findById(req.params.enqueteId, function (err, r) {
      if (err)
        res.send(err);
      r.respostas.push(req.body);
      r.save();
      res.redirect('/enquete/' + req.params.enqueteId);
    });
  });
}