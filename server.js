// Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");

const PORT = 1000;
const dbUrl = `mongodb+srv://admin:admin@attendancems.uphej.mongodb.net/AttendanceMS?retryWrites=true&w=majority`;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
// Body-parser middleware - DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
// const AllRouter = require("./routes");
// app.use("/api", AllRouter);

const PostRouter = require("./routes/PostRouter");
app.use("/post", PostRouter);

// MongoDB Connecting
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database is Connected");
    } else {
      console.log("Database is D-I-S-connected");
    }
    // else console.log("Database is DISCONNECTED");
  }
);

// PORT Listening
app.listen(PORT, () => {
  console.log(`Server is Running in : ${PORT}`);
});
