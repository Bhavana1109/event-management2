require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Event Management API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
