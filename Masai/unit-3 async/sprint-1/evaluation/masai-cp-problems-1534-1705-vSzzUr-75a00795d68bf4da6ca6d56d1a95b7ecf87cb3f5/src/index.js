//**********************************Problem 1 */ 4 Marks + 2 marks
// Problem 1. `CreateEmployee_1` factory function (4 Marks)
// you are not allowed to use the this keyword in the CreateEmployee_1 function.

function CreateEmployee_1(firstname, lastname, salary, employeeStatus, employeeTitle, currentTasks) {
  employeeStatus = employeeStatus || "terminated";
  employeeTitle = employeeTitle || "Intern";

  let employee = {
    firstname: firstname,
    lastname: lastname,
    salary: salary,
    employeeStatus: employeeStatus,
    employeeTitle: employeeTitle,
    currentTasks: currentTasks || [],

    fullName: function() { `${this.firstname} ${this.lastname}` },
    empPromotion: function() {
      if (this.employeeStatus === "terminated") {
        return `employee is already terminated can't be promoted.`;
      } else {
        switch (this.employeeTitle) {
          case "Intern": this.employeeTitle = "Jr Software Developer";
            break;
          case "Jr Software Developer": this.employeeTitle = "Sr Software Developer";
            break;
          case "Sr Software Developer": this.employeeTitle = "Team Lead";
            break;
          case "Team Lead": this.employeeTitle = "Team Lead";
            break;
          default: return "Invalid employeeTitle";
        }
        return `current title of employee is ${this.employeeTitle}`;
      }
    },
    getSalary: function () { return this.salary },
    increaseSalary: function (amount) {
      this.salary += amount;
      return this.salary;
    },
    addTask: function (task) {
      this.currentTasks.push(task);
      return this.currentTasks;
    },
  };
  return employee;
}

//Example usage :
//  let employee1 = CreateEmployee_1("Smith", "Murphy", 100, "", "Team Lead", [ "react question"]);

// console.log(employee1.fullName()) //Smith Murphy
// console.log(employee1.empPromotion());//employee is already terminated can't be promoted.
// console.log(employee1.getSalary());//100
// console.log(employee1.increaseSalary(100));//200
// console.log(employee1.addTask("assignment"));//[ 'react question', 'assignment' ]

//**********************************Problem 2 */ 2 Marks // Problem 2. `CreateEmployee_2` constructor function (2 Marks)

function CreateEmployee_2(firstname, lastname, salary) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.salary = salary;

  this.fullName = () => `${this.firstname} ${this.lastname}`;
  this.getSalary = () => this.salary;
  this.increaseSalary = (amount) => {
    this.salary += amount;
    return this.salary;
  };
  this.istaxed = () => {
    return this.salary >= 800000;
  };
}

// // Example usage
// let employee2 = new CreateEmployee_2("elon", "mask", 1000);

// console.log(employee2);
// console.log(employee2.fullName()); //elon mask
// console.log(employee2.getSalary()); //1000
// console.log(employee2.increaseSalary(500)); //1500
// console.log(employee2.istaxed()); // true

//**********************************Problem 3 */ 2 Marks //Problem 3. `CreateEmployee_3` class (2 Marks)

class CreateEmployee_3 {
  constructor(firstname, lastname, salary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
  }
  fullName() { return `${this.firstname} ${this.lastname}` }
  getSalary() {return this.salary; }
  increaseSalary(amount) {
    salary += amount;
    return this.salary;
  }
  istaxed() {
    return this.salary >= 800000;
  }
}

// // Example usage
// let employee3 = new CreateEmployee_3("elon", "mask", 1000);

// console.log(employee3);
// console.log(employee3.fullName()); //elon mask
// console.log(employee3.increaseSalary(500)); //1500
// console.log(employee3.istaxed()); // true

//**********************************Problem 4 */ 2 Marks
//Array destructuring and spread operator

function removeKeyValuePair(user, keyToRemove) {
  let { [keyToRemove]: _, ...updatedUser } = user;
  return updatedUser;
}

//Example usage
// console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }

//**********************************Problem 5 */ 2 Marks

//Given a string, reverse each word in the sentence

function reverseString(sentence) {
  let words = sentence.split(" ");
  let reverseWordd = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverseWordd.join(" ");
}

//Example usage
//console.log(reverseString(sentence)); //uoy era woH

// ********************************Problem 6 */ 2 Marks + 2 marks

let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let CourseCategoriesDirectory = {
  1: "Frontend",
  2: "Backend",
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
  6: "database tester",
};

let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let typeOfCourseDirectory = typeOfCourse.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let exampleInputArray = [
  {
    courseName: "masai frontend web26",
    courseDuration: 2,
    Category: 3,
    type: 1,
    techTools: {
      1: "HTML",
      2: "CSS",
      3: "javaScript",
      4: "React",
      5: "Redux",
      6: "Node.js",
      7: "Express",
      8: "MongoDB",
      9: "Bootstrap",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "HTML is the standard markup language for Web pages.",
      2: "CSS is the language we use to style an HTML document. ",
      3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
      4: "React is a JavaScript library for building user interfaces.",
      5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
      6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      7: "Express is a minimal and flexible Node.js web application framework .",
      8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
      9: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "foundation batch",
    courseDuration: 2,
    Category: 4,
    type: 2,
    techTools: {
      1: "aptitude",
      2: "GitHub",
      3: "C",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "1. a natural ability or skill: 2. a natural ability or skill:",
      2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
      3: "C is a general-purpose programming language, developed in 1972",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "Java batch",
    courseDuration: 1,
    Category: 5,
    type: 1,
    techTools: {
      1: "ETL",
      2: "Perl",
      3: "C#",
      4: "Python",
      5: "PHP",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
      2: "Perl is a high-level scripting language",
      3: "C# was originally designed to be easy to learn and use",
      4: "Python is one of the most beginner-friendly programming languages out there.",
      5: "PHP is a scripting language running on the server side",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
];

//Example Invocation
let obj = massageArray(exampleInputArray);
console.log(JSON.stringify(obj));

function massageArray(inputArray) { }
//Example Invocation
//let obj2 = massageArray(exampleInputArray);
//console.log(JSON.stringify(obj2));

// Dont remove below export statement part
export {
  CreateEmployee_1,
  CreateEmployee_2,
  CreateEmployee_3,
  massageArray,
  exampleInputArray,
  removeKeyValuePair,
  reverseString,
};
