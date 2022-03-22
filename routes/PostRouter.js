const express = require("express");
// const router = express.Router();
const PostRouter = express.Router();
const signUpSchema = require("../signUpSchema");

// Posting the SignUp Details
PostRouter.post("/signUp", (req, res) => {
  const data = req.body;
  const newSignUp = new signUpSchema(data);

  newSignUp.save((err) => {
    if (err) {
      res.status(500).json({
        msg: "Internal server error @PostRouter.post/signUp",
      });
    } else {
      res.json({
        msg: "Your data has been SAVED",
      });
    }
  });
});

module.exports = PostRouter;
