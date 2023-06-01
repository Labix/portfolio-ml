var register = document.querySelector(".register-container");
var remind = document.querySelector(".remind-container");

function showregister(){
    register.style.left = 0;
}

function showlogin(){
    register.style.left = 100 + 'vw';
}

function showremind(){
    remind.style.display = 'flex';
}

function back(){
    remind.style.display = 'none';
}