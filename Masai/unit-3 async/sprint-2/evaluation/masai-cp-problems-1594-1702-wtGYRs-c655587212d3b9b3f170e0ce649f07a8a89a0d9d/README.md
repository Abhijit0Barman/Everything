## JS-hospital-inheritance

### Submission Instructions [Please note]

## Maximum Marks - 23

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

### Problem1 Test cases

```
 ✅ able to submit the app - 1 mark ( minimum score )
### Test cases for the Person class
 ✅ should create a new Person class with the correct name, age, and salary - 1 mark
 ✅ should getDetails of Person class with the correct message - 1 mark

### Test cases for Doctor class
 ✅ should create a new Doctor class with the correct name, age, salary, and specialization properties - 1 mark
 ✅ should getDetails of Doctor class with the correct message - 1 mark

### Test cases for the Nurse class
 ✅ should create a new Nurse class with the correct name, age, salary, and shift properties- 1 mark
 ✅ should getDetails of Nurse class with the correct message- 1 mark

### Test cases for the Receptionist class
 ✅ should create a new Receptionist class with the correct name, age, salary, and phone properties- 1 mark
 ✅ should getDetails of Receptionist class with the correct message- 1 mark
```

### Problem2 Testcases

```
### Test cases for the Patient class
 ✅ should create a new Patient class with the correct name, age, and conditions properties- 1 mark
 ✅ should getDetails of Patient class with the correct message- 1 mark

### Test cases for the Inpatient class
 ✅ should create a new Inpatient class with the correct name, age, conditions, and bedNumber properties- 1 mark
 ✅ should getDetails of Inpatient class with the correct message- 1 mark

### Test cases for the Outpatient class
 ✅ should create a new Outpatient class with the correct name, age, conditions, and nextAppointment properties- 1 mark
 ✅ should getDetails of Outpatient class with the correct message- 1 mark
```

### Problem3 Testcases

```
### Test cases for the MenuItem class
✅ should create a new MenuItem class with the correct name, price, and ingredients properties- 1 mark
✅ should getDetails of MenuItem class with the correct message- 1 mark

### Test cases for the FoodItem class
✅ should create a new FoodItem class with the correct name, price, and ingredients properties- 1 mark
✅ should getDetails of fooditem class with the correct message- 1 mark
✅ should isVegetarian and isGlutenFree work as expected- 1 mark

### Test cases for the Drink class
✅ should create a new Drink class with the correct name, price, and ingredients properties- 1 mark
✅ should getDetails of Drink class with the correct message- 1 mark
✅ should isCold and isCarbonated work as expected- 1 mark

```

should create a new Outpatient object with the correct name, age, conditions, and nextAppointment properties
should getDetails with the correct message

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases

## Boilerplate

- Do not change the given folder structure
- inside src, you will find the `index.js` file that is where you need to write the code
- you can find the test case under `__tests__ ` folder.

<span style="color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>.

### Description

You are tasked with building a software application for a hospital. The hospital has different types of medical staff such as doctors, nurses, and receptionists.

## **Problem 1**

```
Person
│
├── Doctor
│    └── getDetails()
├── Nurse
│    └── getDetails()
└── Receptionist
     └── getDetails()
```

### Points to note for Person class :

- Define a `base` class for a **_Person_** that takes three parameter

  1. name: string
  2. age: number
  3. salary: number

- The Person should create a new class with the given name, age, and salary.
- Define a method for the Person class called **_`getDetails`_** that **_`returns`_** a string with the `name`, `age`, and `salary` of the person.

- console.log(person.getDetails())
  - return : `{name}, {age} years old, with a salary of ₹{salary} per year`

#### Example usage for the Person class

```
const person = new Person ("Priya",28,127451)
console.log(person.getDetails())//Priya, 28 years old, with a salary of ₹127451 per year
```

### Points to note for Doctor class :

- Define a `derived`class `Doctor`, that _inherits_ from _Person_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. specialization: string (example- "Cardiology", "Pediatrics", or "Oncology")

- The class should create a new Doctor class with the given name, age, salary, and specialization.
- Define a method for the Doctor called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`, and `specialization` of the doctor.

- console.log(doctor.getDetails())
  - return: `Dr. {name}, {age} years old, with a salary of ₹{salary} per year, specializing in {specialization}`

#### Example usage for Doctor class

```
const doctor = new Doctor("Ram", 45, 150000, "Cardiology");
console.log(doctor.getDetails()); // "Dr. Ram, 45 years old, with a salary of ₹150000 per year, specializing in Cardiology"
```

### Points to note for Nurse class :

- Define a `derived`class `Nurse`, that inherits from _Person_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. shift: string (example - "Morning", "Afternoon", or "Night")

- The class should create a new Nurse class with the given name, age, salary, and shift.
- Define a method for the Nurse called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`, and `shift` of the doctor.

- console.log(nurse.getDetails())
  - return : `{name}, {age} years old, with a salary of ₹{salary} per year, working the {shift} shift`

#### Example usage for Nurse class

```
const nurse = new Nurse("Virat", 30, 50000, "Morning");
console.log(nurse.getDetails()); // "Virat, 30 years old, with a salary of ₹50000 per year, working the Morning shift"
```

### Points to note for the Receptionist class :

- Define a `derived`class `Receptionist`, that inherits from _Person_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. phone: number

- The class should create a new Receptionist class with the given name, age, salary, and phone.
- Define a method for the Receptionist called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`, and `phone` of the doctor.

- console.log(receptionist.getDetails())
  - return : `{name}, {age} years old, with a salary of ₹{salary} per year, with phone number {phone}`

#### Example usage for Receptionist class

```
const receptionist = new Receptionist("Rahul", 25, 35000, "555-1234");
console.log(receptionist.getDetails()); // "Rahul, 25 years old, with a salary of ₹35000 per year, with phone number 555-1234"
```

## **Problem 2**

```
Patient
│  └── getDetails()
├── Inpatient
│  └── getDetails()
└── Outpatient
   └── getDetails()
```

### Points to note for Patient class :

- Define a `base` class for a **_Patient_** that takes three parameter

  1. name: string
  2. age: number
  3. conditions: string/array of string

- `conditions` of Patient class may be single condition(string) or array of conditions(string).

- The Patient should create a new class with the given name, age, and conditions.
- Define a method for the Patient class called **_`getDetails`_** that **_`returns`_** a string with the `name`, `age`, and `conditions` of the person.

- console.log(patient.getDetails())
  - return : `{name}, {age} years old, with conditions: {conditions}`

#### Example usage for Patient class

```
const patient = new Patient("Sania" ,34,["infection"])
console.log(patient.getDetails())//Sania, 34 years old, with conditions: infection
```

### Points to note for Inpatient class :

- Define a `derived`class `Inpatient`, that inherits from _Patient_ and takes four parameters.

  1. name: string
  2. age: number
  3. conditions: string/array of string
  4. bedNumber: number

- `conditions` of Inpatient class may be single condition(string) or array of conditions(string).

- The class should create a new Inpatient class with the given name, age, conditions, and bedNumber.
- Define a method for the Inpatient called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `conditions`, and `bedNumber` of the patient.

- console.log(inpatient.getDetails())

  - return : `{name}, {age} years old, with conditions: {conditions}, admitted and occupying bed number {bedNumber}`

- Note: while returning the conditions array in the getDetails method directly use `conditions: {conditions}` it will give you required conditions separated with `","` or you can go for `conditions: ${this.conditions.join(",")}`.

#### Example usage for Inpatient class

```
const inpatient = new Inpatient("Rohit", 50, ["Diabetes", "High Blood Pressure"], 23);
console.log(inpatient.getDetails()); // "Rohit, 50 years old, with conditions: Diabetes, High Blood Pressure, admitted and occupying bed number 23"

```

### Points to note for Outpatient class :

- Define a `derived`class `Outpatient`, that inherits from _Patient_ and takes four parameters.

  1. name: string
  2. age: number
  3. conditions: string/array of string
  4. nextAppointment: string (indicates the patient's next appointment date and time example-"May 10th, 2023 at 2:00 PM ")

- `conditions` of Outpatient class may be single condition(string) or array of conditions(string).

- The class should create a new Outpatient class with the given name, age, conditions, and nextAppointment.
- Define a method for the Outpatient called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `conditions`, and `nextAppointment` of the patient.

- console.log(outpatient.getDetails())

  - return : `{name}, {age} years old, with conditions: {conditions}, with a scheduled appointment on {nextAppointment} for a routine check-up`

- Note: while returning the conditions array in the getDetails method directly use `conditions: {conditions}` it will give you required conditions separated with `","` or you can go for `conditions: ${this.conditions.join(",")}`.

#### Example usage for outpatient class

```
const outpatient = new Outpatient("Sham", 35, ["Asthma"], "May 10th, 2023 at 2:00 PM");
console.log(outpatient.getDetails()); // Sham, 35 years old, with conditions: Asthma, with a scheduled appointment on May 10th, 2023 at 2:00 PM for a routine check-up
```

## **Problem 3**

You are tasked with building a software application for a restaurant. The restaurant serves different types of food items such as starters, main courses, and desserts.

```
MenuItem
│     └── getDetails()
├── FoodItem
│     ├── getDetails()
│     ├── isVegetarian()
│     └── isGlutenFree()
└── Drink
      ├── getDetails()
      ├── isCold()
      └── isCarbonated()
```

### Points to note for MenuItem class :

- Define a `base` class for a **_MenuItem_** that takes three parameter

  1. name: string
  2. price: number
  3. ingredients: object/array of object

- `ingredients` of MenuItem class may be single ingredient(object) or array of ingredients(object).

- The MenuItem should create a new class with the given name, price, and ingredients.
- Define a method for the MenuItem class called **_`getDetails`_** that **_`returns`_** a string with the `name`, `price`, and `ingredients` of the menuItem.

- console.log(menuItem.getDetails())
  - return : `{name} (₹{price})`

#### Example usage for MenuItem class

```
let panipuri = new MenuItem("Puris or Golgappa", 25, [{name: "Mint Leaves", isVegetarian: true, isGlutenFree: false}, {name: "Coriander Leaves", isVegetarian: true, isGlutenFree: true}, {name: "Onion", isVegetarian: false, isGlutenFree: true},{name: "puri", isVegetarian: false, isGlutenFree: true}]);
console.log(panipuri.getDetails());//Puris or Golgappa (₹25)
```

### Points to note for FoodItem class :

- Define a `derived`class `FoodItem`, that inherits from _MenuItem_ and takes four parameters.

  1. name: string
  2. price: number
  3. ingredients: object/array of object
  4. type: string (example - "starter", "main course", or "dessert")

- `ingredients` of FoodItem class may be single ingredient(object) or array of ingredients(object).

- The class should create a new FoodItem class with the given name, price, ingredients, and type.

1. Define a method for the FoodItem called **_` getDetails`_** that **_`returns`_** a string with the `name`,` price`, and `type` of the fooditem.

- console.log(fooditem.getDetails())
  - return : `{name} (₹{price}) - {type}`

2. Define a method for the FoodItem called **_` isVegetarian`_** that **_`returns`_** Boolean value as `true` if every **`ingredient`** of the fooditem is isVegetarian's else **_`return`_** `false` indicating whether the food item is vegetarian or not.

-  If all the ingredients of the food item are vegetarian, then the food item is vegetarian.

- console.log(fooditem.isVegetarian())
  - return: `true/false `

3. Define a method for the FoodItem called **_` isGlutenFree`_** that **_`returns`_** Boolean value as `true` if every **`ingredient`** of the fooditem is isGlutenFree's else **_`return`_** `false` indicating whether the food item is gluten-free or not.

- If all the ingredients of the food item are gluten-free, then the food item is gluten-free.

- console.log(fooditem.isGlutenFree())
  - return: `true/false `

#### Example usage for FoodItem class

```
let pasta = new FoodItem("Pasta with tomato sauce and meatballs", 10.99, [{name: "Pasta", isVegetarian: true, isGlutenFree: false}, {name: "Tomato sauce", isVegetarian: true, isGlutenFree: true}, {name: "Meatballs", isVegetarian: false, isGlutenFree: true}], "Main Course");
console.log(pasta.getDetails());//Pasta with tomato sauce and meatballs ($10.99) - Main Course
console.log(pasta.isVegetarian());//false
console.log(pasta.isGlutenFree());//false
```

### Points to note for Drink class :

- Define a `derived`class `Drink`, that inherits from _MenuItem_ and takes four parameters.

  1. name: string
  2. price: number
  3. ingredients: object/array of object
  4. alcoholic: Boolean (indicating whether the drink is alcoholic or not)

- `ingredients` of Drink class may be single ingredient(object) or array of ingredients(object).

- The class should create a new Drink class with the given name, price, ingredients, and alcoholic.

1. Define a method for the Drink called **_` getDetails`_** that **_`returns`_** a string with the `name`, `price` and if `alcoholic`is true then `Alcoholic` else `Non-alcoholic`.

- console.log(drink.getDetails())
  - return : `{name} (₹{price}) ({alcoholic ? {'Alcoholic' : 'Non-alcoholic'}})`

2. Define a method for the Drink called **_` isCold`_** that **_`returns`_** Boolean value if every **`name`** of the drink include **juice** `or` **soft drink** then return `true ‘else `false` indicating whether the drink is served cold or not. If the drink is a juice or a soft drink, it is served cold.

- console.log(drink.isCold())
  - return: `true/false `

3. Define a method for the Drink called **_` isCarbonated`_** that **_`returns`_** Boolean value if every **`name`** of the drink include **beer** `or` **soft drink** then return `true `else `false` indicating whether the drink is served cold or not.If the drink is a juice or a soft drink, it is served cold .

- console.log(drink.isCarbonated())
  - return: `true/false `

**Hint**: In the drink class `isCold` method first converts the `name` of the drink to `LowerCase` and then tries to find if it includes `juice/soft drink `then you have to return `true`.

- In the drink class `isCarbonated` method first, convert the `name` of the drink to `LowerCase` and then try to find if it includes `beer/soft drink `then you have to return `true` indicating whether the drink is carbonated or not. 

- If the drink is a soft drink or a beer, it is carbonated.

you can refer to these links for a better understanding

1. [String.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
2. [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

#### Example usage for drink class

```
let coke = new Drink("Coca-Cola", 2.99, [{name: "Coca-Cola syrup", isVegetarian: true, isGlutenFree: true}, {name: "Carbonated water", isVegetarian: true, isGlutenFree: true}], false);
console.log(coke.getDetails());//Coca-Cola ($2.99) (Non-alcoholic)
console.log(coke.isCold());//false
console.log(coke.isCarbonated());//false
```

- You should create a program that demonstrates the functionality of the classes and methods outlined above. The implementation should allow the creation of Person, Patient, and MenuItem in the getDetails,isVegetarian,isGlutenFree,isCold, and isCarbonated methods.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
