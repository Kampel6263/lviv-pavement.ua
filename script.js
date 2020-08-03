function input(){
  var name = document.getElementById('name').value;

  /*логіни*/
  var dima = "dima";




  if(name == dima){
      window.location= "people/dima.html" ;
  } else{
    alert('Не вірний логін!')
  }
}


var open = document.getElementById('open');
var login = document.getElementById('login');
var background = document.getElementById('backGround');
var contact = document.getElementById('contact');
var about = document.getElementById('about');
var aboutOpen = document.getElementById('aboutOpen');

open.onclick = function(){
  login.style.display = "block";
}

aboutOpen.onclick = function(){
  about.style.display = 'block';
}

var close = document.getElementById('close');

close.onclick = function(){
  login.style.display = "none";
  background.style.filter = "none";
  
}

function closeN(){
  contact.style.display = "none";
  about.style.display = "none";
}

contactClose.onclick = function(){
  contact.style.display ='block';
}