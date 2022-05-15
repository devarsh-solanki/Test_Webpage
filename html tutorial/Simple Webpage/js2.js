"use strict";

// getElementsByTagName method-------------------------------------------------------------------------
// simple for loop  
// for of loop
// we can not use forEach method*****


let li_items = document.getElementsByTagName("a"); // HTMLCollection(
console.log(li_items);

// for(let i=0;i<li_items.length;i++){
//     const nav_items = li_items[i];
//     nav_items.style.backgroundColor = "red";
//     nav_items.style.color = "blue";
//     nav_items.style.fontWeight = 600;
// }

// for(let nav_items of li_items){
//     nav_items.style.backgroundColor = "white";
//     nav_items.style.color = "green";
//     nav_items.style.fontWeight = 600;
// }

// we can use forEach method after converting into array []

li_items = Array.from(li_items);
console.log(Array.isArray(li_items)); // true
li_items.forEach((nav_items) => {
    nav_items.style.backgroundColor = "blue";
    nav_items.style.color = "yellow";
    nav_items.style.fontWeight = 700;
});


// querySelectorAll------------------------------------------------------------------------------------
// simple for loop  
// for of loop
// forEach method*****


// const li_items = document.querySelectorAll("a");  // NodeList -----> after converting NodeList to array[] we can use all the methids of array[].
// console.log(li_items);

// for(let i=0;i<li_items.length;i++){
//     const nav_items = li_items[i];
//     nav_items.style.backgroundColor = "red";
//     nav_items.style.color = "blue";
//     nav_items.style.fontWeight = 600;
// }

// for(let nav_items of li_items){
//     nav_items.style.backgroundColor = "white";
//     nav_items.style.color = "green";
//     nav_items.style.fontWeight = 600;
// }

// li_items.forEach((nav_items) => {
//     nav_items.style.backgroundColor = "yellow";
//     nav_items.style.color = "blue";
//     nav_items.style.fontWeight = 700;
// });