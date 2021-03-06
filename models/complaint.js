const mongoose = require("mongoose");

const Complaint = new mongoose.Schema(
  {
    complaintMsg: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    complaintType: {
      type: String,
      required: true,
    },
    complaintTitle: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", Complaint);
