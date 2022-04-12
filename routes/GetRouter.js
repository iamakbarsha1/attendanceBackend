const express = require("express");
const GetRouter = express.Router();
const roomSchema = require("../roomSchema");
const signUpSchema = require("../signUpSchema");

GetRouter.get("/test", (req, res) => {
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
      res.json({ data: dbRes });
    })
    .catch((err) => {
      // console.log(err);
      res.json({ data: "Something Wrong in get users" });
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
      res.json({ data: "Something Wrong in get /user/:_id" });
    });
});

GetRouter.get("/rooms", (req, res) => {
  roomSchema.find().then((dbRes) => {
    res.json({
      data: dbRes,
      key: "Success",
    });
  });
  // .catch((err) => {
  //   res.json({ key: "error", data: err });
  //   console.log(err);
  // });
  // .catch((err) => {
  //   res.json({ data: "Something Wrong in get rooms" });
  // console.log(err);
  // res.json({
  //   data: err,
  //   key: "Error",
  // });
});

GetRouter.get("/view/:id", (req, res) => {
  signUpSchema.findById({ id: req.query._id }).then((dbRes) => {
    res.json(dbRes);
  });
});

module.exports = GetRouter;
