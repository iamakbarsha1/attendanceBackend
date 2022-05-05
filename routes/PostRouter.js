const express = require("express");
const PostRouter = express.Router();
const sendEmail = require("../mail");

const roomSchema = require("../roomSchema");
const signUpSchema = require("../signUpSchema");
// const multer = require("multer");
// const path = require("path");

// configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     /*
//       Files will be saved in the 'uploads' directory. Make
//       sure this directory already exists!
//     */
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     /*
//       uuidv4() will generate a random ID that we'll use for the
//       new filename. We use path.extname() to get
//       the extension from the original file name and add that to the new
//       generated ID. These combined will create the file name used
//       to save the file on the server and will be available as
//       req.file.pathname in the router handler.
//     */
//     const newFilename = Date.now() + `${path.extname(file.originalname)}`;
//     cb(null, newFilename);
//   },
// });
// create the multer instance that will be used to upload/save the file
// const upload = multer({ storage });

// PostRouter.post(
//   "/sendDataWithFile",
//   upload.single("selectedFile"),
//   (req, res) => {
//     console.log(req.file);
//     // /** When using the "single"
//     //   data come in "req.file" regardless of the attribute "name". **/
//     // var tmp_path = req.file.path;

//     // /** The original name of the uploaded file
//     //       stored in the variable "originalname". **/
//     // var target_path = "uploads/" + req.file.originalname;
//     /*
//     We now have a new req.file object here. At this point the file has been saved
//     and the req.file.filename value will be the name returned by the
//     filename() function defined in the diskStorage configuration. Other form fields
//     are available here in req.body.
//   */
//     res.send();
//   }
// );

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
      res.json({
        data: `Something went Wrong @POST/add-user`,
        err,
        key: "ERROR",
      });
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

PostRouter.post("/sendEmail", (req, res) => {
  console.log(req.body);
  const { name, email, msg } = req.body;
  sendEmail(name, email, msg, (err, data) => {
    if (err) {
      // res.status(500).json({
      res.json({
        message: "Something went Wrong @POST/sendEmail",
        key: "Error",
      });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

module.exports = PostRouter;
