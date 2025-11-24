const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    fullname:String,
    password:String,
    confirmpassword:String,
    email:String

}) // Replace with real DB in production

module.exports = mongoose.model("User",userSchema);