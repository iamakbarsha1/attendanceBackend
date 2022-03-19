const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  roomNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SignUp", signUpSchema);
