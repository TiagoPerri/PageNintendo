var express = require('express');
var router = express.Router();
const Heroes = require('../public/javascripts/heroes');

router.get('/', function(req, res, next) { // proteger essa pagina futuramente
    res.render('add-hero');
});

router.post('/add', function(req, res, next) { // proteger essa pagina futuramente

    Heroes.addHero(req).then((result) => {

        if(result.insertedCount === 1){
            console.log("ADD OK!");
        }
        else
        {
            console.log("ADD FAIL!");
        }
    });

    res.redirect('/users'); // futuramente jogar para sessão de busca
    res.end();
});

module.exports = router;
