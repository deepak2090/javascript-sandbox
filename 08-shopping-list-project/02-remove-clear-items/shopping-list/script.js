const itemform =  document.getElementById('item-form');
const iteminput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');
const clearitem = document.getElementById('clear');

const itemfilter = document.getElementById('filter');

function displayitems(){
  const itemsfromstorage = getitemsfromstorage();
  itemsfromstorage.forEach((item) => additemtodom(item));
  checkui();
}

function createbutton(classes){
  const button = document.createElement('button');
  button.className = classes
  button.appendChild(createicon('fa-solid fa-xmark'));
  return button;
}
function createicon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon
}
function removeitem(e){
  if (e.target.parentElement.classList.contains('remove-item')){
    if (confirm('Are you Sure?')){
      e.target.parentElement.parentElement.remove();

      //remove from local storage
      
      console.log("deepak",e.target.parentElement.parentElement.textContent);
      removefromlocalstorage(e.target.parentElement.parentElement.textContent);
    }
  }
  checkui();
}

function clearitems(){
  const allitems = document.querySelectorAll('li');
  console.log(allitems);
  allitems.forEach(item =>{
    item.remove();
  })

  //clear from local storage
  localStorage.removeItem('items');
  checkui();
}

function checkui(){
  const items = itemlist.querySelectorAll('li');
  if (items.length ===0 ){
    clearitem.style.display = 'none';
    itemfilter.style.display = 'none';
  } else{
    clearitem.style.display = 'block';
    itemfilter.style.display = 'block';
  }

}

function filteritems(e){
    const text = e.target.value.toLowerCase();
    const items = itemlist.querySelectorAll('li');
    items.forEach(item => {
      const itemname = item.textContent.toLowerCase();
      console.log(itemname);

      if (itemname.indexOf(text) != -1){
        item.style.display = 'flex';
      }
      else{
        item.style.display = 'none';
      }
    })
}

function additemsubmit(e){
  e.preventDefault();
  const newitem = iteminput.value;
  if (newitem ===''){
    alert('please enter correct item');
    return;
  }
  additemtodom(newitem);
  additemtostorage(newitem);
  checkui();
  iteminput.value = '';
}

function additemtodom(newitem){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newitem));
  const button = createbutton('remove-item btn-link text-red');
  console.log(button);
  li.appendChild(button);
  console.log(li);
  itemlist.append(li);
}

function additemtostorage(item){
  const itemsfromstorage = getitemsfromstorage();
  itemsfromstorage.push(item);
  localStorage.setItem('items', JSON.stringify(itemsfromstorage));
}

function removefromlocalstorage(itemvalue){
  console.log("remove called");
  let itemsfromstorage = getitemsfromstorage();
  console.log(itemsfromstorage);
  itemsfromstorage = itemsfromstorage.filter((i) => i !== itemvalue);
  console.log("deepak1",itemsfromstorage);
  localStorage.setItem('items', JSON.stringify(itemsfromstorage));
  

}

function getitemsfromstorage(){

  let itemsfromstorage;
  if (localStorage.getItem('items') === null){
    itemsfromstorage = [];
  }
  else{
    itemsfromstorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsfromstorage;
}



//initialize app

function init(){
  itemform.addEventListener('submit', additemsubmit);
  itemlist.addEventListener('click', removeitem);
  clearitem.addEventListener('click', clearitems);
  itemfilter.addEventListener('input', filteritems);
  document.addEventListener('DOMContentLoaded', displayitems);
  checkui();
}

init();