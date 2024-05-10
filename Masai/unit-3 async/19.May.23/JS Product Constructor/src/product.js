// 1. Product constructor
function Product(name, brand, price, description) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false; // sold status is false by default
}

// 2. changePrice method
Product.prototype.changePrice = function(newPrice) {
  this.price = newPrice;
};

// 3. toggleStatus method
Product.prototype.toggleStatus = function() {
  this.sold = !this.sold;
};

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
