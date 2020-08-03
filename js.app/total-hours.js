let hours1 = document.getElementById('hours1').value;
let hours2 = document.getElementById('hours2').value;
let hours3 = document.getElementById('hours3').value;
let hours4 = document.getElementById('hours4').value;
let hours5 = document.getElementById('hours5').value;
let hours6 = document.getElementById('hours6').value;
let hours7 = document.getElementById('hours7').value;
let hours8 = document.getElementById('hours8').value;
let hours9 = document.getElementById('hours9').value;
let hours10 = document.getElementById('hours10').value;
let hours11 = document.getElementById('hours11').value;
let hours12 = document.getElementById('hours12').value;
let hours13 = document.getElementById('hours13').value;
let hours14 = document.getElementById('hours14').value;
let hours15 = document.getElementById('hours15').value;
let hours16 = document.getElementById('hours16').value;
let hours17 = document.getElementById('hours17').value;
let hours18 = document.getElementById('hours18').value;
let hours19 = document.getElementById('hours19').value;
let hours20 = document.getElementById('hours20').value;
let hours21 = document.getElementById('hours21').value;
let hours22 = document.getElementById('hours22').value;
let hours23 = document.getElementById('hours23').value;
let hours24 = document.getElementById('hours24').value;
let hours25 = document.getElementById('hours25').value;
let hours26 = document.getElementById('hours26').value;
let hours27 = document.getElementById('hours27').value;
let hours28 = document.getElementById('hours28').value;
let hours29 = document.getElementById('hours29').value;
let hours30 = document.getElementById('hours30').value;
let hours31 = document.getElementById('hours31').value;

let massHours = [];

for (let i = 1; i <= 31; i++) {
    let a = eval('hours' + i);
    if (a > 1) {
        massHours.push(a);
    }
}

var hoursSum = 0;

for(let i = 0; i<massHours.length; i++){
    hoursSum = hoursSum + parseInt(massHours[i]);
}

var totalMoney = hoursSum * 100;

document.getElementById('totalHours').innerHTML = hoursSum;
document.getElementById('totalMoney').innerHTML = totalMoney;
