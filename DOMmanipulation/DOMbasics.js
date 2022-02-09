//using DOM to create an element
const div = document.createElement("div");
//creates a new div referenced in the variable div

//adding inline style 
div.style.color = "blue";
//adds a particular style
div.style.cssText = "color: blue; background: white";
//adds several style rules
div.setAttribute("style", "color: blue; background: white");
//adds several style rules
//either use camel case or bracket notation to access the style attributes

//editing attributes
div.getAttribute("id", "theDiv");
div.setAttribute("id");
//returns value of the specified div
div.removeAttribute("id");
//removes the specified attribute

//working with attributes
div.classList.add("new");
//adds a class "new" to your div
div.classList.remove("old");
//removes the class "old" from your div
div.classList.toggle("change");
//if the class exists, removes it, and if it doesn't, then adds one.

//adding text content
div.textContent = "hello world!";
//creates a node containing text content, "hello world", and then adds it to the div content.
div.innerHTML = "<span>Hello, World!</span>";
//renders the html tag inside the div

