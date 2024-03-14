const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return mongoose.connect(url);
}

/*
mongoose
  .connect("mongodb://127.0.0.1:27017/piyushChannel")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));
 */

module.exports = {
  connectMongoDb,
};
