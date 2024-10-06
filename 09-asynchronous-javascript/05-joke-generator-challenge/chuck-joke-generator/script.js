const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
let jokeval = "";
const generateJoke = (abc) => {
  const xhr = new XMLHttpRequest();
  try{
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  }
  catch{
    cconsole.log("error connecting to API");
    jokeval = "no jokes retrieved";
  }
  
  
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status == 200){
        const data = JSON.parse(this.responseText);
        console.log(data.value);
        jokeval = data.value;
        console.log(jokeval);
        updatejoke();
        
      }
      else{
        jokeval = "API didn't connect properly";
        updatejoke();
      }
    }
  };

  xhr.send();
};
function updatejoke(){
  jokeEl.innerHTML = `<strong>${jokeval}</strong>`;
}

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);