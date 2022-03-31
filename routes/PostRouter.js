const express = require("express");
// const router = express.Router();
const PostRouter = express.Router();
const signUpSchema = require("../signUpSchema");

// Posting the SignUp Details
PostRouter.post("/add-user", (req, res) => {
  const data = req.body;
  const newSignUp = new signUpSchema(data);
  // res.json({ data: "hello" });
  newSignUp.save((err) => {
    if (err) {
      res.status(500).statusText("Error").json({
        msg: "Internal server error @PostRouter.post/signUp",
      });
    } else {
      console.log(req.body);
      console.log(req.body.fullName);
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
