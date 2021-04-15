document.addEventListener('DOMContentLoaded', function(){
	acessoInvalido();

	var entrarLogin = document.getElementById("login");
	var btnSubmit = document.getElementsById("BtnSubmit");
	var entrarCadastro = document.getElementById("cadastro");

	entrarCadastro.addEventListener("submit", function (event){
		event.preventDefault();
		requisicaoLogar();
	});

	entrarLogin.addEventListener("submit", function (event){
		event.preventDefault();
		requisicaoLogin();
	});
});

function requisicaoLogin(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");
	var errorMessage = document.querySelector("");

	if(campoUser.value != null && campoSenha.value != null){
		requisicaoLogin(campoUser.value, campoSenha.value, function (response){
			if(response.error){
				errorMessage.classList.add("");
				errorMessage.innerHTML = response.error;
				funcError();
			}else{
				localStorage.setItem("loginToken", response.token);
				irPageAPI();
			}
		});
	}
}

function requisicaoLogar(){
	var campoUser = document.getElementById("email_login");
	var campoSenha = document.getElementById("password_login");
	var registerBoxError = document.querySelector("");

	if(campoUser.value != null && campoSenha.value != null){
		requisicaoCadastro(campoUser.value, campoSenha.value, function (response){
			if(response.error){
				registerBoxError.classList.add("");
				registerBoxError.innerHTML = response.error;
				funcError();
			}else{
				localStorage.setItem("loginToken",response.token);
				irPageAPI();
			}
		});
	}
}

function requisicaoLogin(email, password, callback){
	var requisicao = new XMLHttpRequest();

	requisicao.open("POST", "https://reqres.in/api/login", true);
	requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8")
	requisicao.onreadystatechange = function () {

		if(requisicao.readyState !== 4){
			return;
		}
		callback(JSON.parse(requisicao.responseText));
	};
	requisicao.send(JSON.stringify({
		email: email,
		password: password
	}));
}

function requisicaoCadastro(email, password, callback){
    var requisicao = new XMLHttpRequest();

    requisicao.open("POST", "https://reqres.in/api/register", true);
    requisicao.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    requisicao.onreadystatechange = function () {
        if(requisicao.readyState !== 4){
            return;
        }
        callback(JSON.parse(requisicao.responseText));
    };
    requisicao.send(JSON.stringify({
        email: email,
        password: password
    }));
}

function irPageAPI(){
	window.location.href = "api.html"
}

function acessoInvalido(){
	var data = new URLSearchParams(window.location.search);
	var acessoInvalido = data.get("acessoInvalido");
	var errorMessage = document.querySelector("");

	if(acessoInvalido != null){
		errorMessage.classList.add("");
		errorMessage.innerHTML = "Login não realizado";
		ativarModal();
	}
}

function logar(){
	let token = localStorage.getItem("loginToken");

	if(token != null){
		return true;
	}
}