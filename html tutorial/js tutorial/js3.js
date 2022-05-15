'use strict';

function userInfo(firstName,lastName,age,email,address){
    this.firstName = firstName;     
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;
}

userInfo.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};

userInfo.prototype.is18 = function(){
    return this.age >= 18;
};

userInfo.prototype.sing = function(){
    return "la la la la la la la la";
};

const user1 = new userInfo("devarsh","solanki",21,"solanki@gmail.com","hifli botad");
console.log(user1);

console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

console.log(Object.getPrototypeOf(user1));

let arr = [1,2,3];
console.log(Object.getPrototypeOf(arr));


// ----------------------------------------------------------------------------------------------------------------