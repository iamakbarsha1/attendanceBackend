const express = require("express");
const DeleteRouter = express.Router();
const signUpSchema = require("../signUpSchema");

DeleteRouter.delete("/all-user/:id", (req, res) => {
  signUpSchema
    .findByIdAndDelete({ _id: req.params.id })
    .then((dbRes) => {
      res.send(dbRes);
      // console.log(req.body);
      console.log(`id Deleted is ${id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = DeleteRouter;
