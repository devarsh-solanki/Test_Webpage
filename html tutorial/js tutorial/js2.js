'use strict';

function userInfo(firstName,lastName,age,email,address){
    const user = Object.create(userInfo.prototype);
    user.firstName = firstName;     
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    return user;
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

const user1 = userInfo("devarsh","solanki",21,"solanki@gmail.com","hifli botad");
console.log(user1);

console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

// function hello(name){
//     let student = Object.create(hello.prototype);
//     student.name = name; 
//     return student;
// };

// hello.prototype.about = function(){
//     console.log(`${this.name} is your name`);
// }
// let student1 = hello("devarsh");
// student1.about();


//---------------------------------------------------------------------------------------------------------------