//get deatils test cases
import {
  CreateEmployee_1,
  CreateEmployee_2,
  CreateEmployee_3,
  massageArray,
  exampleInputArray,
  removeKeyValuePair,
  reverseString,
} from "../index";
global.score = 1;

describe("Object properties and expected return", function () {
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
          details:
            "React is a JavaScript library for building user interfaces.",
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
        {
          language: "Perl",
          details: "Perl is a high-level scripting language",
        },
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
  ];

  let eo2 = [
    {
      courseName: "web 27 batch",
      courseDuration: "6 month",
      Category: "database tester",
      type: "Developer",
      techTools: [
        {
          language: "PHP",
          details: "PHP is a scripting language running on the server side",
        },
        {
          language: "Objective-C",
          details:
            "Objecive-C is the primary language by Apple for developing programs for Mac OS X and iOS.",
        },
        {
          language: "Python",
          details:
            "Python is one of the most beginner-friendly programming languages out there.",
        },
      ],
    },
    {
      courseName: "web 28 batch",
      courseDuration: "2 year",
      Category: "Frontend",
      type: "Tester",
      techTools: [
        {
          language: "Ruby",
          details:
            "Ruby is a very high-level, multi-purpose programming language",
        },
        {
          language: "SQL",
          details: "SQL or Structured Query Language",
        },
        {
          language: "Swift",
          details:
            "Apple developed their own programming language now known as Swift.",
        },
      ],
    },
    {
      courseName: "web 29 batch",
      courseDuration: "1 year",
      Category: "Backend",
      type: "Developer",
      techTools: [
        {
          language: "C++",
          details: "C++ a powerful, high-performance language",
        },
        {
          language: "Perl",
          details: "Perl is a high-level scripting language ",
        },
        {
          language: "C#",
          details: "C# was originally designed to be easy to learn and use",
        },
      ],
    },
  ];

  let exampleInputArray2 = [
    {
      courseName: "web 27 batch",
      courseDuration: 1,
      Category: 6,
      type: 1,
      techTools: {
        1: "PHP",
        2: "Objective-C",
        3: "Python",
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
        1: "PHP is a scripting language running on the server side",
        2: "Objecive-C is the primary language by Apple for developing programs for Mac OS X and iOS.",
        3: "Python is one of the most beginner-friendly programming languages out there.",
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
      courseName: "web 28 batch",
      courseDuration: 3,
      Category: 1,
      type: 2,
      techTools: {
        1: "Ruby",
        2: "SQL",
        3: "Swift",
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
        1: "Ruby is a very high-level, multi-purpose programming language",
        2: "SQL or Structured Query Language",
        3: "Apple developed their own programming language now known as Swift.",
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
      courseName: "web 29 batch",
      courseDuration: 2,
      Category: 2,
      type: 1,
      techTools: {
        1: "C++",
        2: "Perl",
        3: "C#",
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
        1: "C++ a powerful, high-performance language",
        2: "Perl is a high-level scripting language ",
        3: "C# was originally designed to be easy to learn and use",
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
  ];

  const employee1 = CreateEmployee_1(
    "Thomas",
  "Williams",
  4125,
  "",
  "Team Lead",
  ["workout"]
  );

  const employee2 = CreateEmployee_1(
    "Jones",
    "Walsh",
    12365,
    "working",
    "",
    ["write blog"]
  );

  //Test cases for problem 1
  test("Objects created by CreateEmployee_1 have correct properties example-1", () => {
    // const checkthis = createEmployee.toString();
    // expect(checkthis).not.toContain("this");

    expect(typeof employee1).toBe("object");
    expect(employee1.firstname).toBe("Thomas");
    expect(employee1.lastname).toBe("Williams");
    expect(employee1.salary).toBe(4125);
    expect(employee1.employeeStatus).toBe("terminated");
    expect(employee1.employeeTitle).toBe("Team Lead");
    expect(employee1.currentTasks[0]).toBe("workout");

    global.score += 2;
  }); //2
  test("Objects created by CreateEmployee_1 have correct properties example-2", () => {
    // const checkthis = createEmployee.toString();
    // expect(checkthis).not.toContain("this");
    expect(typeof employee2).toBe("object");
    expect(employee2.firstname).toBe("Jones");
    expect(employee2.lastname).toBe("Walsh");
    expect(employee2.salary).toBe(12365);
    expect(employee2.employeeStatus).toBe("working");
    expect(employee2.employeeTitle).toBe("Intern");
    expect(employee2.currentTasks[0]).toBe("write blog");

    global.score += 2;
  }); //2

  test("Objects created by CreateEmployee_1 have correct methods example-1", () => {
    expect(employee1.fullName()).toBe("Thomas Williams");
    expect(employee1.empPromotion()).toBe(
      "employee is already terminated can't be promoted."
    );
    expect(employee1.getSalary()).toBe(4125);
    expect(employee1.increaseSalary(500)).toBe(4625);
    expect(employee1.addTask("painting"));
    expect(employee1.currentTasks[1]).toBe("painting");

    global.score += 1;
  }); //1

  test("Objects created by CreateEmployee_1 have correct methods example-2", () => {
    expect(employee2.fullName()).toBe("Jones Walsh");
    expect(employee2.empPromotion()).toBe(
      "current title of employee is Jr Software Developer"
    );
    expect(employee2.getSalary()).toBe(12365);
    expect(employee2.increaseSalary(4512)).toBe(16877);
    expect(employee2.addTask("assignment"));
    expect(employee2.currentTasks[1]).toBe("assignment");
    global.score += 1;
  }); //1

  //Test cases for problem 2
  test("Objects created using CreateEmployee_2 are working as expected", () => {
    const employee = new CreateEmployee_2("tony", "stark", 41258);
    expect(employee.firstname).toBe("tony");
    expect(employee.lastname).toBe("stark");
    expect(employee.salary).toBe(41258);
    global.score += 2;
  }); //2
  test("Objects created using CreateEmployee_2's  methods are working as expected", () => {
    const employee = new CreateEmployee_2("tony", "stark", 41258);
    expect(employee.fullName()).toBe("tony stark");
    expect(employee.getSalary()).toBe(41258);
    expect(employee.increaseSalary(500)).toBe(41758);
    expect(employee.istaxed()).toBe(false);

    global.score += 1;
  }); //1

  //Test cases for problem 3
  test("Objects created using CreateEmployee_3 are working as expected", () => {
    const employee = new CreateEmployee_3("mark", "Johansson", 812354);
    expect(employee.firstname).toBe("mark");
    expect(employee.lastname).toBe("Johansson");
    expect(employee.salary).toBe(812354);

    global.score += 2;
  }); //2

  test("Objects created using CreateEmployee_3's methods are working as expected", () => {
    const employee = new CreateEmployee_3("mark", "Johansson", 812354);
    expect(employee.fullName()).toBe("mark Johansson");
    expect(employee.getSalary()).toBe(812354);
    expect(employee.increaseSalary(500)).toBe(812854);
    expect(employee.istaxed()).toBe(true);
    global.score += 1;
  }); //1

  //Test cases for problem 4
  test("checking removeKeyValuePair in object", () => {
    const user = {
      name: "test",
      password: "test343",
      id: "dgjgg566",
      city: "GOA",
    };
    expect(removeKeyValuePair(user, "password").password).toBe(undefined);

    global.score += 2;
  }); //2

  //Test cases for problem 5
  test("checking reverseString in string", () => {
    const str = "How many stuDeNts are inCLaSS!@";

    expect(reverseString(str)).toBe("woH ynam stNeDuts era @!SSaLCni");

    global.score += 2;
  }); //2

  //Test cases for problem 6
  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].courseName).toBe("masai frontend web26");
    expect(o1[0].courseDuration).toBe("1 year");
    expect(o1[0].Category).toBe("Fullstack");
    expect(o1[0].type).toBe("Developer");

    expect(o2[1].courseName).toBe("web 28 batch");
    expect(o2[1].courseDuration).toBe("2 year");
    expect(o2[1].Category).toBe("Frontend");
    expect(o2[1].type).toBe("Tester");

    global.score += 2;
  }); //2

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);
    global.score += 2;
  }); //2

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
