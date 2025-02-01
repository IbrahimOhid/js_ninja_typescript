// Exercise 1: Annotate Variables ⤵

let names: string = "Alice";
let age: number = 30;
let isEmployed: boolean = true;
let favoriteColors: string[] = ["red", "blue", "green"];
let randomData: {id:number, value: string} = { id: 1, value: "random" };


// Exercise 2: Function Parameters and Return Type ⤵

function calculateArea(radius : number): number {
    return 3.14 * radius * radius;
  }
calculateArea(5)  


// Exercise 3: Union Types ⤵


function formatId(id: string | number): string | number {
    //if id is string log the message `Your ID is: ${id.toUpperCase()}`
   //otherwise `Your ID is: ${id}`
  if( typeof id === 'string'){
    return `Your ID is: ${id.toUpperCase()}`;
  }
    else{
        return `Your ID is: ${id}`;
    }
 }
formatId('ibrahim');


// Exercise 5: Tuples ⤵

let result: [number, string] = [200, "Success"];


// Exercise 6: Enum Conversion ⤵

enum Status{
    Active = "active",
    Inactive = "inactive",
    Pending = "pending",
  };
console.log(Status.Active);  

//   Exercise 7: Type Assertions⤵

// let input = document.getElementById("user-input") as HTMLInputElement;
let input = <HTMLInputElement> document.getElementById("user-input");
input.value = "Hello, world!";

// Exercise 8: keyof ⤵ 

// function getProperty(obj, key) : string | number {
//   return obj[key];
// }
// getProperty({id: 2, userName: 'Ibrahim'}, ['karim'])

// Exercise 9: Nested Objects ⤵

type Employee = {
  [key: string] : string | number;
}

type CompanyInfo = {
  name: string,
  employees: Employee[];
}


let company : CompanyInfo = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
};

// Exercise 10: Function with Multiple Arguments ⤵

// function addNumbers(...nums) {
//   return nums.reduce((sum, num) => sum + num, 0);

// Exercise 11: Interface for Object ⤵
interface CarInfo{
  make: string,
  model: string,
  year: number
}

let car: CarInfo = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
};

// Exercise 12: Type Aliases ⤵

type UserInfo = [{id: number, name: string}, {id: number, name: string}]

let users : UserInfo = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Exercise 13: Intersection Types ⤵
// Declare mutiple types and combine those , ultimate resulted type must satisfy the below object

type UserFirstInfo = {
  id: number, 
  name: string,
}

type UserSecondInfo = {
  department: string,
  accessLevel: string
}

type userAllInfo = UserFirstInfo & UserSecondInfo;

let manager: userAllInfo = {
  id: 1,
  name: "John Doe",
  department: "Sales",
  accessLevel: "Admin",
};

// Exercise 14: Optional Chaining ⤵

type User = {
  profile ?: {
    name : string,
    contact ?: {email: string}
  }
}

let user : User= {
  profile: {
    name: "Alice",
    contact: { email: "alice@example.com" },
  },
};
console.log(user.profile?.contact?.email);

// // Exercise 15: Nullable Types ⤵
// function getUser(id) {
//   if (id > 0) {
//     return { id, name: "User" + id };
//   }
//   return null;
// }


// Exercise 16: Literal Types ⤵



type Size = 'small' | 'medium' | 'large'
function setSize(size: Size) {
  if (size === "small" || size === "medium" || size === "large") {
    console.log(`Size set to ${size}`);
  }
}
setSize("large")
setSize("small")
setSize("medium")


// Exercise 17: Mapped Types ⤵

type mappedValue = {
  isActive: boolean,
  timeout: number,
  apiKey: string
}

type Config = {
  [prop in keyof mappedValue] : mappedValue[prop]
}

let config : Config = {
  isActive: true,
  timeout: 5000,
  apiKey: "12345",
};


// Exercise 18: Readonly Properties ⤵

type Settings = {
  readonly theme: string,
  fontSize: number
}

let settings : Settings = {
  theme: "dark",
  fontSize: 16,
};
settings.fontSize = 12
//settings.theme = 'ddd' // error because it isa a read only property.

// Exercise 19: Index Signatures

interface Translations {
  [key : string] : string
}

let translations : Translations = {
  en: "Hello",
  fr: "Bonjour",
  es: "Hola",
};





















 
 
