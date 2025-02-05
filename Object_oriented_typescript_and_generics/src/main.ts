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


// => Encapsulation Example 💛💛💛
class BankAccount {
    constructor(
        private balance : number,
        private id : string
    ){
        this.balance = balance
        this.id = id
    }
    
    deposit(amount: number): void{
        if(amount <= 0){
            throw new Error('Amount Greater Than 0')
        }
        this.recordTransaction();
        this.balance += amount
    }

    recordTransaction(){
        console.log('Record Amount');
    }

    withDraw(amount: number): void{
        if(amount > this.balance){
            throw new Error('Not Available Balance')
        }
        this.recordTransaction();
        this.balance -= amount
    }

    getBalance(){
        return this.balance;
    }
}

const account = new BankAccount(10, 'rahim23');
console.log(account);
account.deposit(1001)
account.withDraw(1000)
console.log(account.getBalance());

// => Abstraction 💛💛💛

class Car{
    private checkFuel(): void{
        console.log('Check Fuel');
    }
    private checkSparkPlug(): void{
        console.log('Check Spark Plug');
    }

    public readyToStart():void{
        this.checkFuel();
        this.checkSparkPlug();
    }
}

const myCar = new Car()
console.log(myCar);
myCar.readyToStart();


// => inheritance💛💛💛

class Employee{
    constructor(public name: string, public salary: number){}

    getEmployee(): void{
        console.log(`Name: ${this.name}. Salary: ${this.salary}`);
    }  
}

class Manager extends Employee{
    constructor(name: string, salary: number, public department: string){
        super(name, salary)
    }
}

const NewEmployee = new Employee('Rahim', 20000);
console.log(NewEmployee);

const newManger = new Manager('Karim', 30000, 'HR');
console.log(newManger);


interface Vehicle{
    name: string,
    speed:number,
    drive:()=> void
}

class Bike implements Vehicle{
    constructor(public name: string, public speed: number){}
    
    drive(){
        console.log(`Name: ${this.name}. Speed: ${this.speed}`);
    }
}

const newBike = new Bike('Yamaha', 125);
console.log(newBike);