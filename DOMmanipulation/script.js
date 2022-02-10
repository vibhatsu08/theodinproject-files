const container = document.querySelector('#container'); //pointing towards the parent div
const content = document.createElement('div'); //creating an element 'content' unded the parent div.
content.classList.add('content'); //adds the content div to the classlist.
content.textContent = 'This is some glorious text content.'; //adds text to the content div.
container.appendChild(content); //appending the content div to the container div.

let para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';
let element = document.getElementById('container');
element.appendChild(para);

let header_3 = document.createElement('h3');
header_3.textContent = 'Hey I\'m a blue h3!';
header_3.style.color = 'blue';
element.appendChild(header_3);

let new_div = document.createElement('div');
new_div.setAttribute('style', 'border: black; background-color: pink');
element.appendChild(new_div);
let element_div = document.getElementById('new_div');

let header_1 = document.createElement('h1');
header_1.textContent = 'I\'m in a div!';
new_div.appendChild(header_1);

let new_para = document.createElement('p');
new_para.textContent = 'ME TOO!';
new_div.appendChild(new_para);

document.body.insertBefore(new_div, null);

