'use strict';

// Bubbling, capturing & deletion

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//Capturing--------------------------------------------------------------------------
child.addEventListener("click",function(){
    console.log("Capture !!!!!!! child!!!");
},true);

parent.addEventListener("click",function(){
    console.log("Capture !!!!!!! parent!!!");
},true);

grandParent.addEventListener("click",function(){
    console.log("Capture !!!!!!! grandparent!!!");
},true);

document.body.addEventListener("click",function(){
    console.log("Capture !!!!!!! document.body!!!");
},true);

// Bubbling--------------------------------------------------------------------------
child.addEventListener("click",function(){
    console.log("Bubble child!!!");
});

parent.addEventListener("click",function(){
    console.log("Bubble parent!!!");
});

grandParent.addEventListener("click",function(){
    console.log("Bubble grandparent!!!");
});

document.body.addEventListener("click",function(){
    console.log("Bubble document.body!!!");
});

// Delegation-------------------------------------------------------------------------1

// grandParent.addEventListener("click",function(){
//     console.log("You clicked on grandparent!!!");
// });

// grandParent.addEventListener("click",function(e){
//     console.log(e.target.textContent);
// });