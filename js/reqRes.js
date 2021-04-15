var entrarLogin = document.getElementById("BtnSubmit"); 
var entrarCadastro = document.getElementById("BtnSubmit_cadastro");
let serverTalk = ""; // mensagens de erro do servidor vão ser armazenados aqui
if (entrarLogin != null){ // está no modo de Login
	entrarLogin.addEventListener("click", function (event){
		requisicaoLogin();
	});
}

if (entrarCadastro != null){ // está no modo de Registro
    entrarCadastro.addEventListener("click", function (event){
		requisicaoCadastro();
	});
}


function requisicaoLogin(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");

	if(fazerValidacao(campoUser,campoSenha,"onLogin") == true){
		doLogin(campoUser.value, campoSenha.value, function (response){
				localStorage.setItem("token", response.token);
				irPageAPI();
		});
	}
}

function requisicaoCadastro(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");

	if(fazerValidacao(campoUser,campoSenha,"onRegister") == true){
		doRegister(campoUser.value, campoSenha.value, function (response){
			localStorage.setItem("token", response.token);
			irPageAPI();
		});
	}
}

function doLogin(email, password, callback){
	var requisicao = new XMLHttpRequest();
	requisicao.open("POST", "https://reqres.in/api/login", true);
	requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8")
	requisicao.onreadystatechange = function () {

		if(requisicao.readyState !== 4){
			return;
		}
		callback(JSON.parse(requisicao.responseText));
	};
	requisicao.send(JSON.stringify({ // converte valores em javascript para uma String JSON
		email: email,
		password: password
	}));
}

function doRegister(email, password, callback){
    var requisicao = new XMLHttpRequest();

    requisicao.open("POST", "https://reqres.in/api/register", true);
    requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    requisicao.onreadystatechange = function () {
        if(requisicao.readyState !== 4){
            return;
        }
        callback(JSON.parse(requisicao.responseText));
    };
    requisicao.send(JSON.stringify({ // converte valores em javascript para uma String JSON
        email: email,
        password: password
    }));
}

function irPageAPI(){
	window.location.href = "api.html"
}

function userLogado(){
	if(localStorage.token){ 
		return true;
	}
    return false;
}

function fazerValidacao(email,password,type){
    
    // credenciais que o ReqRes tem disponivel e aceita para o login
    var apiOnLoginEmail = "eve.holt@reqres.in";
    var apiOnLoginPassword = "cityslicka";

    // credenciais que o ReqRes tem disponivel e aceita para o registro
    var apiOnRegisterEmail = "eve.holt@reqres.in";
    var apiOnRegisterPassword = "pistol";

    serverTalk = ""; // limpa
    if (userLogado() == true){
        serverTalk = serverTalk + "voce já está logado";
        alert(serverTalk);
        return false;       
    }
    if(email.value == null || email.value == "") {
        serverTalk = serverTalk + "email não pode ficar vazio";
        alert(serverTalk);
        return false;
    }
    if(password.value == null || password.value == "") {
        serverTalk = serverTalk + "senha não pode ficar vazio";
        alert(serverTalk);
        return false;
    }
    if(email.value.length <= 3) {
        serverTalk = serverTalk + "email muito curto";
        alert(serverTalk);
        return false;
    }
    if(password.value.length <= 3) {
        serverTalk = serverTalk + "senha muito curta";
        alert(serverTalk);
        return false;
    }
    if (type == "onLogin") { // tipo de validação = Login
        if(email.value != apiOnLoginEmail){
            serverTalk = serverTalk + "email não cadastrado (não existe no reqres.in) ";
            serverTalk = serverTalk + "use: "+apiOnLoginEmail+" ";
            alert(serverTalk);
            return false;
        }
        if(password.value != apiOnLoginPassword){
            serverTalk = serverTalk + "senha invalida (não existe no reqres.in) ";
            serverTalk = serverTalk + "use: "+apiOnLoginPassword+" ";
            alert(serverTalk);
            return false;
        }
    }   
    if (type == "onRegister") { // tipo de validação = Register
        if(email.value != apiOnRegisterEmail){
            serverTalk = serverTalk + "voce não pode cadastrar esse email (não existe no reqres.in) ";
            serverTalk = serverTalk + "use: "+apiOnRegisterEmail+" ";
            alert(serverTalk);
            return false;
        }
        if(password.value != apiOnRegisterPassword){
            serverTalk = serverTalk + "voce não pode cadastrar essa senha (não existe no reqres.in) ";
            serverTalk = serverTalk + "use: "+apiOnRegisterPassword+" ";
            alert(serverTalk);
            return false;
        }
    }   
    return true;
}