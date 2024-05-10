## JS201-B25-C2-inheritance
### Submission Instructions [Please note]
## Maximum Marks - 40

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub
### Problem1 Test cases
```
 ✅ able to submit the app - 1 mark ( minimum score )
### Weather Constructor function
 ✅should create a new Weather Constructor function with the correct location, temperature, and conditions- 1 mark
 ✅ should display with a correct message for the Weather - 1 mark
### Testcases for Sunny Constructor function
 ✅should create a new Sunny object using the Constructor function with the correct location, temperature, and conditions properties - 1 mark
 ✅ should display the correct message for Sunny object - 1 mark
### Testcases for Rainy Constructor function
 ✅should create a new Rainy object using the Constructor function with the correct location, temperature, and conditions properties - 1 mark
 ✅ should display with the correct message for Rainy object - 1 mark
### Test cases for the setLocation and setTemperature
 ✅ Checks for the setLocation and setTemperature on Sunny Object - 2 marks
 ✅ Checks for the setLocation and setTemperature on Rainy Object - 2 marks
```
### Problem2 Testcases
```
### Test cases for Athlete class
  ✅ Create Athlete class and initializes with properties name, age, and sport - 1 mark
  ✅ Athlete have methods to train, and compete and should display the correct message - 1 mark
### Testcase for Runner class
  ✅ Create Runner class and initializes with properties name, age, sport, and distance - 1 mark
  ✅ Runner have methods to train, and compete and should display the correct message - 1 mark
### test cases for swimmer class
  ✅ Create Swimmer class and initializes with properties name, age, sport, SwimmingStyle - 1 mark
  ✅ Swimmers have methods to train, and compete and should display the correct message - 1 mark
### test cases for accessing and modifying the properties
  ✅ Accessing and modifying the properties of Runner - 1 mark
  ✅ Accessing and modifying the properties of Swimmer - 1 mark
```
### Problem3 Testcases
```
### Testcases for Person
  ✅ Create Person class and initializes with properties name, age, gender - 1 mark
  ✅ Person have method displayInfo should display with the correct message - 1 mark
### Testcases for Student
  ✅ Create a Student class and initializes with properties name, age, gender, StudentID, Major - 1 mark
  ✅ Student have method displayInfo, enroll and drop should display with the correct message - 3 marks
### Testcases for Professor
  ✅ Create Professor class and initializes with properties name, age, gender, professorID, department - 1 mark
  ✅ Professor has method displayInfo, teach and grade should display with correct message -3 marks
### Testcase for Access and modify properties
  ✅ Access and modify properties of Student - 1 mark
  ✅ Access and modify properties of Professor - 1 mark
```

### Problem4 Testcases
```
### Test cases for Media
  ✅ mediaType getter and setter - 2 marks
### Test cases for Book
  ✅ Book getter and setter - 1 marks
  ✅ comparePublicationYears static method - 2 marks
### Test cases for User
  ✅ User getter and setter - 2 marks
  ✅ borrowBook and returnBook methods - 1 mark
  ✅ fullName static method - 1 mark

```

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

`### Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part`

### Description
## **Problem 1**
- Define a constructor function for a **_Weather object_** that takes three parameter
  1. location: string
  2. temperature: number
  3. conditions: string

- The constructor function should create a new object with the given location, temperature, and conditions.
- Define a method for the Weather constructor function called **_`display`_** that **_`returns`_** a string with the `location` ,`temperature`, and `conditions` of the weather.

- console.log(Weather.display())
  - return : `current weather conditions for location {location} having temperature {temperature} degrees and weather condition is {conditions}`

- Create instances of the above objects and call their respective methods to verify their functionality.

### Points to note for Sunny Object :
- Define a constructor function `Sunny`, that inherits from *Weather* and takes three parameters.
  1. location: string
  2. temperature: number
  3. conditions (should have `sunny` as the default value) : string

- The constructor function should create a new Sunny object with the given location, temperature, and conditions (should have `sunny` as the default value)
- Define a method for the Sunny called **_` display`_** that **_`returns`_** a string with the `location` ,`temperature`, and `conditions` of the weather.

- console.log(sunny.display())
  - return : `we are at location {location} temperature here is {temperature} degrees weather condition is {conditions}`

- Create instances of the above objects and call their respective methods to verify their functionality.
<!-- - create an instance of the Sunny -->

### Points to note for Rainy Object :

- Define a constructor function `Rainy`, that inherits from Weather and takes four parameters.
  1. location: string
  2. temperature: number
  3. precipitation: string
  4. conditions (should have `rainy` as the default value) : string

- The constructor should create a new Rainy object with the given location, temperature, precipitation, and conditions (should have `rainy` as the default value)
- Define a method for the Rainy object called **_`display`_** that **_`returns`_** a string with the `location` ,`temperature`, `conditions`, and `precipitation` of the weather.

- console.log(rainy.display())
  - return : `we are at location {location} temperature here is {temperature} degrees weather condition is {conditions} and precipitation is {precipitation}`

- Create instances of the above objects and call their respective methods to verify their functionality.
<!-- - create an instance of the Rainy -->

- The app should allow the user to create a new "sunny" or "rainy" Weather object by calling the appropriate constructor function and passing in the necessary arguments.

### Points to note to setLocation and setTemperature :

- To **_update the location_** of each **Weather object** by calling the `setLocation` and 
  to **_update the temperature_** of each **Weather object** by calling the `setTemperature` methods on the `sunny` and `rainy` objects.
  
<!-- - The app should return the current weather conditions for each object after they have been `created and after any updates have been made`. -->

## **Problem 2**

- You are tasked with building a sports management system to keep track of athletes and their training and competition activities. The system should be able to handle different types of athletes, such as runners and swimmers, and their specific training and competition details.

### 1. _Athlete Class_ :

- The "Athlete" class should have a constructor that takes in the athlete's name, age, and sport as parameters and initializes the corresponding properties example -

1.  name: string,
2.  age: number,
3.  sport: string

- The "Athlete" class should have a _`train`_ method that return a message as `athlete {name} is training for {sport}` indicating that the athlete is training.
- The "Athlete" class should have a _`compete`_ method that return a message as `athlete {name} is competing for {sport}` indicating that the athlete is competing.

### 2. _Runner Class_:

- The "Runner" class should inherit from the "_Athlete_" class and have its constructor that takes in additional parameters, such as the distance the runner is training for or competing in.

1.  name: string,
2.  age: number,
3.  sport: string,
4.  distance: number

- The "Runner" class should override the _`train`_ method return a message as `athlete {name} is training for distance of {distance}m` 
- The "Runner" class should override the _`compete`_ method return a message as `athlete {name} is competing for distance of {distance}m` 
- inherited from the "Athlete" class, and provides its implementation that includes the distance information

### 3. _Swimmer Class_:

- The "Swimmer" class should inherit from the "Athlete" class and have its constructor that takes in additional parameters, such as the swimming style the swimmer is training or competing in.

1.  name: string,
2.  age: number,
3.  sport: string,
4.  SwimmingStyle: string

- The "Swimmer" class should override the _`train`_ methods return a message an `athlete {name} is training for swimming with style of {SwimmingStyle}`
- The "Swimmer" class should override _`compete`_ methods return a message an `athlete {name} is competing for swimming with style of {SwimmingStyle}`
- inherited from the "Athlete" class, and provides its implementation that includes the swimming style information.

### 4. _Usage_:

- `No need to create anything in this part we are only checking to access and modify the properties`.
- The system should allow the creation instances of the "Runner" and "Swimmer" classes with appropriate parameters, such as name, age, sport, distance, and swimming style.
- The system should allow accessing and modifying the properties of the created instances, such as name, age, sport, distance, and swimming style.
- The system should allow calling the "train" and "compete" methods on the instances, and they should return the correct messages based on the specific implementation in each subclass.

## **Problem 3**

- A university wants to manage student and professor information using a JavaScript program. They need a system that allows them to create and manage student and professor objects with different properties and methods.

- Create a class called **`Person`** with the following properties:

  1. name: string
  2. age: number
  3. gender: string
  4. Method: displayInfo() - displays the name, age, and gender of the person.

  - console.log(person.displayInfo());
    - return : `Name: {name}, Age: {age}, Gender: {gender}`

- Create a class called **`Student`** that inherits from the "Person" class with the following additional properties:

  1. StudentID : string
  2. Major: string
  3. Courses : [] (array - to store the courses enrolled by the student)

- _the default value of Courses as [] by using the method `enroll(course)` we are pushing a new course to the existing Courses array and by using the method `drop(course)` we are removing the particular course from existing Courses array_

- Methods:
  - `displayInfo()` - displays the name, age, gender, student ID, major, and enrolled courses of the student.
  - console.log(student.displayInfo())
    - return : `Name: {name}, Age: {age}, Gender: {gender}, Student ID: {StudentID}, Major: {Major}, Courses: {Courses}`
  - `enroll(course)` - accepts a course name as an argument and adds it to the list of enrolled courses for the student.
  - `drop(course)` - accepts a course name as an argument and removes it from the list of enrolled courses for the student.

## Example usage
    ```
    const student = new Student("ram", 20, "male", "972166", "ETC");
    console.log(student.displayInfo())
    return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: "

    student.enroll("Java");
    student.enroll("JavaScript");
    console.log(student.displayInfo());
    return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: Java,JavaScript"

    student.drop("Java");
    console.log(student.displayInfo());
    return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: JavaScript"
    ```
- Note: while returning the Courses array in the displayInfo method directly use `Courses: ${this.Courses}` it will give you required courses separated with `","` or you can go for `Courses: ${this.Courses.join(",")}`.

- Create a class called **`Professor`** that inherits from the "Person" class with the following additional properties:
  1. professorID: string
  2. department: string

- Methods:
- `displayInfo()` - displays the name, age, gender, professorID, and department of the professor.
  - console.log(professor.displayInfo())
    - return : `Name: {name}, Age: {age}, Gender: {gender}, Professor ID: {professorID}, Department: {department}`

- `teach(course)` - accepts a course name as an argument and displays that the professor is teaching that course.
  - console.log(professor.teach(course))
    - return : `{name} is teaching {course}`

- `grade(student, course, grade)` - accepts student name, course name, and grade as arguments and displays that the professor is grading the student's performance in that course with the given grade.
  - console.log(professor.grade(student, course, grade))
    - return : `{name} is grading {student}'s performance in {course} with the grade {grade}`

- Create instances of the "Student" and "Professor" classes to manage student and professor information.
  Access and modify properties of the student and professor objects as needed.
- Call methods on the student and professor objects to enroll/drop courses, display information, teach courses, and grade student performance.
- Ensure proper inheritance is maintained, and the properties and methods of the parent class ("Person") are inherited by the child classes ("Student" and "Professor").


## **Problem 4**
Library Management System
## Tree representation of the hierarchy:

```
Media
│
├── #mediaType
│   ├── get mediaType()
│   └── set mediaType(value)
│
└── Book (inherits from Media)
    ├── #title
    │   ├── get title()
    │   └── set title(value)
    ├── #author
    │   ├── get author()
    │   └── set author(value)
    ├── #publicationYear
    │   ├── get publicationYear()
    │   └── set publicationYear(value)
    ├── #availableCopies
    │   ├── get availableCopies()
    │   └── set availableCopies(value)
    └── static comparePublicationYears(book1, book2)

User
│
├── #firstName
│   ├── get firstName()
│   └── set firstName(value)
├── #lastName
│   ├── get lastName()
│   └── set lastName(value)
├── #borrowedBooks (private array)
├── borrowBook(book)
├── returnBook(book)
└── static fullName(user)
```
## Objective:
Create a JavaScript inheritance model to manage a library system that consists of `Books` and `Users`. Implement static methods, private properties, and getter/setters in the classes. The library system should satisfy the following requirements:
### 1. _Media class_:
- The Media class should have a private property, `mediaType`, which can be accessed and modified *only through getters and setters*.
- The Media class should have a `constructor` that takes a mediaType as an argument and sets it as the value of the mediaType property.
- The Media class should have a getter for the mediaType property that **returns** its value.
  - The Media class should have a setter for the mediaType property that validates the input value as  
      - if
        - non-empty
        - string then **sets it** as the value of the mediaType.
      - else  
        - empty `or`
        - not string then it will **throw an error** as `Media type must be a non-empty string.` refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for Media
```
const media = new Media("Broadcasting");
console.log(media.mediaType) // Broadcasting 
console.log(media.mediaType = "") // throw Error: Media type must be a non-empty string.
```
### 2. _Book class_:
- The Book class should inherit from a generic `Media class` using the `extends` keyword. with an additional private property called mediaType (string) and corresponding getter/setter.

- The Book class should have a `constructor` that takes title, author, publication year, and available copies as arguments and sets them as the values of the corresponding properties.

 **Books should receive the following private properties as an argument:**

1. title (string)
2. author (string)
3. publicationYear (number)
4. availableCopies (number) 

- The Book class should have getters and setters for the title, author, publication year, and available copies properties that validate the input values set them as the values of the corresponding properties, and can be *accessed and modified only through getters/setters*.
 
1. for the title
  - `Getters for title property`
    - The Book class should have a getter for the property that **returns** its title.
  - `Setters for title property`
    - The Book class should have a setter for the title property that validates the input value as
      - if  
        1. non-empty
        2. string then **sets it** as the value of the title.
      - else
        1. empty `or`
        2. not string then it will **throw an error** as `title must be a non-empty string.` refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for Book title property
```
const book = new Book("spiderman") 
console.log(book.title) //spiderman
console.log(book.title="") // throw Error :title must be a non-empty string.
```
- ... Repeat for other properties (author, publicationYear, availableCopies) 

- The setters should enforce the following constraints:
1. Book *title* should be non-empty strings if not then throw an error as `title must be a non-empty string.`.
2. Book *author* should be non-empty strings if not then throw an error as `author must be a non-empty string.`. 
3. Book *publicationYear* should be a `positive` integer if not then throw the error as `publicationYear must be a positive integer.`. 
4. Book *availableCopies* should be a `non-negative` integer if not then throw the error as `availableCopies must be a non-negative integer.`. 

- Implement a static method in the `Book class` called **`comparePublicationYears`**(book1: Book, book2: Book) that takes *two Book objects* as arguments and compares two Book instances based on their *publication years*.
- It should return 
  - -1 if the publication year of the first book is earlier than the second book, 
  - 0 if they have the same publication year, and
  - 1 if the publication year of the first book is later than the second book.

 The mediaType should be set to "Book" during the instantiation of the Book class.

### Example usage for static method: comparePublicationYears
```
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
const book2 = new Book("1984", "George Orwell", 1949, 10);
console.log(
  "Comparing publication years:",
  Book.comparePublicationYears(book1, book2)
); // 1
```
### 3. _User class_:
## Users should receive the following private properties as an argument :

1. firstName (string)
2. lastName (string)
3. borrowedBooks (`array of Book instances`)
which can be accessed and modified only through getters and setters.

- The User class should have a `constructor` that takes a first name and last name as arguments and sets them as the values of the corresponding properties. It should also initialize an empty array for the borrowed books property.

- The User class should have getters and setters for first name and last name properties that validate the input values and set them as the values of the corresponding properties.

1. for firstName
  - `Getters for firstName property`
    - The User class should have a getter for the property that **returns** its firstName.
  - `Setters for firstName property`
    - The User class should have a setter for the firstName property that validates the input value as
      - if  
        1. non-empty
        2. string then **sets it** as the value of the firstName.
      - else
        1. empty `or`
        2. not string then it will **throw an error** as `firstName must be a non-empty string.` refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for User firstName property
```
const user = new User("Alice", "Smith");
console.log(user.firstName); // Alice
console.log(user.firstName="") // throw Error :firstName must be a non-empty string.
```
- ... Repeat for other properties (lastName)

The setters should enforce the following constraints:
- User's firstName should be non-empty strings if not then throw an error 
   - setters for User properties -> ``
1. User *lastName* should be non-empty strings if not then throw an error as `lastName must be a non-empty string.`
2. User *firstName* should be non-empty strings if not then throw an error as `firstName must be a non-empty string.`

### Users should have the following methods:
1. `borrowBook(book: Book)` - The User class should have a method, borrowBook, that takes a `Book object` as an argument and adds it to the borrowed books property of the user. It should also **decrement** the availableCopies property of the book by 1.

2. `returnBook(book: Book)` - The User class should have a method, returnBook, that takes a `Book object` as an argument and removes it from the borrowed books property of the user. It should also **increment** the availableCopies property of the book by 1.

### Example usage: borrowBook and returnBook methods

```
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
const book2 = new Book("1984", "George Orwell", 1949, 10);

const user1 = new User("Alice", "Smith");
user1.borrowBook(book1);
console.log("Book1 availableCopies:", book1.availableCopies); // 4

user1.borrowBook(book2);
console.log("Book 2 availableCopies:", book2.availableCopies); // 9

user1.returnBook(book1);
console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5
```

- The User class should have a `static` method, *fullName*, that takes a `User object `as an argument and **returns** the full name of the user by concatenating the first name and last name properties.
### Example usage for static method: fullName
```
  const user = new User("Alice", "Smith");
  console.log(User.fullName(user)); // Alice Smith
```

- You should create a program that demonstrates the functionality of the classes and methods outlined above. The implementation should allow the creation of Books and Users, the borrowing and returning of books, and the usage of static methods and getters/setters.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
