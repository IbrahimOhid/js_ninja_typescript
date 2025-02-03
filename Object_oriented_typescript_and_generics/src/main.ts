// object oriented 

// object oriented Principle 💚💛💚
// => Encapsulation
// => Abstraction
// => inheritance
// => polymorphism

class UserInfo{
    name: string
    age: number
    isSkilled: boolean

    constructor(
        name : string,
        age: number,
        isSkilled: boolean
    ){
        this.name = name,
        this.age = age,
        this.isSkilled = isSkilled
    }

    displayInfo(){
        console.log(`i am ${this.name}. i am ${this.age} years old.`);
    }
}

const user = new UserInfo('Ibrahim', 27, true)
console.log(user.displayInfo());



class BankAccount{
    constructor(
      private  balance : number,
      private  id: string
    ){
        this.balance = balance,
        this.id = id
    }
}



const balance