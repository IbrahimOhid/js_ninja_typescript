// union data type 💚💛💚

let id: number | string = 'ohid';
console.log(id);

type userId = number | string | boolean | null;

let usersInfo: userId = true;
usersInfo = 'ibrahim';
usersInfo = 3;
usersInfo = null;

// intersection 💚💛💚

type Admin = {
    name : string
}

type View = {
    id : number
}

type  AdminInfo = Admin & View;

const adminUser: AdminInfo = {name: 'Ibrahim', id: 3}
console.log(adminUser);

// literal 💚💛💚

let direction : 'up' | 'down' | 'left' | 'right';
direction = 'left'
console.log(direction);

// object 💚💛💚

type UserInfo = {
    firstName: string,
    lastName: string,
    age: number,
    fullName: (uppercase: string)=> string
}

const user : UserInfo = {
    firstName : 'ibrahim',
    lastName : 'Ohid',
    age: 27,
    fullName(uppercase){
        if(uppercase){
            const result = `I am ${this.firstName} ${this.lastName}. i am ${this.age} Old.`;
            return result.toUpperCase();
        }
        return this.firstName + ' ' + this.lastName;
    }

}
const result = user.fullName('uppercase');
console.log(result);