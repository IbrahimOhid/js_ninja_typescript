"use strict";
// Exercise 1: Annotate Variables ⤵
let names = "Alice";
let age = 30;
let isEmployed = true;
let favoriteColors = ["red", "blue", "green"];
let randomData = { id: 1, value: "random" };
// Exercise 2: Function Parameters and Return Type ⤵
function calculateArea(radius) {
    return 3.14 * radius * radius;
}
calculateArea(5);
// Exercise 3: Union Types ⤵
function formatId(id) {
    //if id is string log the message `Your ID is: ${id.toUpperCase()}`
    //otherwise `Your ID is: ${id}`
    if (typeof id === 'string') {
        return `Your ID is: ${id.toUpperCase()}`;
    }
    else {
        return `Your ID is: ${id}`;
    }
}
formatId('ibrahim');
// Exercise 5: Tuples ⤵
let result = [200, "Success"];
// Exercise 6: Enum Conversion ⤵
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Inactive"] = "inactive";
    Status["Pending"] = "pending";
})(Status || (Status = {}));
;
console.log(Status.Active);
//   Exercise 7: Type Assertions⤵
// let input = document.getElementById("user-input") as HTMLInputElement;
let input = document.getElementById("user-input");
input.value = "Hello, world!";
let company = {
    name: "Tech Corp",
    employees: [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
    ],
};
let car = {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
};
