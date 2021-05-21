var express = require('express');
const { post } = require('./users');
const MongoList = require('../public/models/mongoList');
const Validator = require('../public/javascripts/validator');
var router = express.Router();

router.get('/login', function(req, res, next) {  //pagina de login
  res.render('login');
});

router.get('/register', function(req, res, next) { // pagina de register
  res.render('register');
});

router.post('/login/add', async function(req, res, next) { // parte de login (add)

  const theEmail = req.body.email_login;
  const thePassword = req.body.password_login;

  if(Validator.verify(theEmail,thePassword) == false){
    // futuramente podemos renderizar uma pagina HTML passando como parametro uma mensagem de erro
    res.send("Nao pode inserir dados em branco");
    res.end();
  }
  else{ // validação de campo OK
    if(await MongoList.doLogin(theEmail,thePassword) == "ok"){ // credenciais constam no banco de dados
      req.session.login = theEmail;
      res.redirect('/users') // futuramente isso levará para a página de API
    }
    else{
      // futuramente colocaremos modal ou pagina HTML passando como parametro msg de erro
      res.send("Email e Senha não encontrados no banco de dados");
      res.end();
    }
  }

});

router.post('/register/add', async function(req, res, next) { // parte de register (add)
  const theEmail = req.body.email_cadastro;
  const thePassword = req.body.password_cadastro;
  if(Validator.verify(theEmail,thePassword) == false){
    // futuramente podemos renderizar uma pagina HTML passando como parametro uma mensagem de erro
    res.send("Nao pode inserir dados em branco");
    res.end();
  }
  else{ // validação de campo OK
    MongoList.insert(theEmail,thePassword);
    res.redirect('/users')
  }
});







module.exports = router;
