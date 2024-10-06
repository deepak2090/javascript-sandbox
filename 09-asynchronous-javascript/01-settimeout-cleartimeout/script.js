//setTimeout(changetext, 3000);

function changetext(){
  document.querySelector('h1').textContent = "hello from callback";
}

const timerId = setTimeout(changetext, 3000);
document.querySelector("#cancel").addEventListener('click', ()=>{
  console.log(timerId);
  clearTimeout(timerId);
  console.log(`post clear ${timerId}`);
})