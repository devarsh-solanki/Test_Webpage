'use strict';

const container = document.querySelectorAll(".container button");

// for(let button of container){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     });
// }

// for(let i=0;i<container.length;i++){
//     container[i].addEventListener("click",function(){
//         console.log(this.textContent);
//     });
// }

// container.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     });
// })

// for(let button of container){
//     button.addEventListener("click",function(abc){
//         console.log(abc);  // return -----> PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//     });
// }


// target--------------------------------------------------------------------------------------------------------------------
// currentTarget-------------------------------------------------------------------------------------------------------------
// for(let button of container){
//     button.addEventListener("click",function(abc){
//         console.log(abc.currentTarget);
//     });
// }

// example-------------------------------------------------------------------------------------------------------------------

console.log("Script start!!");

const containerOk = document.querySelectorAll(".container button");

container.forEach(function(button){
    button.addEventListener("click",function(e){
        let count = 0;
        for(let i=0;i<1000000000;i++){
            count += i;
        }
        console.log(e.currentTarget.textContent, count);
    });
})

let num = 0;
for(let i=0;i<100000000;i++){
    num += i;
}

console.log("value of num variable is :",num);
console.log("Script end!!");

