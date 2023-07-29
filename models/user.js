const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  roll: {
    type: Number,
    require: true,
    unique: true,
  },
  domain: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  batch: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
