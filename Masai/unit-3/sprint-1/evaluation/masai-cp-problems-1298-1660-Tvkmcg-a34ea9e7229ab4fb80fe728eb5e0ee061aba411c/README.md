# Array and Objects

## Submission Instructions [Please note]

## Maximum marks - 12

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
```
✅ submit the problem [1 mark]
✅ objects created by createProduct have correct properties [1 mark]
✅ objects created by createProduct have correct methods [2 marks]
✅ objects created using CreateProduct are working as expected [1 mark]
✅ objects created using Product are working as expected [1 mark]
✅ checking total amount in array [2 marks]
✅ array returned by massageArray to have property-value as expected [2 mark]
✅ array returned by massageArray to be as expected [2 mark]
```
## Problem statement. 1

Define a **factory function** called `createProduct` which takes in the following parameters:

1. `product_name` (string): the name of the product.
2. `brand` (string): the brand of the product.
3. `reviews` (number): the review for the product.
4. `price` (number): the price of the product.
5. `rating` (string): rating for a product.

The function returns an object containing the product's details as properties, along with four methods `getPrice`, `increasePrice`, `decreasePrice`, and `isExpensive`.

The `getPrice` method returns the current `price` of the product, `increasePrice` method increases the product's `price` by a given amount (number), `decreasePrice` method decreases the product's `price` by a given amount (number), and `isExpensive` method returns a Boolean value based on whether the product's `price` is `greater than or equal to` 1000 or not.

The purpose of this code is to provide a reusable function that creates product objects with specific properties and methods that can be used to manipulate and get information about the product. This function can be used to create multiple product objects with different details based on the given parameters.

Example invocation with expected outputs:
```
// Example invocation
let product1 = createProduct("Black Pure Cotton Formal Shirt"," Peter England Elite", 224, 1799, "4.3")
console.log(product1)
console.log(product1.getPrice()) // 1799
console.log(product1.increasePrice(301)) //2100
console.log(product1.isExpensive()) // true
console.log(product1.decreasePrice(1200)) // 900
console.log(product1.isExpensive()) // false
```

## Problem statement. 2
Implement the functionality same as Problem 1. using `CreateProduct` ***constructor functions***.

Example invocation with expected outputs:
```
// Example invocation
let product1 = createProduct("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
console.log(product1)
console.log(product1.getPrice()) // 1799
console.log(product1.increasePrice(301)) //2100
console.log(product1.isExpensive()) // true
console.log(product1.decreasePrice(1200)) // 900
console.log(product1.isExpensive()) // false
```
## Problem statement. 3
Implement the functionality same as Problem 1. using `Product` ***ES6 Classes***.

Example invocation with expected outputs:
```
let product1 = createProduct("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
console.log(product1)
console.log(product1.getPrice()) // 1799
console.log(product1.increasePrice(301)) //2100
console.log(product1.isExpensive()) // true
console.log(product1.decreasePrice(1200)) // 900
console.log(product1.isExpensive()) // false
```
## Problem statement. 4
An array with object of students mark you have to modified that array and change total with all subject aggregate . pass array as argument in function `findTotal` and return modified array with total amount, from function. You can refer below as an example.
- **input**
```
let arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:""
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:""
    }
    ]
```
- **Output**
```
arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:180
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:151
    }
    ]
```
## Problem statement. 5
The function `massageArray()` is expected to return an array of objects.

Parameter of `massageArray()`: `inputArray` of type array

### Provided `MadeInArea`:
```
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];
```
### Provided `categories`
```
let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
```
### Example Input Array:
```
let exampleInputArray = [
  {
    idProduct: "8TH GEN CORE I7",
    strProduct: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
    Category: 1,
    Area: 2,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "8 MB",
    strDetail4: "Quad Core",
    strDetail5: "8565U",
    strDetail6: "Intel",
    strDetail7: "Core i7",
    strDetail8: "1.8 GHz",
    strDetail9: "4.6 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },

  {
    idProduct: "8TH GEN CORE I5",
    strProduct: "HP ELITEBook X360 (4SU65UT) LAPTOP",
    Category: 2,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "6 MB",
    strDetail4: "Quad Core",
    strDetail5: "8250U",
    strDetail6: "Intel",
    strDetail7: "Core i5",
    strDetail8: "1.6 GHz",
    strDetail9: "3.4 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "7TH GEN PENTIUM GOLD",
    strProduct: "DELL INSPIRON 15 3583 LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "7th Gen",
    strDetail3: "2 MB",
    strDetail4: "Dual Core",
    strDetail5: "5405U",
    strDetail6: "Intel",
    strDetail7: "Pentium Gold",
    strDetail8: "1.6 GHz",
    strDetail9: "2.3 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];
```
- If `strSpecification` and `strDetail` is null or "" avoid them in output array.
### Expected output with the above input:
```
    let eo1 = [
    {
      productId: "8TH GEN CORE I7",
      productTitle: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
      Category: "ASUS",
      MadeInArea: "USA",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "8 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8565U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i7" },
        { Specification: "Speed", detail: "1.8 GHz" },
        { Specification: "Boost upto", detail: "4.6 GHz" },
      ],
    },
    {
      productId: "8TH GEN CORE I5",
      productTitle: "HP ELITEBook X360 (4SU65UT) LAPTOP",
      Category: "HP",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "6 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8250U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i5" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "3.4 GHz" },
      ],
    },
    {
      productId: "7TH GEN PENTIUM GOLD",
      productTitle: "DELL INSPIRON 15 3583 LAPTOP",
      Category: "Dell",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "7th Gen" },
        { Specification: "Cache", detail: "2 MB" },
        { Specification: "Core", detail: "Dual Core" },
        { Specification: "Model", detail: "5405U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Pentium Gold" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "2.3 GHz" },
      ],
    },
  ];
```
### Mapping of properties from input to expected output
- idProduct maps to productId
- strProduct maps to productTitle
- Category maps to Category, but the id turns into the name
- MadeInArea maps to MadeInArea, but the id turns into the name
- finally, 20 strSpecification & 20 strDetail turns into a single entry of Specification which is an array of object. Each object of Specification contains a key called Specification and another key called detail.

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time