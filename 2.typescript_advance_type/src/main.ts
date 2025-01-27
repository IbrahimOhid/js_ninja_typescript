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

// object with type alias 💚💛💚

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


// object with interface 💚💛💚
interface PersonInfo{
    firstName: string,
    lastName: string,
    age: number,
    fullName:(casing: string) => string
}

const person: PersonInfo = {
    firstName : 'Mohammad',
    lastName : 'Ibrahim',
    age : 27,
    fullName(casing){
        if(casing){
            const result = `I am ${this.firstName} ${this.lastName}`;
            return result.toUpperCase();
        }
        return `I am ${this.firstName} ${this.lastName}`;
    }
}
const results = person.fullName('person');
console.log(results);

// index signature 💚💛💚

// type allUserInfo = {
//     [key: string] : string | number | boolean;
// }

interface allUserInfo{
    [key: string] : string | number | boolean;
}

const allUser: allUserInfo = {
    userName : 'Rahim',
    Id : 393,
    isRealUser : true
}

// nested 💚💛💚

type NestedInfo ={
    [key: string] : {
        [key: string] : string | number;
    }
}
 
const nested: NestedInfo = {
    allInfo:{
        designation : 'Program Assistant',
        experience : 3
    }
}


// type mapping 💚💛💚

type User = {
    name: string,
    age: number
}

type refUser = keyof User;

const resultUser : refUser = "age";


type UserName = {name: string, age: number};
type PartialUser = Partial<UserName>;
type ReadOnlyUser = Readonly<UserName>;
type OmitUser = Omit<UserName, "name">;