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


function createpost(post, abc){
  setTimeout(()=>{
    posts.push(post);
    abc();
  },2000);

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

createpost({title: 'post three', body: 'this is post 3'}, getpost);
//getpost();