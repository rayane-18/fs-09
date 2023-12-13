const mongoose = require("mongoose");

const users = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    address: {
      street: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", users);
