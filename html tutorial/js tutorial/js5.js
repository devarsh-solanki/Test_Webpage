'use strict'

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }
    isCute(){
        return this.age <= 1; 
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }

    get eat(){
        return `eat method : ${this.name} is eating`
    }
    setAbout(name,age,speed){
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
}

let dog = new Dog("devarsh",1,1);
console.log(dog);
console.log(dog.eat);
console.log(dog.isCute());

dog.setAbout("vishant",21,2);
console.log(dog);