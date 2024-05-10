/*
## Problem 1.
*/
function productFactory(name, price) {
    const product = new Object();
    product.name = name;
    product.price = price;
    product.increasePrice = function (amount) {
        this.price += amount;
    };
    product.decreasePrice = function (amount) {
        this.price -= amount;
    };
    product.displayInfo = function () {
        console.log(`${this.name} costs Rs.${this.price}`);
        return `${this.name} costs Rs.${this.price}`;
    };
    return product;
}

// Example Usage:
const product1 = new productFactory('Product 1', 100);
product1.displayInfo(); // Output: Product 1 costs Rs.100
product1.increasePrice(50);
product1.displayInfo(); // Output: Product 1 costs Rs.150
product1.decreasePrice(25);
product1.displayInfo(); // Output: Product 1 costs Rs.125




// example invocation
// let p1 = new productFactory("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 2.
*/

function ProductConstructor(name, price) {
    this.name = name;
    this.price = price;
    this.increasePrice = function (amount) {
        this.price += amount;
    };
    this.decreasePrice = function (amount) {
        this.price -= amount;
    };
    this.displayInfo = function () {
        console.log(`${this.name} costs Rs.${this.price}`);
        return `${this.name} costs Rs.${this.price}`;
    };
}

// Example Usage:
const product2 = new ProductConstructor('Product 2', 200);
product2.displayInfo(); // Output: Product 2 costs Rs.200
product2.increasePrice(75);
product2.displayInfo(); // Output: Product 2 costs Rs.275
product2.decreasePrice(50);
product2.displayInfo(); // Output: Product 2 costs Rs.225


// example invocation
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 3.
*/

class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    increasePrice(amount) {
        this.price += amount;
    }

    decreasePrice(amount) {
        this.price -= amount;
    }

    displayInfo() {
        console.log(`${this.name} costs Rs.${this.price}`);
        return `${this.name} costs Rs.${this.price}`;
    }
}

// Example Usage:
const product3 = new ProductClass('Product 3', 300);
product3.displayInfo(); // Output: Product 3 costs Rs.300
product3.increasePrice(100);
product3.displayInfo(); // Output: Product 3 costs Rs.400
product3.decreasePrice(50);
product3.displayInfo(); // Output: Product 3 costs Rs.350


// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export { productFactory, ProductConstructor, ProductClass }