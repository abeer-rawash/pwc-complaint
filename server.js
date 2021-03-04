const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = 3001;

const connect = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB.");
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection Error : " + err);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
