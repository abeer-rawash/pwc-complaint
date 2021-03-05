const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

// router.post("/addcustomer", async (req, res) => {
//   const saltPassword = await bcrypt.genSalt(10);
//   const securePassword = await bcrypt.hash(req.body.password, saltPassword);
//   const addCust = new Customer({
//     firsname: req.body.firstname,
//     lastname: req.body.lastname,
//     phone: req.body.phone,
//     email: req.body.email,
//     password: securePassword,
//   });

//   console.log(addCust, "AddCust");

//   addCust
//     .save()
//     .then((data) => {
//       console.log("data", data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log("Error");
//       res.json(err);
//     });
// });

router.post("/addcustomer", async (req, res) => {
  //Check if email is used!
  const addCust = await Customer.findOne({
    $or: [{ email: req.body.email }],
  });

  if (addCust) {
    return res.status(400).send("email used");
  }

  //Securing password
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = securePassword;

  //Adding a new customer
  const newCust = await Customer.create({
    firstName: firstname,
    lastName: lastname,
    email: email,
    phoneNo: phone,
    password: password,
  });
  console.log(newCust, "newCust");
  try {
    const saveUser = await newCust.save();
    res.send({ id: newCust._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
