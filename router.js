const express = require("express");
const router = express.Router();
const roomSchema = require("./roomSchema");

// Create - _C_rud
// router.post("/", async (req, res) => {
router.get("/room", (req, res) => {
  const { roomName, totalStudents } = req.body;

  var roomData = new roomSchema({
    roomName,
    totalStudents,
  });
  roomData
    .save()
    .then((room) => {
      res.send(room);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
});

router.get("/", (req, res) => {
  res.json("Router");
});

module.exports = router;
