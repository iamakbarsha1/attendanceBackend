const express = require("express");
const GetRouter = express.Router();
const roomSchema = require("../roomSchema");
const signUpSchema = require("../signUpSchema");

GetRouter.get("/test", (req, res) => {
  //   res.json({
  //     users: "akbar sha s is a user",
  //   });
  //   console.log(res);
  //   console.log(req);
  res.send("Working...");
});

GetRouter.get("/user", (req, res) => {
  // signUpSchema
  const userData = new signUpSchema({
    fullName: "Akbar Sha",
    regNo: "1913181033035",
    dept: "BCA",
    email: "iamakbarsha1@gmail.com",
  });
  userData
    .save()
    .then((dbRes) => {
      res.json(dbRes);
      res.send(dbRes);
      console.log(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all users
GetRouter.get("/all-users", (req, res) => {
  signUpSchema
    .find()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get single user with id
GetRouter.get("/user", (req, res) => {
  const id = _id;
  signUpSchema.findById(id).then((dbRes) => {
    res.json(dbRes);
    console.log(dbRes);
  });
});

GetRouter.get("/user/:_id", (req, res) => {
  const id = req.params._id;
  signUpSchema
    .findById(id)
    .then((dbRes) => {
      // res.render("user", {
      //   user: dbRes,
      //   title: "User Details",
      // });
      // res.json(dbRes);
      res.json({
        status: "SUCCESS",
        message: "Records Found",
        data: dbRes,
      });
      console.log(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = GetRouter;
