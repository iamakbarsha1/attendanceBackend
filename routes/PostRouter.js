const express = require("express");
// const router = express.Router();
const PostRouter = express.Router();
const signUpSchema = require("../signUpSchema");

// Posting the SignUp Details
PostRouter.post("/signUp", (req, res) => {
  const data = req.body;
  const newSignUp = new signUpSchema(data);
  // res.json({ data: "hello" });
  newSignUp.save((err) => {
    if (err) {
      res.status(500).json({
        msg: "Internal server error @PostRouter.post/signUp",
      });
    } else {
      res.json({
        msg: "Your data has been SAVED",
      });
      // console.log(res);
    }
  });
  //   {
  //     "fullName": "Akbar Sha S",
  //     "regNo": "1913181033035",
  //     "dept": "BCA",
  //     "email": "iamakbarsha1@gmail.com"
  //  }
});

module.exports = PostRouter;
