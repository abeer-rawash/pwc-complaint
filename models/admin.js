const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required"],
  },
  username: {
    type: String,
    required: [true, "Username Is Required"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
  },
});

module.exports = mongoose.model("Admin", Admin);
