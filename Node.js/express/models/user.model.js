const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v); // Validate email format
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    jobTitle: {
      type: String,
      minlength: 3,
      maxlength: 50,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
    },
  },
  { timestamps: true, versionKey: false }
);

//Model
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
