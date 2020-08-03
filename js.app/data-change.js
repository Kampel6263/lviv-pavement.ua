function DataChange(id) {
    var square1 = document.getElementById('square1');
    var square2 = document.getElementById('square2');
    var gr = eval(id);
    var backColor;
    if(backColor != '#222'){
        backColor = gr.style.backgroundColor = '#222';
    } else {
        backColor = gr.style.backgroundColor = '#111'
    }

    console.log(backColor);
   

    //  var gr = eval(id);
    //  if(i%2 == 0){
    //  gr.style.backgroundColor = '#111';
    //  } else {
    //      gr.style.backgroundColor = '#222';
    //  }
    //  i++;
    //  gr = id;
    //  console.log(i,gr,id);
    // return id;

}
