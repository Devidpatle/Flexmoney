const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  cardName: String,
  cardNumber: Number,
  expMonth: String,
  expYear: Number,
  cvv: Number,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
