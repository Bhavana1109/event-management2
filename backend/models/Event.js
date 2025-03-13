const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
