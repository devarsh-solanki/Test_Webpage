'use strict';

class CreatUser{
    constructor(firstName,lastName,age,email,address){
        console.log("constructor called");
        this.firstName = firstName;     
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.email = email;
    }

    about(){
        return `${this.firstName} is ${this.age} years old`;
    };
    
    is18(){
        return this.age >= 18;
    };
    
    sing(){
        return "la la la la la la la la";
    };
}

const user1 = new CreatUser("devarsh","solanki",21,"solanki@gmail.com","hifli botad");
console.log(user1);
console.log(user1.about());


// -------------------------------------------------------------------------------------------------------------------