# Employee Management System 👩‍💻👨‍💼
#### Array and Objects

## Submission Instructions [Please note]

## Maximum marks - 21

## Installation

```
npm install --engine-strict
```

## Test

```
npm t
```

## Test (Watch mode)

```
npm t -- --watchAll
```

## file structure

most of your work would happen in the `src/index.js` file.

**<span style="color: green">read the test results carefully, they may provide you some extra information.</span>**

```
✅ submit the problem [1 mark]

### Test cases for Problem 1
✅ Objects created by CreateEmployee_1 have correct properties example-1[2 marks]
✅ Objects created by CreateEmployee_1 have correct properties example-2[2 marks]
✅ Objects created by CreateEmployee_1 have correct methods example-1[1 marks]
✅ Objects created by CreateEmployee_1 have correct methods example-2[1 marks]

### Test cases for Problem 2
✅ Objects created using CreateEmployee_2 are working as expected[2 marks]
✅ Objects created using CreateEmployee_2's  methods are working as expected [1 mark]

### Test cases for Problem 3
✅ Objects created using CreateEmployee_3 are working as expected[2 marks]
✅ Objects created using CreateEmployee_3's methods are working as expected [1 mark]

### Test cases for Problem 4
✅ checking removeKeyValuePair in object[2 marks]

### Test cases for Problem 5
✅ checking reverseString in string[2 marks]

### Test cases for Problem 6
✅ array returned by massageArray to have property-value as expected[2 marks]
✅ array returned by massageArray to be as expected [2 marks]
```

<span style="color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>.

## Problem statement. 1 [2 + 1]

Define a **factory function** called `CreateEmployee_1` which takes in the following parameters:

- *CreateEmployee_1* takes six input parameters 

| input parameters | type | default values |
| -------------- | -------------- | -------------- |
| firstname        | string           | -              |
| lastname         | string           | -              |
| salary           | number           | -              |
| employeeStatus   | string           | terminated     |
| employeeTitle    | string           | Intern         |
| currentTasks     | array of strings | -              |


1. `firstname` (string): the firstname of the employee.
2. `lastname` (string): the lastname of the employee.
3. `salary` (number): the salary for the employee.
4. `employeeStatus` (string): the employeeStatus may be `working/terminated` default value must be **_`terminated`_**.
5. `employeeTitle` (string): employeeTitle as follow
    - a. **_`Intern`_** (Default value for employeeTitle)
    - b. Jr Software Developer
    - c. Sr Software Developer
    - d. Team Lead
6. `currentTasks` (array of strings): the task given to employee in string is present in array and using `addTask` method we are pushing new task to this array.

- If a falsey value like "" is passed to **employeeStatus** or **employeeTitle** in this case their `default` values must added to the object.

The "CreateEmployee_1" function returns an object containing the employee's details as properties, along with five methods  `fullName`,`empPromotion`, `getSalary`, `increaseSalary`, and `addTask`.

- *`fullName`* method `returns` string with text `{firstname} {lastname}`

- *`empPromotion`* is a method to `promote` the employee in case
   - if _employeeStatus_ is **terminated** `returns` string with text `employee is already terminated can't be promoted.`

   - else if _employeeStatus_ is **working** in that case employee is promoted as
      | current employeeTitle | promoted employeeTitle | 
      | :---: | :---: | 
      | Intern | Jr Software Developer |
      | Jr Software Developer | Sr Software Developer |
      | Sr Software Developer | Team Lead |
      | Team Lead | Team Lead (as it is) |
    
    - `empPromotion` should return `current title of employee is {the new employeeTitle}` **if** their employeeStatus is *working* **else** it should return `employee is already terminated can't be promoted.`

- *`getSalary`* method `returns` **salary** of employee.

- *`increaseSalary`* method `returns` **increased Salary** of employee.

- *`addTask`* method `returns` a currentTasks as
    - addTask takes in a `string` value and pushes them to the `currentTask` array. addTask **return updated currentTasks array**

    - Here currentTasks is an array when a new task is added push it to the currentTasks array .

Example invocation with expected outputs:

```
// Example invocation
let employee1 = CreateEmployee_1("Smith", "Murphy", 100, "", "Team Lead", [
  "react question",
]);

// console.log(employee1.fullName()) //Smith Murphy
// console.log(employee1.empPromotion());//employee is already terminated can't be promoted.
// console.log(employee1.getSalary());//100
// console.log(employee1.increaseSalary(100));//200
// console.log(employee1.addTask("assignment"));//[ 'react question', 'assignment' ]
```
- In above example you can notice if `employeeStatus` is just empty string we have set default value as `terminated` and because of this we can't promote the employee.

- If your input for `employeeTitle` is say "`Manager`" or "" which not belong (Intern, Jr Software Developer, Sr Software Developer,
Team Lead) in that case your default value must be `Intern`.

The purpose of this code is to provide a reusable function that creates employee objects with specific properties and methods that can be used to manipulate and get information about the employee. This function can be used to create multiple employee objects with different details based on the given parameters.

## Problem statement. 2 [2]

Define a **_constructor functions_** called `CreateEmployee_2` which takes in the following parameters:

1. `firstname` (string): the firstname of the employee.
2. `lastname` (string): the lastname of the employee.
3. `salary` (number): the salary for the employee.

The function returns an object containing the employee's details as properties, along with four methods `fullName`, `getSalary`, `increaseSalary`, and `istaxed`.

- *`fullName`* method `returns` string with text `{firstname} {lastname}`

- *`getSalary`* method `returns` **salary** of employee.

- *`increaseSalary`* method `returns` **increased Salary** of employee.

- *`istaxed`* method `returns` a Boolean value based on whether the employee's `salary` is `greater than or equal to` *800000* or not.

Example invocation with expected outputs:

```
let employee1 = new CreateEmployee_2(
  "elon",
  "mask",
  50000,
);
console.log(employee1);
console.log(employee1.fullName()); //elon mask
console.log(employee1.getSalary()); //50000
console.log(employee1.increaseSalary(500)); //50500
console.log(employee1.istaxed()); // false
```

## Problem statement. 3 [2]

Implement the functionality same as Problem 2. using `CreateEmployee_3` **_ES6 Classes_** and **_constructor_**.

Example invocation with expected outputs:

```
let employee2 = new CreateEmployee_3(
  "elon",
  "mask",
  850000,
)
console.log(employee2);
console.log(employee2.fullName()); //elon mask
console.log(employee2.getSalary()); //850000
console.log(employee2.increaseSalary(500)); //850500
console.log(employee2.istaxed()); // true
```

## Problem statement. 4 [2]

For an object with user details, you have to create a function removeKeyValuePair that takes input as 
  - user object
  - key to remove (string)

the function *removeKeyValuePair* will `return` the object without the key-value pair you have given for example we are passing `city` should get the object of a user without `city` as follows 

- you can use any method to implement but the recommended one is using the *spread operator*.[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- **Input**
```
const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
}
```
- **Output**
```
// console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }
```
## Problem statement. 5 [2]

You have given a sentence with words your task is to reverse each word in the sentence
 
the function *reverseString* will `return` sentence with reverse order.

- you can use any method to implement but the recommended one is using the *split operator*.[link](https://www.freecodecamp.org/news/javascript-split-string-example/)

- **Input**
```
const sentence= "How are you"
```
- **Output**
```
//console.log(reverseString(sentence)); //uoy era woH
```
## Problem statement. 6 [2 + 2]

The function `massageArray()` is expected to return an array of objects.

Parameter of `massageArray()`: `inputArray` of type array

### Provided `typeOfCourse`:

```
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
```

### Provided `categories`

```
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
```

### Example Input Array:

```
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
```

- If `techTools` and `techdetails` values are null or "" avoid them in the output array.

### Expected output with the above input:

```
     let eo1 = [
    {
      courseName: "masai frontend web26",
      courseDuration: "1 year",
      Category: "Fullstack",
      type: "Developer",
      techTools: [
        {
          language: "HTML",
          details: "HTML is the standard markup language for Web pages.",
        },
        {
          language: "CSS",
          details: "CSS is the language we use to style an HTML document. ",
        },
        {
          language: "javaScript",
          details:
            "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
        },
        {
          language: "React",
          details: "React is a JavaScript library for building user interfaces.",
        },
        {
          language: "Redux",
          details:
            "Redux is an open-source JavaScript library for managing and centralizing application state.",
        },
        {
          language: "Node.js",
          details:
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          language: "Express",
          details:
            "Express is a minimal and flexible Node.js web application framework .",
        },
        {
          language: "MongoDB",
          details:
            "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
        },
        {
          language: "Bootstrap",
          details:
            "Bootstrap utilizes Sass for a modular and customizable architecture. ",
        },
      ],
    },
    {
      courseName: "foundation batch",
      courseDuration: "1 year",
      Category: "manual tester",
      type: "Tester",
      techTools: [
        {
          language: "aptitude",
          details:
            "1. a natural ability or skill: 2. a natural ability or skill:",
        },
        {
          language: "GitHub",
          details:
            "The open source community is the heart of GitHub and fundamental to how we build software today.",
        },
        {
          language: "C",
          details:
            "C is a general-purpose programming language, developed in 1972",
        },
      ],
    },
    {
      courseName: "Java batch",
      courseDuration: "6 month",
      Category: "automation tester",
      type: "Developer",
      techTools: [
        {
          language: "ETL",
          details:
            "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
        },
        { language: "Perl", details: "Perl is a high-level scripting language" },
        {
          language: "C#",
          details: "C# was originally designed to be easy to learn and use",
        },
        {
          language: "Python",
          details:
            "Python is one of the most beginner-friendly programming languages out there.",
        },
        {
          language: "PHP",
          details: "PHP is a scripting language running on the server side",
        },
      ],
    },
  ]
```

### Mapping of properties from input to expected output

- *`courseName`* maps to courseName
- *`courseDuration`* maps to Category, but the id turns into the name
- *`Category`* maps to CourseDurationDirectory, but the id turns into the name
- *`type`* maps to typeOfCourse, but the id turns into the name
- finally, 20 key-value pair techTools object & 20 key-value pair techdetails object turns into a single entry of `techTools` which is an array of object. Each object of techTools contains a key called `language` and another key called `details`.

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

