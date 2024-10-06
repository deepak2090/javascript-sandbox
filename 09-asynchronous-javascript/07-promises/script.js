const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('Async task complete');
    resolve();

  }, 1000);

});
//handle the promise
promise.then(()=>{
  console.log('promise consumed');
  console.log(promise);
});
//in promise resolve needs to have the data
const getuser = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let error = true;
    if (!error){
      resolve({name:'deepak', age: '35'});
    }
    else{
      reject('Error: Something went wrong');
    }
    
    

  }, 1000);

});
getuser.
  then((resolvedata)=>{
    console.log(resolvedata);
   })
   .catch((error)=>{ console.log(error);
}).finally(()=>{
  console.log("the promised either resolved/reject has been complete");
});

console.log('hello from global scope');