const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  eventName: String,
  eventBy: String,
  startDate: String,
  endDate: String,
  cityName: String,
  stateName: String,
  countryName: String,
  pinCode: String,
  eventDescription: String,
  contactNo: String, // Same
  emailId: String, // Same
  supportiveCourses: String,
  valunteersNeed: String,
  userId: String,
  userName: String,
  emailIdvol: String, // Same
  userPassword: String,
  age: String,
  city: String,
  contactvol: String, //Same
  will: String,
  regId: String,
});

module.exports = mongoose.model("registrations", userSchema);
