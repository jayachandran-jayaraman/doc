const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/user"); // adjust path if needed

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

const seedUsers = async () => {
  try {

    const hashedPassword = await bcrypt.hash("123456", 10);

    const users = [
      {
        username: "22IT101",
        password: hashedPassword,
        role: "student"
      },
      {
        username: "22IT102",
        password: hashedPassword,
        role: "student"
      },
      {
        username: "22IT103",
        password: hashedPassword,
        role: "student"
      },
      {
        username: "staff01",
        password: await bcrypt.hash("staff123", 10),
        role: "staff"
      },
      {
        username: "admin01",
        password: await bcrypt.hash("admin123", 10),
        role: "admin"
      }
    ];

    await User.insertMany(users);

    console.log("Dummy users inserted successfully");
    mongoose.connection.close();

  } catch (error) {
    console.log(error);
  }
};

seedUsers();