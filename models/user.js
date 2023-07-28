const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    roll: String,
    branch: String,
    batch: String,
    age: Number,
    contactNumber: String,
    dob: Date,
    domain: String
})

const User = mongoose.model('User', userSchema)

module.exports = User;