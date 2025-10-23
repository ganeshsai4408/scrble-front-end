import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { authAPI } from '../services/apiService';
import './VerificationPage.css';

const VerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  // Get email from localStorage (set by forgot password page)
  const email = localStorage.getItem('resetEmail');

  const handleInputChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    if (!email) {
      setError('Email not found. Please start the password reset process again.');
      navigate('/forgot-password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await authAPI.verifyResetToken(email, verificationCode);
      
      // Store the token for the new password page
      localStorage.setItem('resetToken', verificationCode);
      
      // Navigate to new password page
      navigate('/new-password');
      
    } catch (error) {
      setError(error.message || 'Invalid or expired code. Please try again.');
      console.error('Verification error:', error);
    } finally {
      setLoading(false);
    }
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
          Enter your 6 digits code that you received on your email.
        </p>

        <form onSubmit={handleSubmit} className="verification-form">
          {/* Error Display */}
          {error && (
            <div style={{ 
              color: 'red', 
              marginBottom: '1rem', 
              padding: '0.5rem', 
              border: '1px solid red', 
              borderRadius: '4px',
              backgroundColor: '#ffebee'
            }}>
              {error}
            </div>
          )}

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
          <button type="submit" className="continue-btn" disabled={loading}>
            {loading ? 'Verifying...' : 'CONTINUE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;