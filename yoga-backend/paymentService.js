async function completePayment(user) {
 const paymentResponse = await mockCompletePayment(user);

  if (paymentResponse.success) {
    return { success: true, message: 'Payment successful.', paymentDetails: paymentResponse.paymentDetails };
  } else {
    throw new Error('Payment failed.');
  }
}

async function mockCompletePayment(user) {
  
  return {
    success: true,
    paymentDetails: {
      amount: 500, 
      currency: 'INR', 
      timestamp: new Date(),
    },
  };
}

module.exports = { completePayment };
