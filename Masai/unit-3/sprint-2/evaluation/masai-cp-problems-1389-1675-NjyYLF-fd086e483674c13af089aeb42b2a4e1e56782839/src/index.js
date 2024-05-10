//**********************Problem 1 */

function Weather(location,temperature,conditions) {
  // create Weather Constructor function
  this.location=location;
  this.temperature=temperature;
  this.conditions=conditions;
  // Define a display() method for the Weather
}
Weather.prototype.display=function(){
  return `current weather conditions for location ${this.location} having temperature ${this.temperature} degrees and weather condition is ${this.conditions}`
}
Object.setPrototypeOf(Sunny.prototype,Weather.prototype)
// Sunny.prototype=Object.create(Weather.prototype)
// Sunny.prototype.constructor = Sunny;

function Sunny(location,temperature,conditions) {
  // Define Sunny Constructor function that inherits from Weather
  // Set up prototype inheritance for Sunny
  Weather.call(this, location, temperature, conditions='sunny')
  // Define a display() method for the Sunny
}
Sunny.prototype.display= function(){
  return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions}`
}
Object.setPrototypeOf(Rainy.prototype,Weather.prototype)
// Rainy.prototype=Object.create(Weather.prototype);
// Rainy.prototype.constructor=Rainy;

function Rainy(location,temperature,precipitation,conditions='rainy') {
  Weather.call(this,location,temperature,conditions);
  this.precipitation=precipitation;
  // create Rainy Constructor function that inherits from Weather
  // Set up prototype inheritance for Rainy
  // Define a display() method for the Rainy
}
Rainy.prototype.display=function(){
  return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions} and precipitation is ${this.precipitation}`
}

Weather.prototype.setLocation=function(location){
  this.location=location;
}
Weather.prototype.setTemperature=function(temperature){
  this.temperature=temperature;
}
//**********************Problem 2 */

class Athlete {
  constructor(name,age,sport){
    this.name=name;
    this.age=age;
    this.sport=sport;
  }
  // The "Athlete" class should have a constructor that takes in the athlete's name, age, and sport as parameters
  // Define a train() method for the Athlete object
  train(){
    return `athlete ${this.name} is training for ${this.sport}`
  }
  // Define a compete() method for the Athlete object
  compete(){
    return `athlete ${this.name} is competing for ${this.sport}`
  }
}

class Runner extends Athlete {
  constructor(name,age,sport,distance){
    super(name,age,sport);
    this.distance=distance;
  }
  train(){
    return `athlete ${this.name} is training for distance of ${this.distance}m`
  }
  compete(){
   return `athlete ${this.name} is competing for distance of ${this.distance}m` 
  }
  // The "Runner" class should inherit from the Athlete class
  //Runner class should override the train and compete that inherited from the "Athlete" class
}

class Swimmer extends Athlete {
  constructor(name,age,sport,SwimmingStyle){
    super(name,age,sport,);
    this.SwimmingStyle=SwimmingStyle;
  }
  train(){
    return `athlete ${this.name} is training for swimming with style of ${this.SwimmingStyle}`
  }
  compete(){
    return `athlete ${this.name} is competing for swimming with style of ${this.SwimmingStyle}`
  }
  // The "Swimmer" class should inherit from the Athlete class
  //Swimmer class should override the train and compete that inherited from the "Athlete" class
}

//**********************Problem 3 */

class Person {
  constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
  displayInfo(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`
  }
  // Create a class called Person name ,age ,gender
  // Define a displayInfo() method for the Person object
}

class Student {
  constructor(StudentID,Major,Courses=[]){
    this.StudentID=StudentID;
    this.Major=Major;
    this.Courses=Courses;
  }
  // The Student class should inherit from the Person class with properties name ,age ,gender , StudentID,Major,Courses
  // Define a displayInfo() method for the Student object
  displayInfo(){
    return `Name: {name}, Age: {age}, Gender: {gender}, Student ID: ${this.StudentID}, Major: ${this.Major}, Courses: ${this.Courses}`
  }
  // Define a enroll() method for the Student object
  // Define a drop() method for the Student object
}

class Professor {
  // The Professor class should inherit from the Person class with properties name ,age ,gender , professorID  and department
  // Define a displayInfo() method for the Professor object
  // Define a teach() method for the Professor object
  // Define a grade() method for the Professor object
}

//**********************Problem 4 */

// Generic Media class
class Media {
   // use constructor to take input
  // Getter for mediaType
  get mediaType() {}

  // Setter for mediaType
  set mediaType(value) {}
}

// Book class inheriting from Media
class Book {
  // use constructor to take input

  // Getters and setters for Book properties
  get title() {}
  set title(value) {}

  // ... Repeat for other properties (author, publicationYear, availableCopies)

  // Static method to compare publication years of two books
  static comparePublicationYears() {}
}

// User class
class User {
  // use constructor to take input
  // Getters and setters for User properties
  get firstName() {}
  set firstName(value) {}
  // ... Repeat for other properties (lastName)
  // Method to borrow a book
  borrowBook() {}
  // Method to return a book
  returnBook() {}

  // Static method to get the full name of a user
}




// Example usage media

// const media = new Media("Broadcasting");
// console.log(media.mediaType) // Broadcasting 
// console.log(media.mediaType = "") // throw Error: Media type must be a non-empty string.

//example for Book 
// const book = new Book("spiderman") 
// console.log(book.title) //spiderman
// console.log(book.title="") // throw Error :title must be a non-empty string.

//Example usage for static method : comparePublicationYears
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);
// console.log(
//   "Comparing publication years:",
//   Book.comparePublicationYears(book1, book2)
// ); // 1



// Example usage User
// Example usage for User firstName property
// const user = new User("Alice", "Smith");
// console.log(user.firstName); // Alice
// console.log(user.firstName="") // throw Error :firstName must be a non-empty string.


// Example usage for : borrowBook and returnBook methods
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);

// const user1 = new User("Alice", "Smith");
// user1.borrowBook(book1);
// console.log("Book1 availableCopies:", book1.availableCopies); // 4

// user1.borrowBook(book2);
// console.log("Book 2 availableCopies:", book2.availableCopies); // 9

// user1.returnBook(book1);
// console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5


// Example usage for static method : fullName
// const user = new User("Alice", "Smith");
// console.log(User.fullName(user)); // Alice Smith

// !Note : Do not remove the following export statement
module.exports = {
  Weather,
  Sunny,
  Rainy,
  Person,
  Student,
  Professor,
  Athlete,
  Runner,
  Swimmer,
  Media,
  Book,
  User,
};
