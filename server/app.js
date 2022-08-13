require("dotenv").config();
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  upload = require("express-fileupload"),
  cors = require("cors"),
  path = require("path");

app.use(express.json());
app.use(upload());
app.use(cors());

app.use("/upload/User", express.static(path.join(__dirname, "/upload/User")));
app.use("/upload/Post", express.static(path.join(__dirname, "/upload/Post")));

const port = process.env.PORT || 4000;
app.set("views engine", "ejs");

mongoose.connect(process.env.DB);

const userRouter = require("./router/user");
const postRouter = require("./router/post");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    con: false,
    msg: err.message,
  });
});

app.listen(4000, () => {
  console.log(`Server is running from http://localhost:${port}`);
});
