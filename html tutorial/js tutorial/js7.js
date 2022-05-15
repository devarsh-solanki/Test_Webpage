'use strict';


// How JavaScript works???


console.log(this);          // this == window
console.log(window);        // window
console.log(firstName);     // undefined
var firstName = "Devarsh";  // change the value of firstName to Devarsh insted of undefined 
console.log(firstName);     // Devarsh

console.log(fullName);      
// output
// ƒ fullName(){
//     return `hello ${firstName}`;
// }

function fullName(){
    return `hello ${firstName}`;
}

var sss = "rajkumar";

console.log(fullName());
console.log(rajaBabu); // undefined
// rajaBabu();              // js7.js:16 Uncaught TypeError: rajaBabu is not a function

var rajaBabu = function(){
    console.log(`hello ${sss}`);
}

console.log(rajaBabu);
// output----
// ƒ (){
//     console.log(`hello ${firstName}`);
// }
rajaBabu();  // hello rajkumar 

// console.log(Pa6i_Key_Mane_Mayro); //-------------------------------------------

// output --> js7.js:40 Uncaught ReferenceError
// we can not access the function before it's declaration with let keyword.

let Pa6i_Key_Mane_Mayro = function(){
    console.log(`Hase have maro bhai ${firstName}`);
}

console.log(Pa6i_Key_Mane_Mayro);
// output
// ƒ (){
//     console.log(`Hase have maro bhai ${firstName}`);
// }

console.log(Pa6i_Key_Mane_Mayro());
// output
// Hase have maro bhai Devarsh
