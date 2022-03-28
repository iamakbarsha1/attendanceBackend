const express = require("express");
const DeleteRouter = express.Router();
const signUpSchema = require("../signUpSchema");

DeleteRouter.delete("/all-user", (req, res) => {
  signUpSchema
    .find()
    .then((dbRes) => {
      res.send(dbRes);
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = DeleteRouter;
