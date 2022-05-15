"use strict";

// innerHTML property-------------------------------------------------------------------------------

// const header = document.querySelector(".main_heading");
// console.log(header);

// header.innerHTML = "<h3>hello guys</h3>";
// header.innerHTML += "<p>welocme to my channel</p>";

// header.innerHTML += "<button class=\"btn\">hello</button>"


// Tree *********************[important]*******************************************

const root = document.getRootNode(); // #document
console.log(root);

const childnodes = root.childNodes; //  NodeList(2) [<!DOCTYPE html>, html]
console.log(childnodes);

const childnodes_first = root.childNodes[0]; // <!DOCTYPE html>
console.log(childnodes_first);

const next_siblings = childnodes_first.nextSibling; // html
console.log(next_siblings);

const childnodes_second = root.childNodes[1]; // html
console.log(childnodes_second);

const prev_siblings = childnodes_second.previousSibling; // <!DOCTYPE html>
console.log(prev_siblings);

const parent = childnodes_first.parentNode; // #document
console.log(parent);

// DOM traversing
const getNav = document.querySelector(".nav_items"); 
console.log(getNav.parentNode); // <nav class="nav container">…</nav>
console.log(getNav.parentNode.parentNode.parentNode); // <body>...</body>


// classList-----------------------------------------------------------------------------------

const sectionTodo = document.querySelector(".section_todo");
console.log(sectionTodo);
// output -----> <section class="section_todo container">…</section>
console.log(sectionTodo.classList); // it will return 'section_todo', 'container'

sectionTodo.classList.add("bg_dark");     // -----> apply
sectionTodo.classList.remove("bg_dark");  // -------> remmove

console.log(sectionTodo.classList.contains("bg_dark")) // it will return false


// toggle -----------------------------------------------------------------------------------

// if bg_dark class is not present then it will add it.
sectionTodo.classList.toggle("bg_dark");
// if bg_dark class is present then it will remove
sectionTodo.classList.toggle("bg_dark");


// new method to add any item or tag in our webpage------------------------------------------
// append  ------> after
// prepend  ------> before
// remove

const vahvah = document.querySelector(".todo_list");
vahvah.innerHTML += "<li>Todo 2</li>" + "<li>Todo 3</li>";

const createLi = document.createElement("li");
createLi.textContent = "Todo 4";
vahvah.append(createLi);
console.log(vahvah);

// output*****
{/* <ul class="todo_list"></ul>
    <li>Todo 1</li>
    <li>Todo 2</li>
    <li>Todo 3</li>
    <li>Todo 4</li>
</ul> */}

// before
// after

const createp = document.createElement("p");
createp.textContent = "Hello guys, I am shrikant maheshvari i am from india,this is my first website!!!";
const vahvahTop = document.querySelector(".todo_list li");
vahvahTop.before(createp);
// vahvahTop.after(createp);

// insertAdjacentHTML ----------------------------------------------------------------------------------------------
// beforeend
// afterend
const vahvahTopHello = document.querySelector(".todo_list");
vahvahTopHello.insertAdjacentHTML("beforeend","<p><strong>Chhoti bacchi ho kya!!!</strong></p>");

// cloneNode--------------------------------------------------------------------------------------------------------

const forClone = document.querySelector(".todo_list p");
const liNew = document.createElement("li");
liNew.textContent = "hello friends!!!";
const newCloneNode = liNew.cloneNode(true); // true ----> means we also add the content of the selected node
forClone.append(liNew);
forClone.prepend(newCloneNode);











