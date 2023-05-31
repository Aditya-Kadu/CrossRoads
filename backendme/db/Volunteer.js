const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    userName:String,
    emailId:String,
    age:String,
    city:String,
    contactNo:String,
    userPassword:String,
})

module.exports = mongoose.model("Volunteer", userSchema)

