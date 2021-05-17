var express = require('express');
const MongoList = require('../public/javascripts/mongoList');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
  //res.send('respond with a resource');
  const posts = await MongoList.find();
  res.render('error', {posts : posts})
});

module.exports = router;
