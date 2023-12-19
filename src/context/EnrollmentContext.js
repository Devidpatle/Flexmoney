import React, { createContext, useContext, useState } from 'react';

const EnrollmentContext = createContext();

export const useEnrollmentContext = () => {
  return useContext(EnrollmentContext);
};

export const EnrollmentProvider = ({ children }) => {
  const [enrollmentStatus, setEnrollmentStatus] = useState({
    success: null,
    message: '',
    payload:Array,
    paymentStatus:false
  });

  const updateEnrollmentStatus = (status) => {
    setEnrollmentStatus(status);
  };

  return (
    <EnrollmentContext.Provider value={{ enrollmentStatus, updateEnrollmentStatus }}>
      {children}
    </EnrollmentContext.Provider>
  );
};
