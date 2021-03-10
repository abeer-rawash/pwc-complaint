const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const Admin = require("../models/admin");
const Complaint = require("../models/complaint");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

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
  try {
    const saveUser = await newCust.save();
    res.send({ id: newCust._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login customer user
router.post("/logincustomer", async (req, res) => {
  //checking if there is an account for this email
  const email = req.body.email;
  const user = await Customer.findOne({ email });
  if (!user) {
    return res.status(400).send("there is no account with this email");
  }

  //Checking if password is correct
  const validpassword = bcrypt.compareSync(req.body.password, user.password);
  if (!validpassword) return res.status(400).send("password not correct");

  //Authentication
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  var decoded = jwt_decode(token);
  res.header("addUser-token", token).json({ token });
});

//Add new complaint
router.post("/addcomplaint", async (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  const customerId = req.body.customerId;
  const description = req.body.description;
  const status = req.body.status;

  //Adding a new complaint
  const newComplaint = await Complaint.create({
    complaintTitle: title,
    complaintType: type,
    customerId: customerId,
    complaintStatus: status,
    complaintMsg: description,
  });
  try {
    const saveComplaint = await newComplaint.save();
    res.send({ id: newComplaint._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET Complaints by ID
router.get("/fetchcomplaints", async function (req, res) {
  await Complaint.find()
    .populate("customerId")
    .exec((err, complaints) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(complaints);
    });
});

//Add new admin user
router.post("/addadmin", async (req, res) => {
  //Check if email is used!
  const addAdmin = await Admin.findOne({
    $or: [{ email: req.body.email }],
  });

  if (addAdmin) {
    return res.status(400).send("email used");
  }

  //Securing password
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = securePassword;

  //Adding a new customer
  const newAdmin = await Admin.create({
    firstName: firstname,
    lastName: lastname,
    username: username,
    email: email,
    password: password,
  });
  try {
    const saveUser = await newAdmin.save();
    res.send({ id: newAdmin._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login admin user
router.post("/loginadmin", async (req, res) => {
  //checking if there is an account for this email
  const email = req.body.email;
  const user = await Admin.findOne({ email });
  if (!user) {
    return res.status(400).send("there is no account with this email");
  }

  //Checking if password is correct
  const validpassword = bcrypt.compareSync(req.body.password, user.password);
  if (!validpassword) return res.status(400).send("password not correct");

  //Authentication
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  var decoded = jwt_decode(token);
  res.header("addUser-token", token).json({ token });
});

//GET all complaints
router.get("/fetchcomplaints", async function (req, res) {
  await Complaint.find()
    .populate("customerId")
    .exec((err, complaints) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(complaints);
    });
});

//GET complaint by id
router.get("/addcomplaint/:id", function (req, res) {
  Complaint.findById(req.params.id, function (err, complaint) {
    if (!complaint) {
      res.status(404).send("No result found");
    } else {
      res.json(complaint);
    }
  });
});

//Update status in a complaint
router.patch("/addcomplaint/update/:id", function (req, res) {
  Complaint.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Complaint updated");
    })
    .catch(function (err) {
      res.status(422).send("Complaint update failed");
    });
});

module.exports = router;
