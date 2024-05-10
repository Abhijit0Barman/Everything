function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}

function getFormData() {
  const nameInput = document.getElementById("name");
  const categoryInput = document.getElementById("category");
  const imageInput = document.getElementById("image");
  const priceInput = document.getElementById("price");

  const name = nameInput.value;
  const category = categoryInput.value;
  const imageUrl = imageInput.value;
  const price = parseFloat(priceInput.value);

  return { name, category, imageUrl, price };
}

function addListing(input, category, image, price) {
  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const listing = new Listing(input, category, image, price);
  products.push(listing);
  localStorage.setItem("Products", JSON.stringify(products));
}

window.onload = function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const { name, category, imageUrl, price } = getFormData();
    addListing(name, category, imageUrl, price);

    form.reset();
  });
};

// don't change the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
