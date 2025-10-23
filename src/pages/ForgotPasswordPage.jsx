import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { authAPI } from '../services/apiService';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await authAPI.forgotPassword(email);
      setMessage('Password reset OTP sent to your email. Please check your inbox.');
      
      // Store email for verification page
      localStorage.setItem('resetEmail', email);
      
      // Navigate to verification page after a short delay
      setTimeout(() => {
        navigate('/verification');
      }, 2000);
      
    } catch (error) {
      setError(error.message || 'Failed to send reset email. Please try again.');
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
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

          {/* Success Message */}
          {message && (
            <div style={{ 
              color: 'green', 
              marginBottom: '1rem', 
              padding: '0.5rem', 
              border: '1px solid green', 
              borderRadius: '4px',
              backgroundColor: '#e8f5e8'
            }}>
              {message}
            </div>
          )}

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
          <button type="submit" className="continue-btn" disabled={loading}>
            {loading ? 'Sending...' : 'CONTINUE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;