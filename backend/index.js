const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

try {
  console.log("Trying to connect to mongoDB");
  mongoose.connect(process.env.MONGOURI, (err) => {
    if (err) throw err;
  });
  console.log("MongoDB connected successfully");
} catch (ex) {
  console.error(ex.message);
  console.log(ex.stack);
}

const PORT = process.env.PORT || 2308;

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
