// Question 1:========================================================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greet() {
        console.log("Hello! How are you?");
    }
}

const person = new Person("John", 25);
Person.greet();
//   Question 2:========================================================
class Employee extends Person {
    constructor(name, age) {
        super(name, age);
        this._salary = 0;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value >= 0) {
            this._salary = value;
        } else {
            console.log("Invalid salary. Salary must be a positive number.");
        }
    }
}

const employee = new Employee("John Doe", 30);
employee.salary = -5000; // Trying to set a negative salary
console.log(employee.salary); // Output: 0 (default value)
//   Question 3:========================================================
class Manager extends Employee {
    static getRole() {
        return "Manager";
    }
}

const manager = new Manager("Jane Smith", 35);
console.log(Manager.getRole()); // Output: Manager
//   Question 4:========================================================
class Executive extends Manager {
    constructor(name, age) {
        super(name, age);
        this._bonus = 0;
    }

    get bonus() {
        return this._bonus;
    }

    set bonus(value) {
        if (value >= 0) {
            this._bonus = value;
        } else {
            console.log("Invalid bonus. Bonus must be a positive number.");
        }
    }
}

const executive = new Executive("Alex Johnson", 40);
executive.bonus = -2000; // Trying to set a negative bonus
console.log(executive.bonus); // Output: 0 (default value)
//   Question 5:========================================================
class CEO extends Executive {
    static getRole() {
        return "CEO";
    }
}

const ceo = new CEO("Mark Anderson", 45);
console.log(CEO.getRole()); // Output: CEO
//   Question 6:========================================================
class Bank {
    constructor(name) {
        this._name = name;
    }
}

class Account extends Bank {
    constructor(name, balance) {
        super(name);
        this._balance = balance;
    }

    static getBankName() {
        return "MyBank";
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }
}

class SavingsAccount extends Account {
    constructor(name, balance, interestRate) {
        super(name, balance);
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }

    set interestRate(value) {
        this._interestRate = value;
    }
}

const savingsAccount = new SavingsAccount("John Doe", 5000, 0.05);
console.log(savingsAccount.balance); // Output: 5000
console.log(SavingsAccount.getBankName()); // Output: MyBank
//   Question 7:========================================================
class Animal {
    constructor() {
        this._type = "";
    }

    static getType() {
        return "Animal";
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}

class Mammal extends Animal {
    constructor() {
        super();
        this._type = "Mammal";
    }
}

class Lion extends Mammal {
    constructor() {
        super();
        this._maneColor = "";
    }

    get maneColor() {
        return this._maneColor;
    }

    set maneColor(value) {
        this._maneColor = value;
    }
}

class Cow extends Mammal {
    constructor() {
        super();
        this._milkProduction = "";
    }

    get milkProduction() {
        return this._milkProduction;
    }

    set milkProduction(value) {
        this._milkProduction = value;
    }
}

class Bird extends Animal {
    constructor() {
        super();
        this._type = "Bird";
        this._wingspan = "";
    }

    get wingspan() {
        return this._wingspan;
    }

    set wingspan(value) {
        this._wingspan = value;
    }
}

class Eagle extends Bird {
    constructor() {
        super();
        this._eagleProperty = "";
    }

    get eagleProperty() {
        return this._eagleProperty;
    }

    set eagleProperty(value) {
        this._eagleProperty = value;
    }
}

class Sparrow extends Bird {
    constructor() {
        super();
        this._sparrowProperty = "";
    }

    get sparrowProperty() {
        return this._sparrowProperty;
    }

    set sparrowProperty(value) {
        this._sparrowProperty = value;
    }
}

const lion = new Lion();
lion.maneColor = "Brown";
console.log(lion.maneColor); // Output: Brown

const cow = new Cow();
cow.milkProduction = "High";
console.log(cow.milkProduction); // Output: High

const eagle = new Eagle();
eagle.wingspan = "2 meters";
eagle.eagleProperty = "Property of eagle";
console.log(eagle.wingspan); // Output: 2 meters
console.log(eagle.eagleProperty); // Output: Property of eagle

const sparrow = new Sparrow();
sparrow.wingspan = "30 centimeters";
sparrow.sparrowProperty = "Property of sparrow";
console.log(sparrow.wingspan); // Output: 30 centimeters
console.log(sparrow.sparrowProperty); // Output: Property of sparrow

console.log(Animal.getType()); // Output: Animal
