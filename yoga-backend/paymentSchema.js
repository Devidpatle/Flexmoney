const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
  paymentDetails: { type: Object, default: {} },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
