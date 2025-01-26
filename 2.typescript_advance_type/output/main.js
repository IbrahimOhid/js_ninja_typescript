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
