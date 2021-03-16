var express = require("express");
var router = express.Router();

// import customer model from Mongodb

const customerModel = require("../models/customers.model");

//then
var mongoose = require("mongoose");

/*  Find all */
router.get("/list", function (req, res, next) {
  customerModel.find(function (err, customerListResopnse) {
    if (err) {
      res.send({ status: 500, message: "unable to find customer" });
    } else {
      const recordCount = customerListResopnse.length;
      res.send({
        status: 200,
        recordCount: recordCount,
        results: customerListResopnse,
      });
    }
  });
});

router.get("/view/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const data = await customerModel.findById(req.params.id);
    console.log(data);
    res.status(200).json({message: "Working ",id,data,});
  } catch (error) {
    res.status(404).json({
      message: "unsuccessful",
      err: error.message,
    });
  }
});

// create new Customer
// router.post("/add", function (req, res, next) {
//   let customerObj = new customerModel({
//     firstname: "Ravi",
//     lastname: "Shastri",
//     emailAddress: "Dante7785@gmail.com",
//     phoneNumber: "8898900684",
//     dob: "01-05-2021",
//   });
//   customerObj.save(function (err, customerObj) {
//     if (err) {
//       res.send({ status: 500, message: "unable to Add Customer" });
//     } else {
//       res.send({
//         status: 200,
//         message: "Customer Add Succefully",
//         customerObj,
//       });
//     }
//   });
// });
router.put("/update", function (req, res, next) {
  const userId = req.query.userId;
  // let customerObj = {
  //   firstname: "Rahul",
  //   lastname: "Shastri",
  //   emailAddress: "Dante7785@gmail.com",
  //   phoneNumber: "8898900684",
  //   dob: "01-05-2021",
  // };
  customerModel.findByIdAndUpdate(userId,customerObj,function (err, customerResopnse) {
      if (err) {
        res.send({ status: 500, message: "unable to Update Customer" });
      } else {
        res.send({ status: 200, results: customerResopnse });
      }
    }
  );
});
router.delete("/delete", function (req, res, next) {
  const userId = req.query.userId;
  customerModel.findByIdAndDelete(userId, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: "unable to delete" });
    } else {
      res.send({
        status: 200,
        message: "User deleted Succefully",
        results: customerResponse,
      });
    }
  });
});

router.get("/search", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
