function pass() {
    var password = document.getElementById('password').value;
    var background = document.getElementById('backGround');
    var videoFon = document.getElementById('videoFon');

    /*пароль*/
    var dima = "333";
    if (password == dima) {
        login.style.display = "none";
        background.style.display = "flex";
        videoFon.style.display = "none";

    } else {
        alert('Неправильний пароль');
    }
}

var background = document.getElementById('backGround');
var videoFon = document.getElementById('videoFon');
var login = document.getElementById('login');
login.style.display = "block";

//delete
//     login.style.display = "none";
//     background.style.display = "flex";
//     videoFon.style.display = "none";


var close = document.getElementById('close');

close.onclick = function () {
    window.location = "../index.html";
}
