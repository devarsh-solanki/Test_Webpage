'use strict';

// static List v/s live List

const todo_listAll = document.querySelectorAll(".todo_list li"); // NodeList(5) [li, li, li, li, li]
console.log(todo_listAll);

// const todo_listOK = document.querySelector(".todo_list");
// const addNew = document.createElement("li");
// addNew.textContent = "New Todo";
// todo_listOK.append(addNew); // NodeList(5) [li, li, li, li, li]

// -------------------------------------------------------------------------------------------------------------

const ul = document.querySelector(".todo_list"); 
const todo_listALlOK = ul.getElementsByTagName("li"); 
console.log(todo_listALlOK); // HTMLCollection(5) [li, li, li, li, li]

const todo_listAgain = document.querySelector(".todo_list");
const addNewOk = document.createElement("li");
addNewOk.textContent = "New Todo";
todo_listAgain.append(addNewOk);

console.log(todo_listALlOK); // HTMLCollection(6) [li, li, li, li, li, li]


// height, width, etc....  --------------------------------------------------------------------------------------

const allAbout = document.querySelector(".todo_list");
const info = allAbout.getBoundingClientRect();
console.log(info); 
// output
// DOMRect {x: 8.762499809265137, y: 162.40000915527344, width: 157.6750030517578, height: 334.3999938964844, top: 162.40000915527344, …}
