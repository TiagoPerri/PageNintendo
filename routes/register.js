var express = require('express');
const { post } = require('./users');
const MongoList = require('../public/javascripts/mongoList');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', async function(req, res, next) {
  const content = req.body.content;
  Post.insert(content);
  res.render('register');
  res.redirect('/users')

});



module.exports = router;
