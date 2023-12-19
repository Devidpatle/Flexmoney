import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';
import Payment from './components/payment/Payment';
import './App.css';

const App = () => {
  const [enrollmentResult, setEnrollmentResult] = useState(null);

  const handleFormSubmit = (result) => {
    setEnrollmentResult(result);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
          <Route path="/result" element={<Result enrollmentResult={enrollmentResult} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
