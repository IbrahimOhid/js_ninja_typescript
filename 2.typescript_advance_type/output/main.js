"use strict";
// union data type 💚💛💚
let id = 'ohid';
console.log(id);
let usersInfo = true;
usersInfo = 'ibrahim';
usersInfo = 3;
usersInfo = null;
const adminUser = { name: 'Ibrahim', id: 3 };
console.log(adminUser);
// literal 💚💛💚
let direction;
direction = 'left';
console.log(direction);
const user = {
    firstName: 'ibrahim',
    lastName: 'Ohid',
    age: 27,
    fullName(uppercase) {
        if (uppercase) {
            const result = `I am ${this.firstName} ${this.lastName}. i am ${this.age} Old.`;
            return result.toUpperCase();
        }
        return this.firstName + ' ' + this.lastName;
    }
};
const result = user.fullName('uppercase');
console.log(result);
const person = {
    firstName: 'Mohammad',
    lastName: 'Ibrahim',
    age: 27,
    fullName(casing) {
        if (casing) {
            const result = `I am ${this.firstName} ${this.lastName}`;
            return result.toUpperCase();
        }
        return `I am ${this.firstName} ${this.lastName}`;
    }
};
const results = person.fullName('person');
console.log(results);
const allUser = {
    userName: 'Rahim',
    Id: 393,
    isRealUser: true
};
const nested = {
    allInfo: {
        designation: 'Program Assistant',
        experience: 3
    }
};
const resultUser = "age";
