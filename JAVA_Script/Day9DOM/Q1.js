let para1=document.createElement("p");
para1.innerText="hey i'm red";
document.querySelector('body').append(para1);
para1.classList.add("red");

let H3=document.createElement("H3");
H3.innerText="Hey i'm blue";
document.querySelector('body').append(H3);
H3.classList.add("blue");



let div=document.createElement("div");
let H1=document.createElement("H1");
let para2=document.createElement("para2");
H1.innerText="Hey I'm in a div";
para2.innerText="Me Too";

div.append(H1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);