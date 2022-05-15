'use strict';

console.log("hello world");

// var,let,const  -------------------------------------------------------------------------------

let firstName = 'Devarsh solanki';
console.log("my name is ", firstName); 

let name1 = `hello
    friends
       good morning`;
console.log(name1);

let firstNameLen = firstName.length;
console.log("length of firstName :",firstNameLen);

let age = "20";
let position = `Hello guys,My self ${firstName} and i'm ${age} years old`;
console.log(position);

let newMode = firstName[firstName.length-2]
console.log(newMode);

let royal = firstName.slice(0,4);
console.log(royal);

// let royal1 = firstName.substr(0,5);
let royal1 = firstName.toUpperCase();
console.log(royal1);

console.log(Number.MAX_SAFE_INTEGER);
// console.log(2**53-1);

// console.log(Number.MIN_SAFE_INTEGER);

console.log(4**4);

console.log(2.1e4);

let numFormet = 10_00_000;
console.log(numFormet+1_11_111);

let increment = 0;
increment++;    // ++increment
console.log(increment);

let decrement = 5;
decrement--;    // --decrement
console.log(decrement);

let inc = 5;
// console.log(inc++);
console.log(++inc);
// console.log(inc);

let n1 = 12;
let n2 = "12";  // let n2 = "12hello";
// n2 = parseInt(n2);
console.log(n1+parseInt(n2));

// console.log(typeof n1);
// console.log(typeof n2);

let digit = 12.7;
console.log(Math.round(digit));

let digitDown = 12.2;  // or 12.99999999999
console.log(Math.floor(digitDown));

let digitUp = 12.7;  // or 12.00000001
console.log(Math.ceil(digitUp));

let positive = -124;
console.log(Math.abs(positive));

// min & max  -------------------------------------------------------------------------------
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);

// let minNum = 10;
// let maxNum = 20;
// let RandomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum);
// console.log(RandomNum);

let minR = 10;
let maxR = 20;
let randomR = Math.floor(Math.random()*(maxR-minR+1)+minR); // include 20 also
console.log(randomR);

// #Bigint Number  -------------------------------------------------------------------------------

let newNumber = 10n;
newNumber = newNumber + 10n;
console.log(newNumber);

let popat = Number.MAX_SAFE_INTEGER;
console.log(popat);

let str1 = "17";
let str2 = "100";
let sum = +str1 + +str2;
console.log(sum);  // output = 117 type --> Number

for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i);

let array = ["banana","raja","popat","jaman","joy"];
console.log(array);

// alert("hello world");
// [1,2,3,4,5].forEach(alert);

// Primitive vs Reference type  -------------------------------------------------------------------------------

// Primitive  -------------------------------------------------------------------------------
let item1 = 5;
let item2 = item1;
item1++;
console.log("item1",item1);
console.log("item2",item2);

// Reference  -------------------------------------------------------------------------------
let fruit = ["banana","apple","mango","graps","orange"];
let fruits = fruit;
console.log(fruit);
console.log(fruits);
fruit.push("badam");
console.log(fruit);
console.log(fruits);

// clone  -------------------------------------------------------------------------------
let bg = ["banana","apple"];
let gb = bg;
let pk = ["banana","apple"];
console.log(bg === gb);  // true
console.log(bg === pk);  // false 
bg.push("raja");
console.log(bg);
console.log(gb);
console.log(pk);
let array3 = bg.slice(0);
console.log(bg === array3);    // false
bg.push("april");
console.log(bg);
console.log(array3);

let array4 = [].concat(bg);
console.log(bg === array4);    // false

// spread operator ------------------------------------------------------------
let array5 = [...bg];
console.log(bg);
console.log(array5);
console.log(bg === array5); // false
bg.push("peacock");
console.log(bg);
console.log(array5);

let array6 = [].concat(bg,"item6","item7");
let array7 = bg.slice(0).concat(["item1","item2"]);
console.log(array6);
console.log(array7);

let app1 = [1,2,3,4];
let app2 = [4,5,6,7];
let app3 = [...app1,...app2];
console.log(app3);

// for of loop -----------------------------------------------------------------
const fruits1 = ["banana","mango","orange","grapes","apple","coconate"];
for(let fruit in fruits1){
    console.log(fruit);
}
let ft = [];
for(let fruit of fruits1){
    ft.push(fruit.toUpperCase());
}
console.log(ft);

// array destructuring -------------------------------------------------------------
let ft1 = ["banana","apple","mango","orange","grapes"];
let [value1,value2] = ft1;
// for skip the value
// let [value1, ,value2] = ft1; // value1 = "banana" , value2 = "mango"
console.log(value1," ",value2); // value1 = "banana" , value2 = "apple"

let myNew = ft1.slice(2);
console.log(myNew);

// object -------------------------------------------------------------------------
const key = "email";
const student = {
    name:"devarsh",
    age:20,
    hobbies:["cricket","singing","playing chess","listening music"]
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.hobbies);

student.gender = "male";
console.log(student);

// note --> now we get email inside the object 
student[key] = "rajabhoj07@gmail.com";
// student["email"] = "rajabhoj07@gmail.com";
console.log(student);

for(let i in student){
    // console.log(student[i]);
    console.log(`${i} : ${student[i]}`);
}

// example --------------------------------------------------------------------------
let key1 = "name";
let key2 = "age";
let key3 = "hobbies";
let key4 = "email";

let ok1 = "devarsh";
let ok2 = 20;
let ok3 = ["cricket","chess","listening music"];
let ok4 = "jkflipflop@gmail.com";

const devarsh = {};
devarsh[key1] = ok1;
devarsh[key2] = ok2;
devarsh[key3] = ok3;
devarsh[key4] = ok4;
console.log(devarsh);
// ........easy.............
const tony = {
    [key1] : ok1,
    [key2] : ok2,
    [key3] : ok3,
    [key4] : ok4     
};
console.log(tony);
// ......................... 
// spread opreater--------------------------------------------------------
let newArray = [..."abc"];
console.log(newArray);  // return --> ['a', 'b', 'c']

// spread opreater in objects---------------------------------------------
const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
const obj2 = {
    key1 : "uniquqValue",
    key3 : "value3",
    key4 : "value4"
};
let newObj = {...obj1,...obj2,key6:"value5"};
console.log(newObj);

let newObj2 = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(newObj2);
console.log(newObj2[17]);

// object destructering-----------------------------------------------------------
let studentObj = {
    fName : "devarsh",
    sName : "solanki",
    age : 20,
    fav_language : ["java","python","js"]
};

// let val1 = newObj3.key1;
// let val2 = newObj3.key2;

let {fName,sName,...newObj5} = studentObj;
console.log(fName , sName);

// let {fName:on1,sName:on2,...newObj5} = studentObj;  // key1 --> change variable name
// console.log(on1 , on2);
console.log(newObj5);

//-----------------------------------------------------------------------------------
const users = [
    {no : 1,fyName : "devarsh",gender : "male"},
    {no : 2,fyName : "dev",gender : "male"},
    {no : 3,fyName : "devang",gender : "male"}
]; 

for(let user of users){
    console.log(user);
}

//nested destructering---------------------------------------------------------------------
const [user1,user2,...user3] = users;
console.log(users);

// print firstname of the first array's object & third array's gender --------------------

// function -------------------------------------------------------------------------------
const [{fyName}, , {gender}] = users;
console.log(fyName);
console.log(gender);

function sum(num1,num2){
    return num1+num2;
}
console.log(sum(5,4));

// even-odd
function even_Odd(number){
    if(number % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(even_Odd(10));

// function expression------------------------------------------------------------------
let toUpper = function(name){
    return name.toUpperCase();
}
console.log(toUpper("devarsh"));

// let toreverse = function(name){
//     let start = name[0];
//     let end = name[name.length()-1];
//     while(start<end){
//        if(name[start] === name[end]){
//            start++;
//            end--;
//        }
//     }
// }
// console.log(toreverse("devarsh")); 

let find = function(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
let arr = [10,5,6,3,8,1,90];
console.log(find(arr,6));

// arrow function---------------------------------------------------------------------
let jaker = (name) => { // let jaker = name => {}; <-- for only one parameter  
    return name.toUpperCase();
}
console.log(toUpper("devarsh"));

// hoisting -- use it only if create function --> call the function before that declaration
hello();
function hello(){
    return "hello world";
} // output --> 'hello world'

// function inside function------------------------------------------------------------
function func(){
    let hello = () =>{
        console.log("hello brother");
    }
    const sumof = (n1,n2) => {
        return n1 + n2;
    }
    const mulof = (n1,n2) => {
        return n1 * n2;
    }
    console.log("hello guys welcome ton my webpage");
    console.log(sumof(5,4));
    console.log(mulof(5,4));
}
func(); 

// output //
        // hello guys welcome ton my webpage
        // VM165:12 9
        // VM165:13 20

// lexical scope-----------------------------------------------------------------------------
const sad = "happy";
function happy(){
    const sad = "sad";
    function mood(){
        console.log(`happy er sad? : ${sad}`);
    }
    console.log("hello brother");
    mood();
}
happy();
// output //
        // hello brother
        // VM177:5 happy er sad? : sad

        /* Note ----> first check the variable inside the function. if the variable is found then function can simply print it  */
        // but if the variable not present inside the function then check it on the lexical environment. if again variable is not found 
        // then check it on the globel environment.

// block scope & function scope -------------------------------------------------------------------
// let and const are block scope*********
{
    let firstName = "devarsh";
    console.log(firstName);
}
// console.log(firstName); <----- invalid
     /*we can not access the variable value which are created inside the blocks.but can access them inside the respective block only*/

{
    let firstName = "java";
    console.log(firstName);
} // we can declare same variable name in different blocks and access them inside the block.

// var is function scope*********
{
    var okName = "hello world";
    console.log(okName); // output -->hello world
}
console.log(okName); // output -->hello world

// let's create simple function for better uunderstand the blocks-------------------------------------

// example [1] -- let || const
function simple(name){
    let java = "usefull"; // we can also use const here
    console.log(java);
}
console.log(simple("devarsh"));
console.log(java)  // <---- invalid

//example [2] -- var
if(true){
    var jp = "usefull";
    console.log(jp);
}
console.log(jp);

let sumTwo = (a,b=1) => {
    return a + b;
}
let sum = sumTwo(5);
console.log(sum); // output --> 6

// rest oparater-------------------------------------------------------------------------------------------
function operate(a,b,...c){
     console.log(`a is ${a}`); // 1
     console.log(`b is ${b}`); // 2
     console.log(`c is ${c}`); // 3,4,5,6,7,8
     console.log("c is",c); // (6) [3, 4, 5, 6, 7, 8]
}
ongotpointercapture(1,2,3,4,5,6,7,8);

function totalSum(...number){
    let total = 0;
    for(let num of number){
        total += num;
    }
    return total;
}
console.log(totalSum(1,2,3,4,5)); // output --> 15

// parameter destructuring------------------------------------------------------------------------------------
let openObj = {                                         
    nameOk : "hello",                                       
    lastOk : "friends",                         
    ageOk : 20
};

let openFunc = (open) => {
    console.log(open.nameOk);
    console.log(open.lastOk);
    console.log(open.ageOk)
}
openFunc(openObj);

// let openFuncj = (nameOk,lastOk,ageOk) => {
//     console.log(nameOk);
//     console.log(lastOk);
//     console.log(ageOk)
// }
// openFunc(openObj);
// output --> {nameOk: 'hello', lastOk: 'friends', ageOk: 20}

// callback function--------------------------------------------------------------------------------------------

function raja(name){
    console.log("hello friends");
    console.log(`my name is ${name}`);
}
function bhoj(callback){
    console.log("hey brother what's up");
    callback("vivek");
}
bhoj(raja);

// output***********
        // hey brother what's up
        // VM144:2 hello friends
        // VM144:3 my name is vivek
// function returning function ------------------------------------------------------------------------------------
function vivek(){
    function yadav(){
        console.log("hello vivek");
    }
    return yadav;
}
vivek();
// output********
        // ƒ yadav(){
        //     console.log("hello vivek");
        // }
let ans = vivek(); // here ans is work as function
console.log(ans());
// output --> hello vivek

let okNumber = [4,3,5,2,1];
function chiku(arr,index){
    console.log(`Index is ${index} number is ${arr}`);
}
okNumber.forEach(chiku);

okNumber.forEach(function chiku(arr,index){
    console.log(`Index is ${index} number is ${arr}`);
});
// output************
        // Index is 0 number is 4
        // Index is 1 number is 3
        // Index is 2 number is 5
        // Index is 3 number is 2
        // Index is 4 number is 1

// okNumber.forEach(function chiku(arr,index){
//     console.log(`number is : ${arr} & multiply by 2 is :  ${arr*2}`);
// });

let jkName = [
    {fnana : "devarsh"},
    {fnana : "vivek"},
    {fnana : "vishant"},
    {fnana : "rajkumar"}
];

jkName.forEach(function(user,index){
    console.log(user.fnana," ",index);
});
// output**********
        // devarsh   0
        // VM230:2 vivek   1
        // VM230:2 vishant   2
        // VM230:2 rajkumar   3


// map-----------it will return array--------------------------------------------------
function jkarta(user){
    return user*user;
};
let okarr = okNumber.map(jkarta);
console.log(okarr);
// output --> (5) [16, 9, 25, 4, 1] 

let bhai = jkName.map((user)=>{
    return user.fnana;
});
console.log(bhai);
// output --> ['devarsh', 'vivek', 'vishant', 'rajkumar']


// filter---------check boolean condition and return array--------------------------------------
let rajaOk = [1,2,3,4,5,6,7,8,9,10];
let store = rajaOk.filter(function(id){
    return id%2 === 0 ;
});
console.log(store);
// output--> [2, 4, 6, 8, 10]


// reduce-------------------------------------------------------------------------------------------------
let sumOk = rajaOk.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue;
},100); // *note* --> here 100 is initial value of accumulator 
console.log(sumOk); // output --> 55


// *****************realistic example*******************************************
let cart = [
    {product: "mobile" , buy: 1 , price: 18000},
    {product: "laptop" , buy: 1 , price: 60000},
    {product: "tv" , buy: 1 , price: 22000},
    {product: "Ac" , buy: 1 , price: 28000}
];

let shopingTotal = cart.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue.price;
},0); // here 0 is initial value of accumulator 
console.log(shopingTotal); // output --> 128000
// **************************************************************************************

// sort----------------------------------------------------------------------------------------------------
let userId = [5,90,233,12,87,45,100];
userId.sort((a,b)=>{
    // return b-a; // it will return [233, 100, 90, 87, 45, 12, 5]
    return a-b;
});
console.log(userId); 

// *************************************************************************************
let shop = [
    {product_1: "mobile" , buyId: 1 , price: 18000},
    {product_2: "laptop" , buyId: 1 , price: 60000},
    {product_3: "tv" , buyId: 1 , price: 22000},
    {product_4: "Ac" , buyId: 1 , price: 28000}
];

// slice method is use for clone the given array
let lowToHigh = shop.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
console.log(lowToHigh);
// output*********
        // 0: {product_1: 'mobile', buyId: 1, price: 18000}
        // 1: {product_3: 'tv', buyId: 1, price: 22000}
        // 2: {product_4: 'Ac', buyId: 1, price: 28000}
        // 3: {product_2: 'laptop', buyId: 1, price: 60000}
        // length: 4
        // [[Prototype]]: Array(0)

let highToLow = shop.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(highToLow);
// output*********
        // 0: {product_2: 'laptop', buyId: 1, price: 60000}
        // 1: {product_4: 'Ac', buyId: 1, price: 28000}
        // 2: {product_3: 'tv', buyId: 1, price: 22000}
        // 3: {product_1: 'mobile', buyId: 1, price: 18000}
        // length: 4
        // [[Prototype]]: Array(0)

// *************************************************************************************

// find----------------------------------------------------------------------------------------------------
let animal = ["rabbit","dogy","cat","cow","elephant"];

let aniFind = animal.find((ani)=>{
    return ani.length === 3;
});
console.log(aniFind); // return first occurence ---- output --> cat

let userPro = [
    {okId : 1 , okName : "devarsh"},
    {okId : 2 , okName : "dev"},
    {okId : 3 , okName : "vivek"},
    {okId : 4 , okName : "devang"},
    {okId : 5 , okName : "vishant"},
];

let userInfo = userPro.find((callback)=>{
    return callback.okId === 3;
});
console.log(userInfo);
// output --> {okId: 3, okName: 'vivek'}

//every----------------------------------------------------------------------------------------------------
let allOf = [1,3,,5,7,9,11];
let check = allOf.every((callback)=>{
    if(callback % 2 !== 0){
        return true;
    }
});
console.log(check); // output --> true

let shopAll = [
    {product_1: "mobile" , buyId: 1 , price: 18000},
    {product_2: "laptop" , buyId: 1 , price: 60000},
    {product_3: "tv" , buyId: 1 , price: 22000},
    {product_4: "Ac" , buyId: 1 , price: 28000}
];

let correct = shopAll.every((callback)=>{
    if(callback.price <= 60000){
        return true;
    }
});
console.log(correct); // output --> true

// some----------------------------------------------------------------------------------------------------
let numOk = [5,3,1,8]; // if one or more number are even then return true
let paper = numOk.some((callback)=>{
    if(callback % 2 === 0){
        return true;
    }
});
console.log(paper);

// fill----------------------------------------------------------------------------------------------------

let att = new Array(10).fill(-1); // output --> [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
console.log(att);
let arrayTop = [1,2,3,4,5,6,7,8,9,10];
arrayTop.fill(true,2,5);
console.log(arrayTop); // output --> [1, 2, true, true, true, 6, 7, 8, 9, 10]


// splice method
// start,delete,insert-------------------------------------------------------------------------------------
// *Note* -----> arrJk.splice(index,delete,insert);

let arrJk = ["item1","item2","item3","item4","item5"];
arrJk.splice(1,1);
console.log(arrJk); // output --> ['item1', 'item3', 'item4', 'item5']
arrJk.splice(1,0,"item2");
console.log(arrJk); // output --> ['item1', 'item2', 'item3', 'item4', 'item5']
arrJk.splice(1,2,"Winner","losser");
console.log(arrJk); // output --> ['item1', 'Winner', 'losser', 'item4', 'item5']


//Iterables ---> example : Array,String

// sets
//it is iterables--------> jispe hum for of loop laga sake----------------------------------------------------------
// order is not guaranted
// no inddex based access
// no duplicate allowed (unique items only)

let openSet = new Set([1,2,3,4,5,6,7]);
openSet.add(2);
openSet.add(2);
console.log(openSet); // output --> [1,2,3,4,5,6,7]

// it will return boolean value
if(openSet.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}  

for(let item of openSet){
    console.log(item); // output --> 1 2 3 4 5 6 7
}

let jaka = [1,2,3,3,4,4,5,6,7,7,8,9,9,9,10];
let jakaSet = new Set(jaka);
console.log(jakaSet); // output --> [1,2,3,4,5,6,7,8,9,10]

let count = 0;
for(let i of jakaSet){
    count++;
}
console.log(count); // output --> 10

// map--------key value pair----------------------------------------------------------------------------------------------
let topper = new Map();
topper.set("ftname","devarsh");
topper.set("age" , 20);
topper.set("college" , "NSIT");
topper.set(1,"one");
console.log(topper.get("nameOkg")); // devarsh
console.log(topper.get("age")); // 20
console.log(topper.get(1)); // NSIT
console.log(topper.get("college")); // one
 
// store data in ordered fashion

console.log(topper.keys());
// {'ftname', 'age', 'college', 1}

for(let key of topper.keys()){
    console.log(key);
} // output --> ftname age college 1

for(let [key,value] of topper){ // use array destrustruring 
    console.log(key,value);
}
// output********
        // ftname devarsh
        // VM86:2 age 20
        // VM86:2 college NSIT
        // VM86:2 1 'one'

// map use with objects

let person1 = {
    ftName : "devarsh",
    age : 20
}

let extraInfo = new Map();
extraInfo.set(person1 , {hello : "brother",month : "april"});
console.log(extraInfo.get(person1));
// output --> {hello: 'brother', month: 'april'}

console.log(extraInfo.get(person1).hello); // brother
console.log(extraInfo.get(person1).month); // april
console.log(person1.ftName); // devarsh
console.log(person1.age); // 20

// object cloning
let botad = {
    key1 : "value1",
    key2 : "value2"
}

let top2 = botad;
botad.key3 = "value3";
console.log(top);
console.log(top2);
// output --> {key1: 'value1', key2: 'value2', key3: 'value3'}

let top3 = {...top};
top.key4 = "value4";
console.log(top);
console.log(top3);

// optional chaining------------------------------------------------------------------------------------------------------
let okbaba = {
    nameOk : "hello",
    movie : "KGF",
    jk : {flipflip : "optimal"}
}

console.log(okbaba?.nameOk); // hello
console.log(okbaba?.movie?.take); // undefined

// method-------------------------------------------------------------------------------------------------------------------
// function inside object // this keyword

let anandBaba = {
    fNameok : "devarsh",
    lNameok : "solanki",
    age : 20,
    about : function(){
        console.log(`hello friends i am ${this.fNameok} ${this.lNameok}`);
    }
}
anandBaba.about();
// output --> hello friends i am devarsh solanki

function jkflipFlop(favourite_song,movie){
    console.log(`hello friends i am ${this.fNameok} ${this.lNameok}`,"phir kabhi","m_s_dhoni");
}

function jkflipFlopTpoint(favourite_song,movie){
    console.log(`hello friends i am ${this.fNameok} ${this.lNameok}`,favourite_song,movie);
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

okBaba1.about(); // okBaba1?.about();
// output --> hello friends i am vishant bhavsar
okBaba2.about(); // okBaba2?.about();
// output --> hello friends i am vivek yadav
// okBaba1.about(this);
// okBaba2.about(window); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// call function --------------------------------------------------------------------------------------------------------
let okbaba3 = {
    fNameok : "vishant",
    lNameok : "bhavsar"
}

okBaba1.about.call(okbaba3); // output --> hello friends i am vishant bhavsar phir kabhi m_s_dhoni
        // same output //
jkflipFlop.call(okbaba3); // koutput --> hello friends i am vishant bhavsar phir kabhi m_s_dhoni

jkflipFlopTpoint.call(okbaba3,"phir kabhi","m_s_dhoni");
// apply & bind function --------------------------------------------------------------------------------------------------------
jkflipFlopTpoint.apply(okbaba3,["jarman","local"]); // pass the list insted of normal arguments
// output --> hello friends i am vishant bhavsar jarman local

let chok = jkflipFlopTpoint.bind(okbaba3,"jarman","local");
chok(); 
// putput --> hello friends i am vishant bhavsar jarman local

 // note ------------> arrow function have not their own [this}-------------------------------------------------------------------
 // & we can not change arrow function {this}

 // simple way to create method inside the object
 let okBaba4 = {
     fNametata : "vishant",
     sNametata : "vivek",
     about(){
         console.log(this.fNametata,this.sNametata);
     }
 }
 okBaba4.about(); // output --> vishant vivek

 // create function-----------
function createUser(fNamekaka,lNamekaka,age,email,password){
     let userKaka = {};
     // let userKaka2 = Object.create(okBaba4);
     userKaka.fNamekaka = fNamekaka;
     userKaka.lNamekaka = lNamekaka;
     userKaka.age = age;
     userKaka.email = email;
     userKaka.password = password
     return userKaka;
 }

let newJk = createUser("devarsh","solanki",20,"solanki@gmail.com","devarsh3202");
console.log(newJk);
// output***********
        // {fNamekaka: 'devarsh', lNamekaka: 'solanki', age: 20, email: 'solanki@gmail.com', password: 'devarsh3202'}
        // age: 20
        // email: "solanki@gmail.com"
        // fNamekaka: "devarsh"
        // lNamekaka: "solanki"
        // password: "devarsh3202"

// __proto__ & [[prototype]]  are same
// prototype <-- different then above..

let objKaka = {
    fbName : "devarsh",
    wpName : "solanki"
}
let objKaka2 = Object.create(objKaka); // first check itself then check passed object
objKaka2.fbName = "raja";
console.log(objKaka); // output --> {fbName: 'devarsh', wpName: 'solanki'}
console.log(objKaka2); // output --> {fbName: 'raja'}
//  [[Prototype]]: Object
// fbName: "devarsh"
// wpName: "solanki"
console.log(objKaka2.wpName); // output --> solanki

console.log(objKaka2.__proto__); // output --> {fbName: 'devarsh', wpName: 'solanki'}


// ------------------------------------------------------------------------------------------------------------------------------