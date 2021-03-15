const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  emailAddress: String,
  phoneNumber: String,
  dob: String,
});
const customerModel = mongoose.model("Customers", customerSchema);
module.exports = customerModel;
