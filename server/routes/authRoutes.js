const express = require("express");
const cors = require("cors");
const {
  test,
  resgisterUser,
  loginUser,
  getProfile,
} = require("../controllers/authControllers");

const router = express.Router();

//middleware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.get("/profile", getProfile);
router.post("/register", resgisterUser);
router.post("/login", loginUser);

module.exports = router;
