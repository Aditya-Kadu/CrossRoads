const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    ngoName:String,
    city:String,
    contactNo:String,
    ngoEmailId:String,
    ngoPassword:String,
    ngoType:String,
})

module.exports = mongoose.model("ngo", userSchema)

