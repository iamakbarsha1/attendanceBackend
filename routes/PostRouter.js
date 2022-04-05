const express = require("express");
const roomSchema = require("../roomSchema");
// const router = express.Router();
const PostRouter = express.Router();
const signUpSchema = require("../signUpSchema");

// Posting the SignUp Details
PostRouter.post("/add-user", (req, res) => {
  // const data = req.body;
  console.log(req);
  const newData = new signUpSchema({
    fullName: req.body.fullName,
    regNo: req.body.regNo,
    roomNo: req.body.roomNo,
    dept: req.body.dept,
    email: req.body.email,
  });
  newData
    .save()
    .then((dbRes) => {
      // res.json({ data: "Student Registered Successfully", key: "SUCCESS" });
      console.log(dbRes);
      res.json({ data: dbRes, key: "SUCCESS" });
    })
    .catch((err) => {
      res.json({ data: "Something went Wrong", key: "ERROR" });
      // console.log(err);
    });

  //   {
  //     "fullName": "Akbar Sha S",
  //     "regNo": "1913181033035",
  //     "dept": "BCA",
  //     "email": "iamakbarsha1@gmail.com"
  //  }
});

PostRouter.post(`/rooms`, (req, res) => {
  console.log(req.body.roomNo);
  const roomData = new roomSchema({
    roomNo: req.body.roomNo,
  });

  roomData
    .save()
    .then((dbRes) => {
      res.json({
        data: dbRes,
        key: "Success",
      });
    })
    .catch((err) => {
      res
        .json({
          data: `Something went Wrong @POST/rooms ${err}`,
          key: "Error",
        })
        .statusCode(403);
    });
});

module.exports = PostRouter;
