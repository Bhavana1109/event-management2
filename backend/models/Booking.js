const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
});

module.exports = mongoose.model("Booking", BookingSchema);
