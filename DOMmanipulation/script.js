const container = document.querySelector("#container");

const red_para = document.createElement("p");
red_para.classList.add("red_para");
red_para.style.color = "red";
red_para.style.cssText("Hey I am red!");

const blue_header = document.createElement("h3");
blue_header.classList("blue_header");
blue_header.style.color = "blue";
blue_header.style.cssText("I'm a blue header");

const new_div = document.createElement("div");
new_div.classList("new_div");
new_div.setAttribute("style", "border: black; background: pink");