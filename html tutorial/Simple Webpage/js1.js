'use strict';

// console.log(window.document);  // it will return document object --> index.html
// console.log(document);  // // it will return document object --> index.html
// console.dir(document);  // // it will return document object --> jJS representation


// getElementById method--------------------------------------------------------------------- 

// const main_heading = document.getElementById("main_heading");
// console.log(main_heading);
// output
// <h1 id="main_heading">Manage your website</h1>

// querySelector method-----------------------------------------------------------------------

// const header = document.querySelector(".header");
// console.log(header);


// querySelectorAll method---------[1]------------------------------------------------------------

// const li_items = document.querySelectorAll(".li_items"); // Array like object 
// console.log(li_items[1]);  // it will return "NodeList"


// getElementsByClassName method------[2]-------------------------------------------------------------------------------------

// const getAll = document.getElementsByClassName("li_items"); // Array like object
// console.log(getAll); // HTMLCollection\
// we also use indexing 
// length : 3


// textContent property-------------------------------------------------------------------------

// const header_ok = document.querySelector("#main_heading");
// console.log(header_ok.textContent); // it will return "Manage your website"

// style method---------------------------------------------------------------------------------

// const style_ok = document.querySelector("#main_heading");
// style_ok.style.color = "red";
// style_ok.style.border = "2px solid blue";


// getAttribute property------------------------------------------------------------------------

// const inputAttribute = document.querySelector(".form_todo input");
// console.log(inputAttribute.getAttribute("placeholder"));  // it will return "Add Todo"


// ------------------------------------------------------------------------------------------------------------------------------------------------