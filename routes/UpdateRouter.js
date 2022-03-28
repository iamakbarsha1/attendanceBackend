const express = require("express");
const UpdateRouter = express.Router();

UpdateRouter.put("/all-users", (req, res) => {
  console.log(req.body);
});

module.exports = UpdateRouter;
