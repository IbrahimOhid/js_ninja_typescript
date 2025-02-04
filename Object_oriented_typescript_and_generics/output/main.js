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
// => Encapsulation Example 💛💛💛
class BankAccount {
    constructor(balance, id) {
        this.balance = balance;
        this.id = id;
        this.balance = balance;
        this.id = id;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Amount Greater Than 0');
        }
        this.recordTransaction();
        this.balance += amount;
    }
    recordTransaction() {
        console.log('Record Amount');
    }
    withDraw(amount) {
        if (amount > this.balance) {
            throw new Error('Not Available Balance');
        }
        this.recordTransaction();
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(10, 'rahim23');
console.log(account);
account.deposit(1001);
account.withDraw(1000);
console.log(account.getBalance());
