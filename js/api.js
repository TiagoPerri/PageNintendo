var button = document.querySelector('button'); // recupera botao
var lista = document.querySelector('ul'); // recupera ul
button.addEventListener('click', function(){
    var li = document.createElement(li); // cria um li para colocar no ul
    var query = document.querySelector('input').value; // recupera texto do input
    li.innerHTML = '<li>'+query+'</li>'; // aqui adiciona no LI a palavra que ta no input (query)
    lista.appendChild(li);	// faz aparecer na tela
    document.querySelector('input').value = ''; // limpar barra de pesquisa
})