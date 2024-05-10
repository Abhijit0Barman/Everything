function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}

function getFormData(e) {
  e.preventDefault();
  let name = form.name.value;
  let category = form.category.value;
  let image = document.querySelector("#image").value;
  let price = document.getElementById("price").value;

  addListing(name, category, image, price);
}

function addListing(input, category, image, price) {
  let data = JSON.parse(localStorage.getItem("Products")) || [];
  let obj = new Listing(input, category, image, price);
  data.push(obj);
  localStorage.setItem("Products", JSON.stringify(data));
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  let form = document.querySelector("form");
  form.addEventListener("submit", getFormData);


};

// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}