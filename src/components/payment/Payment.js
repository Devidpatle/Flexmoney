import React, { useState } from 'react';
import "./Payment.css";
import axios from 'axios';
import cardImg from "./../assets/img/card_img.png"
import CongratulationModal from './../modal/CongratulationModal';
import { useEnrollmentContext } from '../../context/EnrollmentContext';

function Payment() {
  const { enrollmentStatus, updateEnrollmentStatus } = useEnrollmentContext();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const [showCongratulationModal, setShowCongratulationModal] = useState(false);


  const TotalData = [enrollmentStatus.payload, formData];

  console.log(TotalData);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (enrollmentStatus.message === "Payment Methods") {

        const paymentResult = await simulatePayment();

        // Send form data and payment result to the backend
        const response = await axios.post('https://yoga-backend--devidpatledp.repl.co/api/enroll', {
          ...TotalData,
          paymentResult,
        });


        // Check if enrollment and payment were successful
        if (response.data.success && paymentResult.success) {
          // Show congratulation modal
          setShowCongratulationModal(true);
        } else {
          // Handle enrollment or payment failure
          window.alert('Enrollment or payment failed. Please try again.');
        }
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      window.alert('Error submitting form. Please try again.');
    }
  };

  const simulatePayment = async () => {
    // Simulate a successful payment
    return {
      success: true,
      message: 'Payment successful',
      paymentDetails: formData,
    };
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowCongratulationModal(false);
  };

  return (
    <div>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h3 className="title">Billing Address</h3>
              <div className="inputBox">
                <span>Full Name :</span>
                <input type="text" placeholder="John Deo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="Room - Street - Locality"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
              <div className="inputBox">
                <span>City :</span>
                <input type="text" placeholder="Mumbai"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>State :</span>
                  <input type="text" placeholder="India"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required

                  />
                </div>
                <div className="inputBox">
                  <span>Zip Code :</span>
                  <input type="text" placeholder="123 456"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="title">Payment</h3>
              <div className="inputBox">
                <span>Cards Accepted :</span>
                <img src={cardImg} alt="" />
              </div>
              <div className="inputBox">
                <span>Name on Card :</span>
                <input type="text" placeholder="Mr. John Deo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="inputBox">
                <span>Credit Card Number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"

                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  required

                />
              </div>
              <div className="inputBox">
                <span>Exp Month :</span>
                <input type="text" placeholder="January"

                  value={formData.expMonth}
                  onChange={(e) => setFormData({ ...formData, expMonth: e.target.value })}
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>Exp Year :</span>
                  <input type="number" placeholder="2022"

                    value={formData.expYear}
                    onChange={(e) => setFormData({ ...formData, expYear: e.target.value })}
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234"

                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    required />
                </div>
              </div>
            </div>
          </div>

          <input type="submit" value="Proceed to Checkout" className="submit-btn" />
        </form>
      </div>

      {showCongratulationModal && (
        <CongratulationModal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Payment;
