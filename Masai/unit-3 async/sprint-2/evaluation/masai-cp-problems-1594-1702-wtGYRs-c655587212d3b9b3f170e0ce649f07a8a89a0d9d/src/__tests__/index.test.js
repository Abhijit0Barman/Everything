const {
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
} = require("../index");

global.score = 1;

//test cases for person
describe("Person object", () => {
  test("should create a new Person class with the correct name, age, and salary", () => {
    const person = new Person("john", 23, 365632);
    expect(person.name).toBe("john");
    expect(person.age).toBe(23);
    expect(person.salary).toBe(365632);

    const person1 = new Person("sham", 3, 36563);
    expect(person1.name).toBe("sham");
    expect(person1.age).toBe(3);
    expect(person1.salary).toBe(36563);
    global.score += 1;
  });

  test("should getDetails of Person class with the correct message", () => {
    const person = new Person("john", 23, 365632);
    const expectedMessage =
      "john, 23 years old, with a salary of ₹365632 per year";
    //expect(person.getDetails()).toBe(expectedMessage);
    expect(person.getDetails()).toContain("john");
    expect(person.getDetails()).toContain("23");
    expect(person.getDetails()).toContain("365632");
    global.score += 1;
  });
});

// Test cases for the Doctor object
describe("Doctor object", () => {
  test("should create a new Doctor class with the correct name, age, salary, and specialization properties", () => {
    const doctor = new Doctor("srk", 54, 54878231, "Dermatology");
    expect(doctor.name).toBe("srk");
    expect(doctor.age).toBe(54);
    expect(doctor.salary).toBe(54878231);
    expect(doctor.specialization).toBe("Dermatology");

    const doctor1 = new Doctor("rahul", 4, 548231, "skin specialist");
    expect(doctor1.name).toBe("rahul");
    expect(doctor1.age).toBe(4);
    expect(doctor1.salary).toBe(548231);
    expect(doctor1.specialization).toBe("skin specialist");
    global.score += 1;
  });

  test("should getDetails of Doctor class with the correct message", () => {
    const doctor = new Doctor("srk", 54, 54878231, "Dermatology");
    const expectedMessage =
      "Dr. srk, 54 years old, with a salary of ₹54878231 per year, specializing in Dermatology";
    // expect(doctor.getDetails()).toBe(expectedMessage);
    expect(doctor.getDetails()).toContain("srk");
    expect(doctor.getDetails()).toContain("54");
    expect(doctor.getDetails()).toContain("54878231");
    expect(doctor.getDetails()).toContain("Dermatology");
    global.score += 1;
  });
});

// Test cases for the Nurse object
describe("Nurse object", () => {
  test("should create a new Nurse class with the correct name, age, salary, and shift properties", () => {
    const nurse = new Nurse("swati", 41, 7876, "evening");
    expect(nurse.name).toBe("swati");
    expect(nurse.age).toBe(41);
    expect(nurse.salary).toBe(7876);
    expect(nurse.shift).toBe("evening");

    const nurse1 = new Nurse("ravi", 23, 2000, "night");
    expect(nurse1.name).toBe("ravi");
    expect(nurse1.age).toBe(23);
    expect(nurse1.salary).toBe(2000);
    expect(nurse1.shift).toBe("night");
    global.score += 1;
  });

  test("should getDetails of Nurse class with the correct message", () => {
    const nurse = new Nurse("swati", 41, 7876, "evening");
    const expectedMessage =
      "swati, 41 years old, with a salary of ₹7876 per year, working the evening shift";
    //expect(nurse.getDetails()).toBe(expectedMessage);
    expect(nurse.getDetails()).toContain("swati");
    expect(nurse.getDetails()).toContain("41");
    expect(nurse.getDetails()).toContain("7876");
    expect(nurse.getDetails()).toContain("evening");
    global.score += 1;
  });
});

// Test cases for the Receptionist object
describe("Receptionist object", () => {
  test("should create a new Receptionist class with the correct name, age, salary, and phone properties", () => {
    const receptionist = new Receptionist("john", 32, 4212, 123456789);
    expect(receptionist.name).toBe("john");
    expect(receptionist.age).toBe(32);
    expect(receptionist.salary).toBe(4212);
    expect(receptionist.phone).toBe(123456789);

    const receptionist1 = new Receptionist("mark", 14, 5000, 412574521);
    expect(receptionist1.name).toBe("mark");
    expect(receptionist1.age).toBe(14);
    expect(receptionist1.salary).toBe(5000);
    expect(receptionist1.phone).toBe(412574521);
    global.score += 1;
  });

  test("should getDetails of Receptionist class with the correct message", () => {
    const receptionist = new Receptionist("john", 32, 4212, 123456789);
    const expectedMessage =
      "john, 32 years old, with a salary of ₹4212 per year, with phone number 123456789";
    expect(receptionist.getDetails()).toBe(expectedMessage);
    expect(receptionist.getDetails()).toContain("john");
    expect(receptionist.getDetails()).toContain("32");
    expect(receptionist.getDetails()).toContain("4212");
    expect(receptionist.getDetails()).toContain("123456789");
    global.score += 1;
  });
});

// Test cases for the Patient object
describe("Patient object", () => {
  test("should create a new Patient class with the correct name, age, and conditions properties", () => {
    const patient = new Patient("kriti", 12, "headach");
    expect(patient.name).toBe("kriti");
    expect(patient.age).toBe(12);
    expect(patient.conditions).toBe("headach");

    const patient1 = new Patient("sonu", 42, "fever and cold");
    expect(patient1.name).toBe("sonu");
    expect(patient1.age).toBe(42);
    expect(patient1.conditions).toBe("fever and cold");
    global.score += 1;
  });

  test("should getDetails of Patient class with the correct message", () => {
    const patient = new Patient("kriti", 12, "headach");
    const expectedMessage = "kriti, 12 years old, with conditions: headach";
    //expect(patient.getDetails()).toBe(expectedMessage);
    expect(patient.getDetails()).toContain("kriti");
    expect(patient.getDetails()).toContain("12");
    expect(patient.getDetails()).toContain("headach");
    global.score += 1;
  });
});

// Test cases for the Inpatient object
describe("Inpatient object", () => {
  test("should create a new Inpatient class with the correct name, age, conditions, and bedNumber properties", () => {
    const inpatient = new Inpatient("mike", 62, ["headach", "vomiting"], 56);
    expect(inpatient.name).toBe("mike");
    expect(inpatient.age).toBe(62);
    expect(inpatient.conditions[0]).toBe("headach");
    expect(inpatient.conditions[1]).toBe("vomiting");
    expect(inpatient.bedNumber).toBe(56);
    const inpatient1 = new Inpatient("Aakash", 30, ["stomachach", "skin infection"], 13);
    expect(inpatient1.name).toBe("Aakash");
    expect(inpatient1.age).toBe(30);
    expect(inpatient1.conditions[0]).toBe("stomachach");
    expect(inpatient1.conditions[1]).toBe("skin infection");
    expect(inpatient1.bedNumber).toBe(13);
    global.score += 1;
  });

  test("should getDetails of Inpatient class with the correct message", () => {
    const inpatient = new Inpatient("mike", 62, ["headach", "vomiting"], 56);
    const expectedMessage =
      "mike, 62 years old, with conditions: headach,vomiting, admitted and occupying bed number 56";
    expect(inpatient.getDetails()).toBe(expectedMessage);
    expect(inpatient.getDetails()).toContain("mike");
    expect(inpatient.getDetails()).toContain("62");
    expect(inpatient.getDetails()).toContain("headach");
    expect(inpatient.getDetails()).toContain("vomiting");
    expect(inpatient.getDetails()).toContain("56");
    global.score += 1;
  });
});

// Test cases for the Outpatient object
describe("Outpatient object", () => {
  test("should create a new Outpatient class with the correct name, age, conditions, and nextAppointment properties", () => {
    const outpatient = new Outpatient(
      "siya",
      32,
      ["fever", "cold"],
      "May 16th, 2023 at 8:00 PM"
    );
    expect(outpatient.name).toBe("siya");
    expect(outpatient.age).toBe(32);
    expect(outpatient.conditions[0]).toBe("fever");
    expect(outpatient.conditions[1]).toBe("cold");
    expect(outpatient.nextAppointment).toBe("May 16th, 2023 at 8:00 PM");

    const outpatient1 = new Outpatient(
      "kiran",
      51,
      ["eye infection", "cold"],
      "May 15th, 2021 at 4:10 AM"
    );
    expect(outpatient1.name).toBe("kiran");
    expect(outpatient1.age).toBe(51);
    expect(outpatient1.conditions[0]).toBe("eye infection");
    expect(outpatient1.conditions[1]).toBe("cold");
    expect(outpatient1.nextAppointment).toBe("May 15th, 2021 at 4:10 AM");
    global.score += 1;
  });

  test("should getDetails of Outpatient class with the correct message", () => {
    const outpatient = new Outpatient(
      "siya",
      32,
      ["fever", "cold"],
      "May 16th, 2023 at 8:00 PM"
    );
    const expectedMessage =
      "siya, 32 years old, with conditions: fever,cold, with a scheduled appointment on May 16th, 2023 at 8:00 PM for a routine checkup";
    // expect(outpatient.getDetails()).toBe(expectedMessage);
    expect(outpatient.getDetails()).toContain("siya");
    expect(outpatient.getDetails()).toContain("32");
    expect(outpatient.getDetails()).toContain("fever");
    expect(outpatient.getDetails()).toContain("cold");
    expect(outpatient.getDetails()).toContain("May 16th, 2023 at 8:00 PM");
    global.score += 1;
  });
});

// Test cases for the MenuItem object
describe("MenuItem object", () => {
  test("should create a new MenuItem class with the correct name, price, and ingredients properties", () => {
    const menuitem = new MenuItem("Biryani", 452, [
      "rice",
      "chicken",
      "yoghurt",
      "onion",
    ]);
    expect(menuitem.name).toBe("Biryani");
    expect(menuitem.price).toBe(452);
    expect(menuitem.ingredients[0]).toBe("rice");
    expect(menuitem.ingredients[1]).toBe("chicken");
    expect(menuitem.ingredients[2]).toBe("yoghurt");
    expect(menuitem.ingredients[3]).toBe("onion");

    const menuitem1 = new MenuItem("poli bhaji", 100, [
      "wheat",
      "potato",
      "merchi",
      "onion",
    ]);
    expect(menuitem1.name).toBe("poli bhaji");
    expect(menuitem1.price).toBe(100);
    expect(menuitem1.ingredients[0]).toBe("wheat");
    expect(menuitem1.ingredients[1]).toBe("potato");
    expect(menuitem1.ingredients[2]).toBe("merchi");
    expect(menuitem1.ingredients[3]).toBe("onion");
    global.score += 1;
  });

  test("should getDetails of MenuItem class with the correct message", () => {
    const menuitem = new MenuItem("Biryani", 452, [
      "rice",
      "chicken",
      "yoghurt",
      "onion",
    ]);
    const expectedMessage = "Biryani (₹452)";
    //expect(menuitem.getDetails()).toBe(expectedMessage);
    expect(menuitem.getDetails()).toContain("Biryani");
    expect(menuitem.getDetails()).toContain("452");
    global.score += 1;
  });
});

// Test cases for the FoodItem object
describe("FoodItem object", () => {
  test("should create a new FoodItem class with the correct name, price, and ingredients properties", () => {
    const fooditem = new FoodItem(
      "Biryani",
      452,
      [
        { name: "rice", isVegetarian: false, isGlutenFree: false },
        { name: "chicken", isVegetarian: false, isGlutenFree: false },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "onion", isVegetarian: true, isGlutenFree: true },
      ],
      "Main Course"
    );

    expect(fooditem.name).toBe("Biryani");
    expect(fooditem.price).toBe(452);
    expect(fooditem.ingredients[0].name).toBe("rice");
    expect(fooditem.ingredients[1].name).toBe("chicken");
    expect(fooditem.ingredients[2].name).toBe("yoghurt");
    expect(fooditem.ingredients[3].name).toBe("onion");

    const fooditem1 = new FoodItem(
      "Cake",
      1000,
      [
        { name: "batter", isVegetarian: false, isGlutenFree: false },
        { name: "suger", isVegetarian: false, isGlutenFree: false },
        { name: "egg", isVegetarian: false, isGlutenFree: true },
        { name: "cream", isVegetarian: true, isGlutenFree: true },
      ],
      "Main Course"
    );

    expect(fooditem1.name).toBe("Cake");
    expect(fooditem1.price).toBe(1000);
    expect(fooditem1.ingredients[0].name).toBe("batter");
    expect(fooditem1.ingredients[1].name).toBe("suger");
    expect(fooditem1.ingredients[2].name).toBe("egg");
    expect(fooditem1.ingredients[3].name).toBe("cream");
    global.score += 1;
  });

  test("should getDetails of fooditem class with the correct message", () => {
    const fooditem = new FoodItem(
      "Biryani",
      452,
      [
        { name: "Biryani", isVegetarian: false, isGlutenFree: false },
        { name: "chicken", isVegetarian: false, isGlutenFree: false },
        { name: "rice", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "onion", isVegetarian: true, isGlutenFree: true },
      ],
      "Main Course"
    );
    const expectedMessage = "Biryani (₹452) - Main Course";
    //expect(fooditem.getDetails()).toBe(expectedMessage);
    expect(fooditem.getDetails()).toContain("Biryani");
    expect(fooditem.getDetails()).toContain("452");
    expect(fooditem.getDetails()).toContain("Main");
    expect(fooditem.getDetails()).toContain("Course");
    global.score += 1;
  });
  test("should isVegetarian and isGlutenFree work as expected", () => {
    const fooditem = new FoodItem(
      "Biryani",
      452,
      [
        { name: "Biryani", isVegetarian: false, isGlutenFree: true },
        { name: "chicken", isVegetarian: false, isGlutenFree: true },
        { name: "rice", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "onion", isVegetarian: true, isGlutenFree: true },
      ],
      "Main Course"
    );
    expect(fooditem.isVegetarian()).toBe(false);
    expect(fooditem.isGlutenFree()).toBe(true);

    const fooditem1 = new FoodItem(
      "pani puri",
      15,
      [
        { name: "Biryani", isVegetarian: true, isGlutenFree: true },
        { name: "chicken", isVegetarian: true, isGlutenFree: true },
        { name: "rice", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "onion", isVegetarian: true, isGlutenFree: false },
      ],
      "Main Course"
    );
    expect(fooditem1.isVegetarian()).toBe(true);
    expect(fooditem1.isGlutenFree()).toBe(false);
    global.score += 1;
  });
});

// Test cases for the Drink object
describe("Drink object", () => {
  test("should create a new Drink class with the correct name, price, and ingredients properties", () => {
    const drink = new Drink(
      "Lassi-soft drink",
      50.579,
      [
        { name: "suger", isVegetarian: true, isGlutenFree: true },
        { name: "cardimon", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "milk", isVegetarian: true, isGlutenFree: true },
      ],
      false
    );

    expect(drink.name).toBe("Lassi-soft drink");
    expect(drink.price).toBe(50.579);
    expect(drink.ingredients[0].name).toBe("suger");
    expect(drink.ingredients[1].name).toBe("cardimon");
    expect(drink.ingredients[2].name).toBe("yoghurt");
    expect(drink.ingredients[3].name).toBe("milk");


    const drink1 = new Drink(
      "apple juice",
      40,
      [
        { name: "suger", isVegetarian: true, isGlutenFree: true },
        { name: "apple", isVegetarian: true, isGlutenFree: true },
      ],
      false
    );

    expect(drink1.name).toBe("apple juice");
    expect(drink1.price).toBe(40);
    expect(drink1.ingredients[0].name).toBe("suger");
    expect(drink1.ingredients[1].name).toBe("apple");

    global.score += 1;
  });

  test("should getDetails of Drink class with the correct message", () => {
    const drink = new Drink(
      "Lassi-soft Drink",
      50.579,
      [
        { name: "suger", isVegetarian: true, isGlutenFree: true },
        { name: "cardimon", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "milk", isVegetarian: true, isGlutenFree: true },
      ],
      false
    );
    const expectedMessage = "Lassi-soft Drink (₹50.579) (Non-alcoholic)";
    //expect(drink.getDetails()).toBe(expectedMessage);
    expect(drink.getDetails()).toContain("Lassi-soft Drink");
    expect(drink.getDetails()).toContain("50.579");
    expect(drink.getDetails()).toContain("Non-alcoholic");
   
    global.score += 1;
  });
  test("should isCold and isCarbonated work as expected", () => {
    const drink = new Drink(
      "Lassi-Soft drink",
      50.579,
      [
        { name: "suger", isVegetarian: true, isGlutenFree: true },
        { name: "cardimon", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: true },
        { name: "milk", isVegetarian: true, isGlutenFree: true },
      ],
      false
    );
    expect(drink.isCold()).toBe(true);
    expect(drink.isCarbonated()).toBe(true);


    const drink1 = new Drink(
      "watermelon beer",
      68,
      [
        { name: "watermelon", isVegetarian: true, isGlutenFree: true },
        { name: "suger", isVegetarian: true, isGlutenFree: true },
        { name: "yoghurt", isVegetarian: true, isGlutenFree: false },
        { name: "milk", isVegetarian: true, isGlutenFree: true },
      ],
      false
    );
    expect(drink1.isCold()).toBe(false);
    expect(drink1.isCarbonated()).toBe(true);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
