// Third Party Module
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const morgan = require("morgan");
const bodyparser = require("body-parser");
// const multer = require("multer");
// const uuidv4 = require("uuid");
const path = require("path");

const PORT = process.env.PORT || 4000;
const dbUrl =
  process.env.MONGODB_URI ||
  `mongodb+srv://admin:admin@attendancems.uphej.mongodb.net/AttendanceMS?retryWrites=true&w=majority`;

// Middleware
// const baseURL = "http://localhost:1000";
// const CloudURL = "https://ams-tnc-hostel.herokuapp.com/";
// const cloudFrontendURL = "https://portfolio-akbarsha.netlify.app/";
const cloudFrontendURL = "";
const localFrontendURL = "http://localhost:3000/";
const corsOptions = {
  // origin: localFrontendURL,
  // origin: cloudFrontendURL,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(morgan("tiny"));
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
// Body-parser middleware - DATA PARSING
app.use(express.json());
// this helps to show the json in console.log rather than undefined
app.use(express.urlencoded({ extended: true }));
// Router
// const AllRouter = require("./routes");
// app.use("/api", AllRouter);
const PostRouter = require("./routes/PostRouter");
app.use("/api/post", PostRouter);
const GetRouter = require("./routes/GetRouter");
app.use("/api/get", GetRouter);
const DeleteRouter = require("./routes/DeleteRouter");
app.use("/api/delete", DeleteRouter);
const UpdateRouter = require("./routes/UpdateRouter");
app.use("/api/update", UpdateRouter);

// MongoDB Connecting

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("Database is Connected");
  })
  .catch((err) => {
    console.log("Database is D-I-S-connected", err);
    // else console.log("Database is DISCONNECTED");
  });

// PORT Listening
app.listen(PORT, () => {
  console.log(`Server is Running in : http://localhost:${PORT}`);
});
