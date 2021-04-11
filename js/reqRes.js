// FORMA O "BANCO DE DADOS" PARA O LOGIN
let myDB = {}; // aqui fica armazenado os dados dos usuarios cadastrados do ReqRes

fetch('https://reqres.in/api/users/2')
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

   if(myDB.email.indexOf(email) != -1 && email != '')    // Encontrou o elemento email no banco de dados, espécie de isInArray(array,email)
   {  
        console.log('login fetuado');
        token = myDB.id; // ID do usuário logado

        if(localStorage.email_login){
            document.getElementById('email_login').value = localStorage.email_login;
        }
        
        if(localStorage.password_login){
            document.getElementById('password_login').value = localStorage.password_login;
        }

        if(localStorage.token){
            token = myDB.id;
        }

        var email_login = document.getElementById('email_login').value;
        var password_login = document.getElementById('password_login').value;
        localStorage.setItem('email_login', email_login);
        localStorage.setItem('senha_login', password_login);
        localStorage.setItem('token', token);
    
        
        //document.onchange = salvarLogin;
    }
    else{
        console.log('login falhou');
        console.log('email do banco de dados e email digitado pelo usuário são diferentes');
        console.log('email digitado:');
        console.log(email);
        console.log('email que temos cadastrado:');
        console.log(myDB.email);
        return false;
    }
    return true;
}

var button = document.getElementById('BtnSubmit'); // recupera botao
button.addEventListener("click", doLogin); // faz carregar a pesquisa ao clicar, chamando a função