// FORMA O "BANCO DE DADOS" PARA O LOGIN
let myDB = {}; // aqui fica armazenado os dados dos usuarios cadastrados do ReqRes

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
        console.log('DB information:')
        myDB = json.data; // transfere os dados para o array
        console.log(myDB);
    })

// VERIFICA A EFETIVAÇÃO DO LOGIN
function doLogin(){
    var token = 0; // false
    var email = document.getElementById('email_login').value; // pega o email digitado pelo usuario
    if(myDB.indexOf(email) != -1)    // Encontrou o elemento email no banco de dados, espécie de isInArray(array,email)
    {  
        console.log('efetuado');
        token = 1; // em breve, substituir 1 pelo token da API 
    }
    else{
        console.log('login falhou');
    }
    return token;
}

var button = document.getElementById('BtnSubmit'); // recupera botao
button.addEventListener("click", doLogin); // faz carregar a pesquisa ao clicar, chamando a função