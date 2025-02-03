"use strict";
// object oriented 
// object oriented Principle 💚💛💚
// => Encapsulation
// => Abstraction
// => inheritance
// => polymorphism
class UserInfo {
    constructor(name, age, isSkilled) {
        this.name = name,
            this.age = age,
            this.isSkilled = isSkilled;
    }
    displayInfo() {
        console.log(`i am ${this.name}. i am ${this.age} years old.`);
    }
}
const user = new UserInfo('Ibrahim', 27, true);
console.log(user.displayInfo());
class BankAccount {
    constructor(balance, id) {
        this.balance = balance;
        this.id = id;
        this.balance = balance,
            this.id = id;
    }
}
const balance;
