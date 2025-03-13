const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate Token
    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
