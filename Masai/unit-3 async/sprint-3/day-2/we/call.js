/* Question 1:*/{
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    // ==========================================
    function Car(make, model, year) {
        Vehicle.call(this, make, model);
        this.year = year;
    }
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.constructor = Car;

    Car.prototype.getYear = function () {
        return this.year;
    };
    // ==========================================
    function ElectricCar(make, model, year, range) {
        Car.call(this, make, model, year);
        this.range = range;
    }

    ElectricCar.prototype = Object.create(Car.prototype);
    ElectricCar.prototype.constructor = ElectricCar;

    ElectricCar.prototype.getRange = function () {
        return this.range;
    };

    // Creating instances and accessing properties and methods
    var myVehicle = new Vehicle('Toyota', 'v2');
    console.log(myVehicle.getMake());
    console.log(myVehicle.getModel());

    var myCar = new Car('Honda', 'v3', 2019);
    console.log(myCar.getMake());
    console.log(myCar.getModel());
    console.log(myCar.getYear());

    var myElectricCar = new ElectricCar('Tesla', 'Model', 2022, 350);
    console.log(myElectricCar.getMake());
    console.log(myElectricCar.getModel());
    console.log(myElectricCar.getYear());
    console.log(myElectricCar.getRange());
}
/* Question 2:*/{
    // Person constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return `Person: ${this.name}, Age: ${this.age}`;
    };
    // Student constructor (inherits from Person)
    function Student(name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    Student.prototype.toString = function () {
        return `Student: ${this.name}, Age: ${this.age}, Major: ${this.major}`;
    };
    // Professor constructor (inherits from Person)
    function Professor(name, age, department) {
        Person.call(this, name, age);
        this.department = department;
    }
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.constructor = Professor;
    Professor.prototype.toString = function () {
        return `Professor: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    };
    // TeachingAssistant constructor (inherits from Person)
    function TeachingAssistant(name, age, course) {
        Person.call(this, name, age);
        this.course = course;
    }
    TeachingAssistant.prototype = Object.create(Person.prototype);
    TeachingAssistant.prototype.constructor = TeachingAssistant;
    TeachingAssistant.prototype.toString = function () {
        return `Teaching Assistant: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    };
    // Create instances and demonstrate inheritance and custom string representations
    var person = new Person("John Doe", 30);
    console.log(person.toString());

    var student = new Student("Alice Smith", 20, "Computer Science");
    console.log(student.toString());

    var professor = new Professor("Dr. Jane Johnson", 45, "Physics");
    console.log(professor.toString());

    var ta = new TeachingAssistant("David Brown", 25, "Mathematics");
    console.log(ta.toString());

}
/* Question 3:*/{
    // Employee constructor
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    Employee.prototype.getSalary = function () {
        return this.salary;
    };

    // Manager constructor
    function Manager(name, age, salary, bonus) {
        Employee.call(this, name, age, salary);
        this.bonus = bonus;
    }

    Object.setPrototypeOf(Manager.prototype, Employee.prototype);
    Manager.prototype.constructor = Manager;
    Manager.prototype.getSalary = function () {
        return this.salary + this.bonus;
    };

    // Executive constructor
    function Executive(name, age, salary, bonus, stockOptions) {
        Manager.call(this, name, age, salary, bonus);
        this.stockOptions = stockOptions;
    }

    Object.setPrototypeOf(Executive.prototype, Manager.prototype);
    Executive.prototype.constructor = Executive;
    Executive.prototype.getSalary = function () {
        return this.salary + this.bonus + this.stockOptions;
    };

    // Creating instances
    var emp = new Employee("John Doe", 30, 5000);
    console.log(emp.getSalary());       // Output: 5000

    var manager = new Manager("Jane Smith", 35, 8000, 2000);
    console.log(manager.getSalary());   // Output: 10000 (8000 + 2000)

    var executive = new Executive("Alice Johnson", 40, 10000, 5000, 10000);
    console.log(executive.getSalary()); // Output: 25000 (10000 + 5000 + 10000)
}
/* Question 4:*/{
    // Animal constructor
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sound = function () {
        console.log("Animal sound");
    }
    // Mammal constructor
    function Mammal(name) {
        Animal.call(this, name);
    }
    Mammal.prototype = Object.create(Animal.prototype);
    Mammal.prototype.constructor = Mammal;
    // Override sound method for Mammal
    Mammal.prototype.sound = function () {
        console.log("Mammal sound");
    }
    // Bird constructor
    function Bird(name) {
        Animal.call(this, name);
    }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    // Override sound method for Bird
    Bird.prototype.sound = function () {
        console.log("Bird sound");
    }
    // Fish constructor
    function Fish(name) {
        Animal.call(this, name);
    }
    Fish.prototype = Object.create(Animal.prototype);
    Fish.prototype.constructor = Fish;
    // Override sound method for Fish
    Fish.prototype.sound = function () {
        console.log("Fish sound");
    }

    var lion = new Mammal("Lion");
    lion.sound();  // Output: "Mammal sound"

    var eagle = new Bird("Eagle");
    eagle.sound();  // Output: "Bird sound"

    var salmon = new Fish("Salmon");
    salmon.sound();  // Output: "Fish sound"

    var genericAnimal = new Animal("Generic");
    genericAnimal.sound();  // Output: "Animal sound"

}
/* Question 5:*/{
    function User(name) {
        this.name = name;
    }
    User.prototype.constructor = User
    User.prototype.call = function () {
        console.log(this.name);
    }
    User.prototype.postMessage = function (message) {
        console.log(`${this.name} posted: ${message}`);
    }

    function RegularUser(name, age) {
        User.call(this, name)
        this.age = age;
    }
    RegularUser.prototype.constructor = RegularUser
    RegularUser.prototype = Object.create(User.prototype);
    RegularUser.prototype.call = function () {
        console.log("RegularUser");
    }

    function Influencer(name, salary) {
        User.call(this, name)
        this.salary = salary;
    }
    Influencer.prototype.constructor = Influencer
    Object.setPrototypeOf(Influencer.prototype, User.prototype)
    Influencer.prototype.call = function () {
        console.log("Influencer");
    }

    function AdminUser(name, age, experiance) {
        RegularUser.call(this, name, age)
        this.experiance = experiance
    }
    AdminUser.prototype.constructor = AdminUser
    AdminUser.prototype = Object.create(RegularUser.prototype)
    AdminUser.prototype.call = function () {
        console.log("AdminUser");
    }
    function SuperAdminUser(name, age, experiance, title) {
        AdminUser.call(name, age, experiance)
        this.title = title
    }
    SuperAdminUser.prototype.constructor = SuperAdminUser
    Object.setPrototypeOf(SuperAdminUser.prototype, AdminUser.prototype)
    SuperAdminUser.prototype.call = function () {
        console.log("SuperAdminUser");
    }
    let ipl = new User("goal")
    ipl.call()
    ipl.postMessage("godzila")
    let ipl1 = new RegularUser("goal", 32)
    ipl1.call()
    let ipl2 = new Influencer("goal", 4000)
    ipl2.call()
    let ipl3 = new AdminUser("goal", 32, 5)
    ipl3.call()
    let ipl4 = new SuperAdminUser("goal", 32, 5, "Leader")
    ipl4.call()
}

