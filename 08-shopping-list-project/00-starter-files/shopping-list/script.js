let ouput;
output = document.body.children;
output = document.forms[0].action;

//document.forms[0].id = "new-id"
output = document.links[0].href;
output = document.links[0].classList;
output = document.images[0].src;

//convert collections into array first
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));
// console.log(output);

console.log(document.getElementById('item-list').getAttribute('id'));

document.getElementById('item-list').title = 'deepaktest';