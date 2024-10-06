/*function changebutton(e){
  e.target.classList.toggle('danger');
  let result = [];
  obj = e.target.classList;
  while (obj) {
    result = result.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
    
}
console.log(result);
}

document.querySelector('button').addEventListener('click', changebutton);
*/


let posts = [
  {title: 'post one', body: 'this is post 1'},
  {title: 'post two', body: 'this is post 2'},
]


function createpost(post){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      let error = true;
      if (!error){
        posts.push(post);
      resolve();
      }
      else{
        reject('something went wrong');
      }
      
    },2000);
    
  })
}

function getpost(){
  
  setTimeout(() => {
    posts.forEach( function (post){
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);

    })
    
  }, 1000);
}

function errorhandling(passingerror){
  console.log(passingerror);
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${passingerror}</strong>`;
  document.getElementById('posts').appendChild(h3);
};
createpost({title: 'post three', body: 'this is post 3'})
  .then(getpost)
  .catch(errorhandling);
//getpost();