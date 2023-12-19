import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEnrollmentContext } from "./../context/EnrollmentContext"
import './Form.css';

const Form = () => {
  const { enrollmentStatus, updateEnrollmentStatus } = useEnrollmentContext();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedTime: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      updateEnrollmentStatus({
        success: false,
        message: 'Payment Methods',
        payload:formData,
        paymentStatus:false
      });

      console.log(enrollmentStatus)

      navigate('/payment');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle specific error for invalid age
        window.alert('Invalid age. Must be between 18 and 65.');
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  const simulatePayment = async () => {
    // Simulate a successful payment
    return {
      success: true,
      message: 'Payment successful',
    };
  };

  return (
    <div className="form-container">
      <h2>Yoga Class Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectedTime">Preferred Time:</label>
          <select
            id="selectedTime"
            value={formData.selectedTime}
            onChange={(e) => setFormData({ ...formData, selectedTime: e.target.value })}
            required
          >
            <option value="">Select a time</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Fee: 500/- Rs INR</label>
        </div>

        <button type="submit">Pay and Enroll</button>
      </form>
    </div>
  );
};

export default Form;
