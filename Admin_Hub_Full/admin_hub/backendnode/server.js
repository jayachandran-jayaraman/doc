const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json()); // to read req.body

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(chalk.bgGreen.black(" Database Connected ")))
  .catch(() => console.log(chalk.white.bgRed(" Connection Failed ")));

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});