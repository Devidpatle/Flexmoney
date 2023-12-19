import React from 'react';
import './CongratulationModal.css';

const CongratulationModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="congratulation-modal">
        <div className="modal-header">
          <h2>Congratulations!</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>You have successfully enrolled for the yoga class. Namaste!</p>
        </div>
      </div>
    </div>
  );
};

export default CongratulationModal;
