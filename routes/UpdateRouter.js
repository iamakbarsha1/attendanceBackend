const express = require("express");
const signUpSchema = require("../signUpSchema");
const UpdateRouter = express.Router();

UpdateRouter.put("/all-users", (req, res) => {
  console.log(req.body);
  // signUpSchema
  //   .updateOne({_id: })
  //   .then((dbRes) => {
  //     res.send(dbRes);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(req);
});

module.exports = UpdateRouter;
