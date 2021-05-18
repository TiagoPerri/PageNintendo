var express = require('express');
const { post } = require('./users');
const MongoList = require('../public/javascripts/mongoList');
const Validator = require('../public/javascripts/validator');
var router = express.Router();

router.post('/', async function(req, res, next) {
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
