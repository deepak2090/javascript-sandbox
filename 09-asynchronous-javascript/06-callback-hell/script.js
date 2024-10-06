

function getdata(endpoint ,callb){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);
  xhr.onreadystatechange = function(){
    if (this.readyState == 4 & this.status ==200){
      //console.log(JSON.parse(this.responseText));
      callb(JSON.parse(this.responseText));
    }
  }
  const x = Math.floor(Math.random() * 3000) + 1000;
  setTimeout( ()=>{
    xhr.send();
    
    console.log(x);
  },x);
}

getdata('./movies.json', (jsonparseddata) =>{
  console.log(jsonparseddata);
  getdata('./actors.json', (jsonparseddata)=>{
    console.log(jsonparseddata);
    getdata('./directors.json', (jsonparseddata)=>{
      console.log(jsonparseddata);
    })
  })
});
//getdata('./actors.json');
//getdata('./directors.json');