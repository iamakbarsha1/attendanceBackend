const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    // roomName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // totalStudents: {
    //   type: Number,
    //   required: true,
    // },
    roomNo: {
      type: Number,
      requirrd: true,
    },
    // createdTime: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rooms", roomSchema);
