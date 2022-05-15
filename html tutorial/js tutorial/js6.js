'use strict';

class person{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }

    static host = "vivek yadav"; 

    get fullName(){
        return `Full name : ${this.fName} & ${this.lName}`
    }
    set newName(fullName){
        let [fName ,lName] = fullName.split(" ");
        this.fName = fName;
        this.lName = lName;
    }
}

let user = new person("Devarsh","Solanki");
user.newName = "Vishant Bhavsar";
console.log(user);

console.log("Host name :",person.host);
console.log(Object.getPrototypeOf(user));

console.log(user.fullName);
