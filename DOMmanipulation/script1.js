const container = document.querySelector('#container');

const content = document.createElement('div');
//creates a new div referenced in the variable content
content.classList.add('content');
//adds the variable content to its classlist.
content.textContent = 'hello world!';
//adds the text content to the content variable

container.appendChild(content);


