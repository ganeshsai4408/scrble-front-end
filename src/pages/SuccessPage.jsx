import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import './SuccessPage.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to home page after successful password reset
    navigate('/');
  };

  return (
    <div className="success-page-container">
      <div className="success-form-card">
        {/* Success Icon */}
        <div className="success-icon-container">
          <div className="success-icon-circle">
            <FiCheck className="success-check-icon" />
          </div>
        </div>
        
        <h2 className="success-title">Successfully</h2>
        <p className="success-description">
          Your password has been reset successfully.
        </p>

        {/* Continue Button */}
        <button onClick={handleContinue} className="success-continue-btn">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;