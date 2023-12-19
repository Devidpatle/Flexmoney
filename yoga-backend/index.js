const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { completePayment } = require('./paymentService');
const User = require('./userSchema');
const Payment = require('./paymentSchema');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://Devidpatle:12345@cluster0.cgnrl.mongodb.net/flexMoney';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/enroll', async (req, res) => {
  const userData = req.body;

  if (userData.age < 18 || userData.age > 65) {
    return res.status(400).json({ success: false, message: 'Invalid age. Must be between 18 and 65.' });
  }

  try {
    const newUser = new User(userData);
    await newUser.save();

    const paymentResult = await completePayment(newUser);

    // Save payment details in a separate collection
    const payment = new Payment(paymentResult.paymentDetails);
    await payment.save();

    // Update user record with payment details
    await User.updateOne({ _id: newUser._id }, { paymentDetails: paymentResult.paymentDetails });

    res.json({ success: true, message: 'Enrollment successful.', paymentResult });
  } catch (error) {
    console.error('Error saving user to database or processing payment:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
