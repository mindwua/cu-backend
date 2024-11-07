const express = require("express");
const {
  register,
  login,
  getMe,
  logout,
  clearUser,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

// User registration
router.post("/register", register);

// User login
router.post("/login", login);

// Get logged-in user's information
router.get("/me", protect, getMe);

// User logout
router.get("/logout", logout);

router.get("/delete", clearUser);

module.exports = router;
