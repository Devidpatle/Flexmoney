import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EnrollmentProvider } from '././context/EnrollmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EnrollmentProvider>
      <App />
    </EnrollmentProvider>
  </React.StrictMode>
);


reportWebVitals();
