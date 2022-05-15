'use strict';

let userFunc = {
    about : function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "la la la la la la la la";
    }
}

function userInfo(firstName,lastName,age,email,address){
    const user = Object.create(userFunc); // or // const user = {};
    user.firstName = firstName;     // Object.create(userFunc); ---> userFunc methods are create in the __prop__
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    user.about = userFunc.about;
    user.is18 = userFunc.is18;
    user.sing = userFunc.sing;
    return user;
}

let user1 = userInfo("devarsh","solanki",20,"solanki@gmail.com","hifli botad");
console.log(user1);
console.log("about method :",user1.about());
console.log("is18() method will return :",user1.is18());
console.log("sing method :",user1.sing());


// __proto__ & [[Prototype]] are same but prototype is different.

if(userInfo.__proto__){
    console.log("__proto__ is present");  // present hai.....
}else{
    console.log("__proto__ is not present");
}

// -------------     *Note    -------------

// prototype is a blank space or blank object{} that are predifined inside the function.
// we can store our own created objects or functions inside the prototype.


// --------------------------------------------------------------------------------------------------------------------------------