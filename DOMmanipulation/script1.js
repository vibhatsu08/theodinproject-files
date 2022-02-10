const container = document.querySelector('#container');

const content = document.createElement('div');
//creates a new div referenced in the variable content
content.classList.add('content');
//adds the variable content to its classlist.
content.textContent = 'daredevil is goat';
//adds the text content to the content variable
container.appendChild(content);

//creating a p with red text saying 'hey i'm red'
let para = document.createElement('p');
para.textContent = 'Hey I\'m red';
para.style.color = 'red';
let element = document.getElementById('container');
element.appendChild(para);

let header_3 = document.createElement('h3');
header_3.textContent = 'I\'m a blue h3!';
header_3.style.color = 'blue';
element.appendChild(header_3);

let new_div = document.createElement('div');
new_div.setAttribute('style', 'border: black; background-color: pink');
element.appendChild(new_div);
let header_1 = document.createElement('h1');
header_1.textContent = 'I\'m in a div!';
new_div.appendChild(header_1);
let new_para = document.createElement('p');
new_para.textContent = 'ME TOO!';
new_div.appendChild(new_para);

document.body.insertBefore(new_div, null);