// calculating count of products by brand wise
db.products.aggregate([
  {
    $group: {
      _id: "$brand",
      totalProducts: { $sum: 1 },
    },
  },
]);

// getting data by matching key & value
db.products.aggregate([
  {
    $match: { brand: "Golden" },
  },
]);

// inserting single object inside collection
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

// Calculating Total Price by brand wise only Single brand
db.products.aggregate([
  { $match: { brand: "Golden" } },
  {
    $group: {
      _id: null,
      totalPrice: { $sum: "$price" },
      company: "brand",
    },
  },
]);

// Calculating Total Price by brand wise of All brands
db.products.aggregate([
  {
    $group: {
      _id: "$brand",
      totalPrice: { $sum: "$price" },
    },
  },
]);

// Adding unique new key in everysingle docs
db.products.aggregate([
  {
    $addFields: {
      uniqueKey: {
        $concat: ["$brand", "_", { $toString: "$id" }],
      },
    },
  },
]);

// after calculating totalPrice by brand wise, getting data only above price-1300
db.products.aggregate([
  {
    $group: {
      _id: "$brand",
      totalPrice: { $sum: "$price" },
    },
  },
  { $match: { totalPrice: { $gt: 1300 } } },
]);

// before calculating totalPrice by brand wise, getting data only above price-1300
db.products.aggregate([
  { $match: { price: { $gt: 1300 } } },
  {
    $group: {
      _id: "$brand",
      totalPrice: { $sum: "$price" },
    },
  },
]);

//
db.numbers.aggregate([
  {
    $match: { quantity: { $lte: 5 } },
  },
  {
    $group: {
      _id: "$targetPrice",
      totalPrice: { $sum: "$price" },
      totalAvg: { $avg: "$price" },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

//
db.products.aggregate([
  { $match: { brand: { $eq: "Apple" } } },
  {
    $unwind: "$images",
  },
  {
    $group: {
      _id: null,
      allImages: { $push: "$images" },
    },
  },
]);
