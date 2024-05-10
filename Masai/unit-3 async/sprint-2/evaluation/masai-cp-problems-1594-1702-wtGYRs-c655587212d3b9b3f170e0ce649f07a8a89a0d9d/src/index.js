// Person
//  - Doctor
//  - Nurse
//  - Receptionist

// Patient
//  - Inpatient
//  - Outpatient

//MenuItem
//  - FoodItem
//  - Drink

//**********************Problem 1 */

class Person {
  // The "Person" class should have a constructor that takes in the person's name, age, and salary as parameters
  // Define a getDetails() method for the Person
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with a salary of ₹${this.salary} per year`
  }
}

class Doctor extends Person {
  // The "Doctor" class should inherit from the Person class using extend keyword
  //should have a constructor that takes in the doctor's name, age, salary and specialization as parameters
  // Define a getDetails() method for the Doctor
  constructor(name, age, salary, specialization) {
    super(name, age, salary);
    this.specialization = specialization;
  }
  getDetails() {
    return `Dr. ${this.name}, ${this.age} years old, with a salary of ₹${this.salary} per year, specializing in ${this.specialization}`
  }
}

class Nurse extends Person {
  // The "Nurse" class should inherit from the Person class using extend keyword
  //should have a constructor that takes in the nurse's name, age, salary and shift as parameters
  // Define a getDetails() method for the Nurse
  constructor(name, age, salary, shift) {
    super(name, age, salary);
    this.shift = shift;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with a salary of ₹${this.salary} per year, working the ${this.shift} shift`
  }
}

class Receptionist extends Person {
  // The "Receptionist" class should inherit from the Person class using extend keyword
  //should have a constructor that takes in the receptionist's name, age, salary and phone as parameters
  // Define a getDetails() method for the Receptionist
  constructor(name, age, salary, phone) {
    super(name, age, salary);
    this.phone = phone;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with a salary of ₹${this.salary} per year, with phone number ${this.phone}`
  }
}

// // Example usage Person class******************************//
// const person = new Person("priya", 28, 127451);
// console.log(person.getDetails()); //priya, 28 years old, with a salary of ₹127451 per year

// const doctor = new Doctor("ram", 45, 150000, "Cardiology");
// console.log(doctor.getDetails()); // "Dr. ram, 45 years old, with a salary of ₹150000 per year, specializing in Cardiology"

// const nurse = new Nurse("virat", 30, 50000, "Morning");
// console.log(nurse.getDetails()); // "virat, 30 years old, with a salary of ₹50000 per year, working the Morning shift"

// const receptionist = new Receptionist("rahul", 25, 35000, "555-1234");
// console.log(receptionist.getDetails()); // "rahul, 25 years old, with a salary of ₹35000 per year, with phone number 555-1234"

//**********************Problem 2 */
class Patient {
  // The "Patient" class should have a constructor that takes in the patient's name, age, and conditions as parameters
  // Define a getDetails() method for the Patient
  constructor(name, age, conditions) {
    this.name = name;
    this.age = age;
    this.conditions = conditions;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with conditions: ${this.conditions}`
  }
}

class Inpatient extends Patient {
  // The "Inpatient" class should inherit from the Patient class using extend keyword
  //should have a constructor that takes in the nurse's name, age, conditions and bedNumber as parameters
  // Define a getDetails() method for the Inpatient
  constructor(name, age, conditions, bedNumber) {
    super(name, age, conditions);
    this.bedNumber = bedNumber;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with conditions: ${this.conditions}, admitted and occupying bed number ${this.bedNumber}`
  }
}

class Outpatient extends Patient {
  // The "Outpatient" class should inherit from the Patient class using extend keyword
  //should have a constructor that takes in the nurse's name, age, conditions and nextAppointment as parameters
  // Define a getDetails() method for the Outpatient
  constructor(name, age, conditions, nextAppointment) {
    super(name, age, conditions);
    this.nextAppointment = nextAppointment;
  }
  getDetails() {
    return `${this.name}, ${this.age} years old, with conditions: ${this.conditions}, with a scheduled appointment on ${this.nextAppointment} for a routine check-up`
  }
}

// // Example usage for Outpatient , Patient and Inpatient classes****************//

// const patient = new Patient("saniya" ,34,["infection"])
// console.log(patient.getDetails())//saniya, 34 years old, with conditions: infection

// const inpatient = new Inpatient("rohit", 50, ["Diabetes", "High Blood Pressure"], 23);
// console.log(inpatient.getDetails()); // "rohit, 50 years old, with conditions: Diabetes,High Blood Pressure, admitted and occupying bed number 23"

// const outpatient = new Outpatient("Sham", 35, ["Asthma"], "May 10th, 2023 at 2:00 PM");
// console.log(outpatient.getDetails()); // Sham, 35 years old, with conditions: Asthma, with a scheduled appointment on May 10th, 2023 at 2:00 PM for a routine checkup

//**********************Problem 3 */
class MenuItem {
  // The "MenuItem" class should have a constructor that takes in the menuItem's name, price, and ingredients as parameters
  // Define a getDetails() method for the Patient
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }
  getDetails() {
    return `${this.name} (₹${this.price})`
  }
}

class FoodItem extends MenuItem {
  // The "FoodItem" class should inherit from the MenuItem class using extend keyword
  //should have a constructor that takes in the fooditem's name, price, ingredients and type as parameters
  // Define a getDetails() method for the FoodItem
  // Define a isVegetarian() method for the FoodItem which return Boolean value
  // Define a isGlutenFree() method for the FoodItem which return Boolean value
  constructor(name, price, ingredients, type) {
    super(name, price, ingredients);
    this.type = type;
  }
  getDetails() {
    return `${this.name} (₹${this.price}) - ${this.type}`
  }
  isVegetarian() {
    for (let key of this.ingredients) {
      if (!key.isVegetarian) {
        return false;
      }
    }
    return true;
  }
  isGlutenFree() {
    for (let key of this.ingredients) {
      if (!key.isGlutenFree) {
        return false;
      }
    }
    return true;
  }
}

class Drink extends MenuItem {
  // The "Drink" class should inherit from the MenuItem class using extend keyword
  //should have a constructor that takes in the drink's name, price, ingredients and alcoholic as parameters
  // Define a getDetails() method for the Drink
  // Define a isCold() method for the Drink which return Boolean value if name includes juice/soft drink
  // Define a isCarbonated() method for the Drink which return Boolean value if name includes beer/soft drink
  constructor(name, price, ingredients, alcoholic) {
    super(name, price, ingredients);
    this.alcoholic = alcoholic;
  }
  getDetails() {
    let check = (this.alcoholic) ? 'Alcoholic' : 'Non-alcoholic'
    return `${this.name} (₹${this.price}) ${check}`
  }
  isCold() {
    for (let key of this.ingredients) {
      if (key.name.toLowerCase().includes('juice') || key.name.toLowerCase().includes('soft drink')) {
        return true;
      }
    }
    return false;
  }
  isCarbonated() {
    for (let key of this.ingredients) {
      if (key.name.toLowerCase().includes('beer') || key.name.toLowerCase().includes('soft drink')) {
        return false;
      }
    }
    return true;
  }
}

// // Example usage for MenuItem********************************//
// let panipuri = new MenuItem("Puris or Golgappa", 25, [{name: "Mint Leaves", isVegetarian: true, isGlutenFree: false}, {name: "Coriander Leaves", isVegetarian: true, isGlutenFree: true}, {name: "Onion", isVegetarian: false, isGlutenFree: true},{name: "puri", isVegetarian: false, isGlutenFree: true}]);
// console.log(panipuri.getDetails());//Puris or Golgappa (₹25)

// Example usage for Fooditem class
// let pasta = new FoodItem("Pasta with tomato sauce and meatballs", 10.99, [{name: "Pasta", isVegetarian: true, isGlutenFree: false}, {name: "Tomato sauce", isVegetarian: true, isGlutenFree: true}, {name: "Meatballs", isVegetarian: false, isGlutenFree: true}], "Main Course");
// console.log(pasta.getDetails());//Pasta with tomato sauce and meatballs ($10.99) - Main Course
// console.log(pasta.isVegetarian());//false
// console.log(pasta.isGlutenFree());//false

// // Example usage for Drink class
// let coke = new Drink("Coca-Cola", 2.99, [{name: "Coca-Cola syrup", isVegetarian: true, isGlutenFree: true}, {name: "Carbonated water", isVegetarian: true, isGlutenFree: true}], false);
// console.log(coke.getDetails());//Coca-Cola ($2.99) (Non-alcoholic)
// console.log(coke.isCold());//false
// console.log(coke.isCarbonated());//false

// !Note : Do not remove the following exports statement

module.exports = {
  Person,
  Doctor,
  Nurse,
  Receptionist,
  Patient,
  Inpatient,
  Outpatient,
  MenuItem,
  FoodItem,
  Drink,
};
