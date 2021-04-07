


var button = document.querySelector('button'); // recupera botao
var lista = document.querySelector('ul'); // recupera ul
button.addEventListener('click', function(){
    var li = document.createElement(li); // cria um li para colocar no ul
    var query = document.querySelector('input').value; // recupera texto do input
    axios.get('https://superheroapi.com/api/3708772112566731/70')
    .then(function(res){
        console.log(res);
    });
});