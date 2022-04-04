const express = require("express");
const signUpSchema = require("../signUpSchema");
const UpdateRouter = express.Router();

UpdateRouter.put("/all-users", (req, res) => {
  // console.log(req.body);
  // res.json(req
  const updatedData = {
    fullName: req.body.fullName,
    regNo: req.body.regNo,
    dept: req.body.dept,
    email: req.body.email,
  };
  console.log(req);
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
      res.json({ data: "Error in @UpdateRouter /put/all-users" });
    });
});

module.exports = UpdateRouter;
