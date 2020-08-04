
var videoFon = document.getElementById('videoFon');
var login = document.getElementById('login');
var background = document.getElementById('backGround');
login.style.display = "none";

background.style.display = "flex";

setTimeout(function (){
    console.log('done');
    var width = document.getElementById('backGround').offsetWidth;
    if(width<=1000){
        background.style.display = "block";
    } else {
        background.style.display = "flex";
    }
    console.log(width)
}, 1)

videoFon.style.display = "none";

// console.log(width);
// console.log(width>1000);