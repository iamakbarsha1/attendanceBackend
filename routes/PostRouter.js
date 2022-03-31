const express = require("express");
// const router = express.Router();
const PostRouter = express.Router();
const signUpSchema = require("../signUpSchema");

// Posting the SignUp Details
PostRouter.post("/add-user", (req, res) => {
  const data = req.body;
  signUpSchema(data)
    .save()
    .then((dbRes) => {
      res.json({ data: "Student Registered Successfully", key: "SUCCESS" });
    })
    .catch((err) => {
      res.json({ data: "Something went Wrong", key: "ERROR" });
      console.log(err);
    });

  //   {
  //     "fullName": "Akbar Sha S",
  //     "regNo": "1913181033035",
  //     "dept": "BCA",
  //     "email": "iamakbarsha1@gmail.com"
  //  }
});

module.exports = PostRouter;
