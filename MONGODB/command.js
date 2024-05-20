db.products.aggregate([
  {
    $group: {
      _id: "$brand",
      totalProducts: { $sum: 1 },
    },
  },
]);

db.products.insertOne({
  id: 31,
  title: "Key Holder",
  description:
    "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
  price: 30,
  discountPercentage: 2.92,
  rating: 4.92,
  stock: 54,
  brand: "Golden",
  category: "home-decoration",
  thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/30/1.jpg",
    "https://cdn.dummyjson.com/product-images/30/2.jpg",
    "https://cdn.dummyjson.com/product-images/30/3.jpg",
    "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
  ],
});



3:31:33