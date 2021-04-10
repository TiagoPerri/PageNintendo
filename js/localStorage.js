if(localStorage.email_login){
    document.getElementById('email_login').value = localStorage.email_login;
}

if(localStorage.password_login){
    document.getElementById('password_login').value = localStorage.password_login;
}

var salvarLogin = function(){
    var email = document.getElementById('email_login').value;
    var senha = document.getElementById('password_login').value;
    localStorage.setItem('email_login', email_login);
    localStorage.setItem('senha_login', password_login);
}

document.onchange = salvarLogin;