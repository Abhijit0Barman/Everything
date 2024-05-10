// class Product{
//   constructor(name, brand, price, description) {
//     this.name = name;
//     this.brand = brand;
//     this.price = price;
//     this.description = description;
//     this.sold = false;
//   }
  
//   changePrice(x) {
//     this.price = x;
//     return this.price;
//   }
//   toggleStatus(x) {
//     this.sold = !this.sold;
//   }
// }

function Product(name, brand, price, description) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false;
}

Product.prototype.changePrice = function(newPrice) {
  this.price = newPrice;
};

Product.prototype.toggleStatus = function() {
  this.sold = !this.sold;
};

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
