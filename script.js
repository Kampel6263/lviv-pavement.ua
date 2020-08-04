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

function readInput(e) {
  if (e.keyCode == 13) {
    input();
  }
}

var open = document.getElementById('open');
var login = document.getElementById('login');
var background = document.getElementById('backGround');
var contact = document.getElementById('contact');
var about = document.getElementById('about');
var aboutOpen = document.getElementById('aboutOpen');

open.onclick = function(){
  document.getElementById('open').className += 'A';
  login.style.display = "block";
  document.getElementById('name').focus();

}

aboutOpen.onclick = function(){
  document.getElementById('aboutOpen').className += 'A';
  about.style.display = 'block';
}

var close = document.getElementById('close');

close.onclick = function(){
  login.style.display = "none";
  document.getElementById('open').className = 'nav-togle';
  
}

function closeN(){
  contact.style.display = "none";
  about.style.display = "none";
  document.getElementById('contactClose').className = 'nav-togle';
  document.getElementById('aboutOpen').className = 'nav-togle';
}

contactClose.onclick = function(){
  contact.style.display ='block';
  document.getElementById('contactClose').className += 'A';
}