const mongooes = require("mongoose");

const userSchema = mongooes.Schema(
  {
    username: String,
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongooes.model("user", userSchema);
//  collectionName is "user"

module.exports = {
  UserModel,
};
