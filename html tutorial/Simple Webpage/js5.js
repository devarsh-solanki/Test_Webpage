'use strict';

const btn = document.querySelector(".btn_headline");

// btn.addEventListener("click",function(){
//     // console.log("You called me!!!");
//     console.log(this); // <button class="btn btn_headline">Learn More</button>
// });

btn.addEventListener("click",() => {
    console.log(this); // return ---> Window object 
});

