const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const server = express();
const PORT = process.env.PORT || 3010;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

//connetct database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database not connected", err));

//middleware
server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));

server.use("/", require("./routes/authRoutes.js"));

server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
