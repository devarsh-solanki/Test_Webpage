'use strict';

let mood = "Romentic"
function hello(){
    let mood = "Happy";
    let person = () =>{
        let mood = "Sad";
        console.log(`Current mood : ${mood}`);
    }
    console.log("hello brother");
    person();
}

hello();


let sum = (n1,n2,n3) => {
    return n1+n2+n3;
}

function total(callback){
    return callback(3,4,5);
}

console.log(total(sum));


let number = [1,2,3,4,5,6,7,8,9,10];

// function okbaba(number,index){
//     console.log(number,index);
// }
// number.forEach(okbaba);

number.forEach(function(number,index){
    console.log(`${number}*2 : ${number*2} at ${index} <-- index`);
});


let num = [1,2,3,4,5];

// function official(n){
//     return n*n;
// }

// console.log(num.map(official))
console.log("hello");
console.log(num.map(function(n){
    return n*n;
}));

let returnArray = num.map(n => {
    return n*n;
});
console.log("map",returnArray);


let rajaOk = [1,2,3,4,5,6,7,8,9,10];
console.log("filter :",rajaOk.filter(id => {
    return id % 2 === 0 ;
}));  // or store it in the variable and print it.


let exa = rajaOk.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},100);

console.log("reduce :",exa);  // reduce method


let cart = [
    {name : "devarsh",item : "A.C",price : 45000},
    {name : "dev",item : "T.V",price : 24000},
    {name : "vishant",item : "laptop",price : 110000},
    {name : "vivek",item : "mobile",price : 82000}
];

let cartTotal = cart.reduce((totalPrice,currentValue) => {
    return totalPrice + currentValue.price;
},0); // 0 is initial value of the totalprice

console.log("Cart total : ",cartTotal);

// LoW To High  ---> create clone for save the original cart
let LowToHigh = cart.slice(0).sort((a,b) => {
    return a.price - b.price;
});
console.log("Cart --> sort cart items by price(Ascending order) :",LowToHigh);


let rrr = [10,56,25,67,90,14];
rrr.sort((a,b) => {
    return a-b;
});
console.log("Sort : ",rrr);

let mapOk = new Map();
mapOk.set("name","devarsh");
mapOk.set("age",21);
mapOk.set(1,"one");
mapOk.set([1,2,3,4,5],["one","two","three","four","five"]);
mapOk.set("person1",{name:"vivek",gender:"male"});
console.log("name of person1 :",mapOk.get("person1").name);

for(let key of mapOk){
    console.log(key);
}
console.log("1 : ",mapOk.get(1));
console.log("Map : ",mapOk);
console.log("Keys",mapOk.keys());
console.log("Values",mapOk.values());

let person = {
    name : "devarsh",
    age : 21,
    songs : {happy : "Me rang sharbatoo ka",sad : "Agar tum sath ho"}
};

console.log(person?.songs?.happy); // optional chaining --> it will return "Me rang sharbatoo ka"
console.log(person?.name?.happy);  // it will return undefined


// this keyword
let personFunc = function() {
    console.log(`name : ${this.name} & age : ${this.age}`);
}

let person1 = {
    name : "vivek",
    age : 21,
    songs : {happy : "Me rang sharbatoo ka"},
    about : personFunc
};

let person2 = {
    name : "devarsh",
    age : 21,
    songs : {sad : "Agar tum sath ho"},
    about : personFunc
};

person1.about();
person2.about();

function jkflipFlop(){
    console.log(`hello friends i am ${this.fNameok} ${this.lNameok}`);
}

let okBaba1 = {
    fNameok : "vishant",
    lNameok : "bhavsar",
    about : jkflipFlop
}
let okBaba2 = {
    fNameok : "vivek",
    lNameok : "yadav",
    about : jkflipFlop
}

okBaba1.about();
okBaba2.about();
okBaba2.about.call(okBaba1); // it will return "hello friends i am vishant bhavsar"

console.log(window);






// oops

// let userFunc = {
//     about : function(){
//         return `${this.firstName} is ${age} year old`;
//     },
//     is18 : function(){
//         return age >= 18;
//     }
// };

function userInfo(firstName,lastName,age,email,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    user.about = function(){
        return `${this.firstName} is ${age} year old`;
    };
    user.is18 = function(){
        return age >= 18;
    };
    return user;
}

let user1 = userInfo("devarsh","solanki",20,"solanki@gmail.com","hifli botad");
console.log(user1);
console.log("call about method :",user1.about());