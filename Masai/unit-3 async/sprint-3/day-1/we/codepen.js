const grand_father = {
    height: "tall",
    skin_tone: "fair",
    hair_color: "black",
    hair_type: "curly",
    greet: function() {
      console.log("Hello, I am the grand-father!");
    }
  };
  
  const father = Object.create(grand_father);
  father.skin_tone = "brown";
  father.hair_type = "straight";
  father.skill = "business";
  father.dimple = true;
  father.greet = function() {
    console.log("Hello, I am the father!");
  };
  
  const son = Object.create(father);
  son.height = "short";
  son.hair_type = "straight";
  son.hair_color = "blond";
  son.skill = "coding";
  son.greet = function() {
    console.log("Hello, I am the son!");
  };
  

//   =============================================================

function Mammal(has_skeleton, has_fur, blood_type) {
    const mammal = Object.create(Mammal.prototype);
    mammal.has_skeleton = has_skeleton;
    mammal.has_fur = has_fur;
    mammal.blood_type = blood_type;
    return mammal;
  }
  
  Mammal.prototype.makeSound = function() {
    console.log("Mammal is making sound.");
  };
  
  Mammal.prototype.canEat = function() {
    console.log("Mammal can eat.");
  };
  
  const dog = Mammal(true, true, "warm");
  dog.makeSound(); 
  dog.canEat(); 

//   ==============================================================

function Mammal(has_skeleton, has_fur, blood_type) {
  this.has_skeleton = has_skeleton;
  this.has_fur = has_fur;
  this.blood_type = blood_type;
}

Mammal.prototype.makeSound = function() {
  console.log("Mammal is making sound.");
};

Mammal.prototype.canEat = function(name) {
  console.log(`${name} can eat.`);
};

function createHuman(
  has_skeleton,
  has_fur,
  blood_type,
  name,
  height,
  skintone,
  gender,
  hair_type
) {
  const human = Object.create(createHuman.prototype);
  Mammal.call(human, has_skeleton, has_fur, blood_type);
  human.name = name;
  human.height = height;
  human.skintone = skintone;
  human.gender = gender;
  human.hair_type = hair_type;
  return human;
}

Object.setPrototypeOf(createHuman.prototype, Mammal.prototype);

createHuman.prototype.canSpeak = function() {
  console.log(`${this.name} can speak.`);
};

createHuman.prototype.canDream = function() {
  console.log(`${this.name} can dream.`);
};

function createEmployee(
  has_skeleton,
  has_fur,
  blood_type,
  name,
  height,
  skintone,
  gender,
  hair_type,
  salary,
  position,
  experience
) {
  const employee = Object.create(createEmployee.prototype);
  createHuman.call(
    employee,
    has_skeleton,
    has_fur,
    blood_type,
    name,
    height,
    skintone,
    gender,
    hair_type
  );
  employee.salary = salary;
  employee.position = position;
  employee.experience = experience;
  return employee;
}

Object.setPrototypeOf(createEmployee.prototype, createHuman.prototype);

createEmployee.prototype.handleTeam = function() {
  console.log(`${this.name} can handle a team.`);
};

createEmployee.prototype.doMarketing = function() {
  console.log(`${this.name} is good at marketing.`);
};
