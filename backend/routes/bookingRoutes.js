const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// Book Event
router.post("/", async (req, res) => {
  const { event, user } = req.body;
  const newBooking = new Booking({ event, user, paymentStatus: "pending" });
  await newBooking.save();
  
  res.json(newBooking);
});

// Get Bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find().populate("event user");
  res.json(bookings);
});

module.exports = router;
