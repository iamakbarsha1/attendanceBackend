const { response } = require("express");
const express = require("express");
const GetRouter = express.Router();
const roomSchema = require("../roomSchema");

GetRouter.get("/test", (req, res) => {
  //   res.json({
  //     users: "akbar sha s is a user",
  //   });
  //   console.log(res);
  //   console.log(req);
  res.send("Working...");
});

GetRouter.get("/users", (req, res) => {
  roomSchema.find().then((dbRes) => {
    res.json(dbRes);
    console.log(dbRes);
  });
});

module.exports = GetRouter;
