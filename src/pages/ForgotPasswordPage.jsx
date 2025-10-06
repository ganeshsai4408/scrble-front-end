import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    // In a real app, this is where you'd call your password reset API
    // Navigate to verification page
    navigate('/verification');
  };

  return (
    <div className="forgot-password-page-container">
      <div className="forgot-password-form-card">
        {/* Logo */}
        <img 
          src={logoImg} 
          alt="Scrble Logo" 
          className="forgot-password-logo" 
        />
        
        <h2 className="forgot-password-title">Forgot password</h2>
        <p className="forgot-password-description">
          Enter your email for the verification process, we will send 4 digits code to your email.
        </p>

        <form onSubmit={handleSubmit} className="forgot-password-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
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

export default ForgotPasswordPage;