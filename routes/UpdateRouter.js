const express = require("express");
const roomSchema = require("../roomSchema");
const signUpSchema = require("../signUpSchema");
const UpdateRouter = express.Router();

UpdateRouter.put("/all-users", (req, res) => {
  const updatedData = {
    fullName: req.body.fullName,
    regNo: req.body.regNo,
    dept: req.body.dept,
    email: req.body.email,
  };
  // console.log(req);
  signUpSchema
    .updateOne({ _id: req.body.id }, { $set: req.body.updatedData })
    .then((dbRes) => {
      if (dbRes.modifiedCount === 0) {
        res.json({
          // data: dbRes, // key: "Error",
          data: "UserData not Updated",
          key: "Error",
        });
        // res.json(dbRes);
      } else {
        res.json({ data: "UserData Updated Successfully", key: "Success" });
        // res.json(dbRes);
      }
    })
    .catch((err) => {
      res.json({ data: "Error in @UpdateRouter /put (/all-users)" });
    });
});

UpdateRouter.put("/rooms", (req, res) => {
  // console.log(req.body);
  // res.json(req);
  const updatedData = {
    roomNo: req.body.roomNo,
  };
  roomSchema
    .updateOne({ _id: req.body.id }, { $set: req.body.updatedData })
    .then((dbRes) => {
      if (dbRes.modifiedCount === 0) {
        res.json({
          data: "RoomData not Updated",
          key: "Error",
        });
      } else {
        res.json({ data: "RoomData Updated Successfully", key: "Success" });
      }
    })
    .catch((err) => {
      res.json({
        data: "Error in @UpdateRouter /put (/rooms)",
      });
    });
});

module.exports = UpdateRouter;
