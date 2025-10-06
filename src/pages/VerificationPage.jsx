import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import './VerificationPage.css';

const VerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    console.log('Verification code entered:', verificationCode);
    // In a real app, this is where you'd verify the code
    // Navigate to new password page
    navigate('/new-password');
  };

  return (
    <div className="verification-page-container">
      <div className="verification-form-card">
        {/* Logo */}
        <img 
          src={logoImg} 
          alt="Scrble Logo" 
          className="verification-logo" 
        />
        
        <h2 className="verification-title">Verification</h2>
        <p className="verification-description">
          Enter your 4 digits code that you received on your email.
        </p>

        <form onSubmit={handleSubmit} className="verification-form">
          {/* Code Input Boxes */}
          <div className="code-input-group">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="code-input"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Continue Button */}
          <button type="submit" className="continue-btn">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;