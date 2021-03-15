const mongoose = require("mongoose");
const loanSchema = mongoose.Schema({
  loanName: String,
  loanType: String,
  loanAmount: Number,
  loanIssueDate: date,
  loanStatus: String,
});
const loanModel = mongoose.model("loans", loanSchema);
module.exports = loanModel;
