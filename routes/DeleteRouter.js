const express = require("express");
const DeleteRouter = express.Router();
const signUpSchema = require("../signUpSchema");

DeleteRouter.delete("/user/:id", (req, res) => {
  console.log(req);
});
