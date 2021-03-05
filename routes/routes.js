const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

//Add new customer user
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

//login customer user

router.post("/logincustomer", async (req, res) => {
  //checking if there is an account for this email
  const email = req.body.email;
  const user = await Customer.findOne({ email });
  if (!user) {
    return res.status(400).send("there is no account with this email");
  }

  //checking if password is correct
  console.log(req.body.password, "password");
  const validpassword = bcrypt.compareSync(req.body.password, user.password);
  if (!validpassword) return res.status(400).send("password not correct");

  //create and send a token
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  // var decoded = jwt_decode(token);
  // res
  //   .header("addUser-token", token, email, username)
  //   .json({ token, email, username });
});
