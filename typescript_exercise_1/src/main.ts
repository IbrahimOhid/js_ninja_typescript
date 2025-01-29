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

//   ⤵

// let input = document.getElementById("user-input") as HTMLInputElement;
let input = <HTMLInputElement> document.getElementById("user-input");
input.value = "Hello, world!";

// Exercise 8: keyof ⤵ 💖

// function getProperty(obj, key) {
//   return obj[key];
// }

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







 
 
