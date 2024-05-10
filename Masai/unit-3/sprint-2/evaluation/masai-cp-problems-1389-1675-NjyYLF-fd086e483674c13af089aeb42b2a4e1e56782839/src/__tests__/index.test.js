const {
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
} = require("../index");

global.score = 1;

describe("Weather object", () => {
  test("should create a new Weather with correct location ,temperature and conditions", () => {
    const weather = new Weather("NewYork", 23, "heavy");
    expect(weather.location).toBe("NewYork");
    expect(weather.temperature).toBe(23);
    expect(weather.conditions).toBe("heavy");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const weather = new Weather("NewYork", 23, "heavy");
    const expectedMessage =
      "current weather conditions for location NewYork having temperature 23 degrees and weather condition is heavy";
    expect(weather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the Sunny object
describe("Sunny object", () => {
  test("should create a new Sunny object  with correct location, temperature, and conditions properties", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.location).toBe("Indiana");
    expect(sunnyWeather.temperature).toBe(42);
    expect(sunnyWeather.conditions).toBe("sunny");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    const expectedMessage =
      "we are at location Indiana temperature here is 42 degrees weather condition is sunny";
    expect(sunnyWeather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the Rainy object
describe("Rainy object", () => {
  test("should create a new Rainy object  with correct location, temperature, and conditions properties", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    expect(rainyWeather.location).toBe("Kashmir");
    expect(rainyWeather.temperature).toBe(12);
    expect(rainyWeather.conditions).toBe("rainy");
    expect(rainyWeather.precipitation).toBe("light");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    const expectedMessage =
      // "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
      "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
    expect(rainyWeather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the setLocation and setTemperture for sunnyWeather
describe("Checks for the setLocation and setTemperture on Sunny Object", () => {
  test("testing setLocation", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.location).toBe("Indiana");
    sunnyWeather.setLocation("Nagpur");
    expect(sunnyWeather.location).toBe("Nagpur");
    global.score += 1;
  });
  test("testing setTemperture", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.temperature).toBe(42);
    sunnyWeather.setTemperature(36);
    expect(sunnyWeather.temperature).toBe(36);
    global.score += 1;
  });
});

// Test cases for the setLocation and setTemperture for rainyWeather
describe("Checks for the setLocation and setTemperture on Rainy Object", () => {
  test("testing setLocation", () => {
    const rainyWeather = new Rainy("Banglore", 22);
    expect(rainyWeather.location).toBe("Banglore");
    rainyWeather.setLocation("Odisha");
    expect(rainyWeather.location).toBe("Odisha");
    global.score += 1;
  });
  test("testing setTemperture", () => {
    const rainyWeather = new Rainy("Banglore", 22);
    expect(rainyWeather.temperature).toBe(22);
    rainyWeather.setTemperature(36);
    expect(rainyWeather.temperature).toBe(36);
    global.score += 1;
  });
});

// Test cases for Athlete class
describe("Athlete class ", () => {
  it("Create Athlete class and initializes with properties name,age and sport", () => {
    let athlete = new Athlete("rohit", 27, "football");
    expect(athlete.name).toBe("rohit");
    expect(athlete.age).toBe(27);
    expect(athlete.sport).toBe("football");
    global.score += 1;
  });

  it("Athlete have methods train ,compete and should display with correct message ", () => {
    let athlete = new Athlete("rohit", 27, "football");

    const expectedMessage1 = "athlete rohit is training for football";
    expect(athlete.train()).toBe(expectedMessage1);
    const expectedMessage2 = "athlete rohit is competing for football";
    expect(athlete.compete()).toBe(expectedMessage2);
    global.score += 1;
  });
});

//Testcase for Runner class
describe("Runner class", () => {
  it("Create Runner class and initializes with properties name,age,sport and distance", () => {
    const runner = new Runner("messi", 37, "tennis", 412);
    expect(runner.name).toBe("messi");
    expect(runner.age).toBe(37);
    expect(runner.sport).toBe("tennis");
    expect(runner.distance).toBe(412);
    global.score += 1;
  });

  it("Runner have methods train ,compete and should display with correct message ", () => {
    const runner = new Runner("messi", 37, "tennis", 412);

    const expectedMessage1 = "athlete messi is training for distance of 412m";
    expect(runner.train()).toBe(expectedMessage1);
    const expectedMessage2 = "athlete messi is competing for distance of 412m";
    expect(runner.compete()).toBe(expectedMessage2);
    global.score += 1;
  });
});

// testcases for swimmer class
describe("Swimmer class ", () => {
  it("Create Swimmer class and initializes with properties name,age,sport,SwimmingStyle", () => {
    let swimmer = new Swimmer("rohit", 27, "football", "backwardSide");
    expect(swimmer.name).toBe("rohit");
    expect(swimmer.age).toBe(27);
    expect(swimmer.sport).toBe("football");
    expect(swimmer.SwimmingStyle).toBe("backwardSide");
    global.score += 1;
  });

  it("Swimmer have methods train ,compete and should display with correct message ", () => {
    let swimmer = new Swimmer("rohit", 27, "football", "backwardSide");

    const expectedMessage1 =
      "athlete rohit is training for swimming with style of backwardSide";
    expect(swimmer.train()).toBe(expectedMessage1);
    const expectedMessage2 =
      "athlete rohit is competing for swimming with style of backwardSide";
    expect(swimmer.compete()).toBe(expectedMessage2);
    global.score += 1;
  });
});

// testcaes for accessing and modifying the properties
describe("accessing and modifying the properties", () => {
  it("accessing and modifying the properties of Runner", () => {
    let runner2 = new Runner("ram", 43, "kho-kho", 466);
    runner2.distance = 200;
    const expectedMessage1 = "athlete ram is training for distance of 200m";
    expect(runner2.train()).toBe(expectedMessage1);
    global.score += 1;
  });
  it("accessing and modifying the properties of Swimmer", () => {
    let swimmer = new Swimmer("rohit", 27, "football", "backwardSide");
    swimmer.SwimmingStyle = "FrontCrawl";
    const expectedMessage1 =
      "athlete rohit is training for swimming with style of FrontCrawl";
    expect(swimmer.train()).toBe(expectedMessage1);
    global.score += 1;
  });
});

//Testcaes for Person
describe("Person Object", () => {
  it("Create Person class and initializes with properties name, age, gender", () => {
    const person = new Person("kiya", 2, "female");

    expect(person.name).toBe("kiya");
    expect(person.age).toBe(2);
    expect(person.gender).toBe("female");
    global.score += 1;
  });

  it("Person have method displayInfo should display with correct message ", () => {
    const person = new Person("kiya", 2, "female");

    const expectedMessage = "Name: kiya, Age: 2, Gender: female";
    expect(person.displayInfo()).toBe(expectedMessage);
    global.score += 1;
  });
});

//Testcases for Student
describe("Student Object", () => {
  it("Create Student class and initializes with properties name, age, gender, StudentID, Major", () => {
    const student = new Student("shree", 20, "male", "972166", "ETC");
    expect(student.name).toBe("shree");
    expect(student.age).toBe(20);
    expect(student.gender).toBe("male");
    expect(student.StudentID).toBe("972166");
    expect(student.Major).toBe("ETC");
    global.score += 1;
  });

  it("Student have method displayInfo ,enroll and drop should display with correct message ", () => {
    const student = new Student("shree", 20, "male", "972166", "Computer");

    const expectedMessage =
      "Name: shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: ";
    expect(student.displayInfo()).toBe(expectedMessage);

    student.enroll("SQL");
    student.enroll("NEXT.js");
    const expectedMessage2 =
      "Name: shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: SQL,NEXT.js";
    expect(student.displayInfo()).toBe(expectedMessage2);

    student.drop("Java");
    expect(student.displayInfo()).toBe(expectedMessage2);
    student.drop("NEXT.js");
    student.enroll("MongoDB");

    const expectedMessage3 =
      "Name: shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: SQL,MongoDB";
    expect(student.displayInfo()).toBe(expectedMessage3);

    global.score += 3;
  });
});

//Testcases for Professor
describe("Professor Object", () => {
  it("Create Professor class and initializes with properties name, age, gender, professorID, department", () => {
    const professor = new Professor("riya", 35, "female", "989554", "IT");
    expect(professor.name).toBe("riya");
    expect(professor.age).toBe(35);
    expect(professor.gender).toBe("female");
    expect(professor.professorID).toBe("989554");
    expect(professor.department).toBe("IT");
    global.score += 1;
  });

  it("Professor have method displayInfo ,teach and grade should display with correct message", () => {
    const professor = new Professor("riya", 35, "female", "989554", "IT");

    const expectedMessage =
      "Name: riya, Age: 35, Gender: female, Professor ID: 989554, Department: IT";
    expect(professor.displayInfo()).toBe(expectedMessage);

    const expectedMessage2 = "riya is teaching History";
    expect(professor.teach("History")).toBe(expectedMessage2);

    const expectedMessage3 =
      "riya is grading sonu's performance in Hindi with the grade C";
    expect(professor.grade("sonu", "Hindi", "C")).toBe(expectedMessage3);

    global.score += 3;
  });
});

//Testcase for Access and modify properties

describe("Testcase for Access and modify properties", () => {
  it("Access and modify properties of Student", () => {
    const student = new Student("shree", 20, "male", "972166", "ETC");
    student.name = "monu";
    expect(student.name).toBe("monu");
    const expectedMessage =
      "Name: monu, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: ";
    expect(student.displayInfo()).toBe(expectedMessage);
    global.score += 1;
  });

  it("Access and modify properties of Professor", () => {
    const professor = new Professor("riya", 35, "female", "989554", "IT");
    professor.department = "Science";
    expect(professor.department).toBe("Science");
    const expectedMessage =
      "Name: riya, Age: 35, Gender: female, Professor ID: 989554, Department: Science";
    expect(professor.displayInfo()).toBe(expectedMessage);
    global.score += 1;
  });
});

//Test cases for problem no.4

//Test cases for Media
describe("Media", () => {
  test("mediaType getter and setter", () => {
    const media = new Media("Generic");
    expect(media.mediaType).toBe("Generic");

    media.mediaType = "NewType";
    expect(media.mediaType).toBe("NewType");

    expect(() => {
      media.mediaType = "";
    }).toThrow("Media type must be a non-empty string.");
    global.score += 2;
  });
});

//Test cases for Book
describe("Book", () => {
  // ... Add tests for Book getters and setters (title, author, publicationYear, availableCopies)
  test("Book getter and setter", () => {
    const book = new Book("spiderman","batman",2023,7) 
    expect(book.title).toBe("spiderman");
    expect(book.author).toBe("batman");
    expect(book.publicationYear).toBe(2023);
    expect(book.availableCopies).toBe(7);

    expect(() => {
      book.title = "";
    }).toThrow("title must be a non-empty string.");
    expect(() => {
      book.author = "";
    }).toThrow("author must be a non-empty string.");
    expect(() => {
      book.publicationYear = 0;
    }).toThrow("publicationYear must be a positive integer.");
    expect(() => {
      book.availableCopies = -523;
    }).toThrow("availableCopies must be a non-negative integer.");
    global.score += 1;
  });

  test("comparePublicationYears static method", () => {
    const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
    const book2 = new Book("1984", "George Orwell", 1949, 10);

    expect(Book.comparePublicationYears(book1, book2)).toBe(1);
    expect(Book.comparePublicationYears(book1, book1)).toBe(0);
    expect(Book.comparePublicationYears(book2, book1)).toBe(-1);

    global.score += 2;
  });
});

//Test cases for User
describe("User", () => {
  // ... Add tests for User getters and setters (firstName, lastName)

  test("User getter and setter", () => {
    const user = new User("rohit", "sharma");
    expect(user.firstName).toBe("rohit");
    expect(user.lastName).toBe("sharma");

    expect(() => {
      user.firstName = "";
    }).toThrow("firstName must be a non-empty string.");
    expect(() => {
      user.lastName = "";
    }).toThrow("lastName must be a non-empty string.");
    global.score += 2;
  });


  test("borrowBook and returnBook methods", () => {
    const book = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
    const user = new User("Alice", "Smith");

    user.borrowBook(book);
    expect(book.availableCopies).toBe(4);

    user.returnBook(book);
    expect(book.availableCopies).toBe(5);
    global.score += 1;
  });

  test("fullName static method", () => {
    const user = new User("Alice", "Smith");
    expect(User.fullName(user)).toBe("Alice Smith");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
