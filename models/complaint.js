const mongoose = require("mongoose");

const Complaint = new mongoose.Schema(
  {
    complaintMsg: {
      type: String,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    complaintType: {
      type: String,
    },
    complaintStatus: {
      type: String,
    },
    complaintTitle: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", Complaint);
