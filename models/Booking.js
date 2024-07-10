const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
});

module.exports = mongoose.model('Booking', BookingSchema);
