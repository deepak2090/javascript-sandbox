//setinterval needs a function to call and interval period, if any extra arguments 
//it needs to be appeneded at the end
//const interval = setInterval(mycallback, 1000, 'hello','deepak');

//function mycallback(a,b){
//  console.log(a, b, Date.now());
//}

let intervalid;
function startchange(){
  if (!intervalid){
    intervalid = setInterval(randomcolorchange, 1000);
  }
}

/*function changecolor(){
    if (document.body.style.backgroundColor != 'black'){
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }*/

function randomcolorchange(){
  let colorcode = Math.floor(Math.random() * 16777215).toString(16);
  console.log(colorcode);
  document.body.style.backgroundColor = colorcode;

}

function stopchange(){
  clearInterval(intervalid);
}
document.getElementById('start').addEventListener('click', startchange);
document.getElementById('stop').addEventListener('click', stopchange);