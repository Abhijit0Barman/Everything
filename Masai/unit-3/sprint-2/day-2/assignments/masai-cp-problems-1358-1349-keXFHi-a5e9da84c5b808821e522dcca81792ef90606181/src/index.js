/*
## Problem 1.
*/



function productFactory(name, price) {
    let obj = {}
    obj.name = name
    obj.price = price
    obj.increasePrice = function (amt) {
        this.price += amt
        return this.price
    }
    obj.decreasePrice = function (amt) {
        this.price -= amt
    }
    obj.displayInfo = function () {
        console.log(`${this.name} costs Rs.${this.price}`);
        return `${this.name} costs Rs.${this.price}`;
    }
    return obj;
}
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
// productFactory.prototype.increasePrice = function (amount) {
//     this.price += amount;
//     return this.price;
// }
// productFactory.prototype.decreasePrice = function (amount) {
//     return amount--;
// }
// productFactory.prototype.displayInfo = () => {
//     console.log(`${this.name} costs Rs. ${this.price}`);
// }

function ProductConstructor(name, price) {
    this.name = name
    this.price = price
    this.increasePrice = function (amt) {
        this.price += amt
        return this.price
    }
    this.decreasePrice = function (amt) {
        this.price -= amt
    }
    this.displayInfo = function () {
        console.log(`${this.name} costs Rs.${this.price}`);
        return `${this.name} costs Rs.${this.price}`;
    }
}

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
        this.name = name
        this.price = price
        this.increasePrice = function (amt) {
            this.price += amt
            return this.price
        }
        this.decreasePrice = function (amt) {
            this.price -= amt
        }
        this.displayInfo = function () {
            console.log(`${this.name} costs Rs.${this.price}`);
            return `${this.name} costs Rs.${this.price}`;
        }
    }
}

// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export { productFactory, ProductConstructor, ProductClass }