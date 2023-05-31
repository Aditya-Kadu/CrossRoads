const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    eventName:String,
    eventBy:String,
    startDate:String,
    endDate:String,
    cityName:String,
    stateName:String,
    countryName:String,
    pinCode:String,
    eventDescription:String,
    contactNo:String,
    emailId:String,
    supportiveCourses:String,
    valunteersNeed:String,
    userId:String,
})

module.exports = mongoose.model("events", userSchema)

