module.exports = function (app) {

  //- Home page
  app.get('/', function (req, res) {
    res.render('introduction.pug');
  });

  app.get('/home', function (req, res) {
    res.render('home.pug');
  });

  app.get('/form', function (req, res) {
    res.render('form.pug');
  });
  
};
