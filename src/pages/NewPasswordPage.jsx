import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logoImg from '../assets/images/logo.png';
import { authAPI } from '../services/apiService';
import './NewPasswordPage.css';

const NewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Get email and token from localStorage
  const email = localStorage.getItem('resetEmail');
  const token = localStorage.getItem('resetToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (!email || !token) {
      setError('Session expired. Please start the password reset process again.');
      navigate('/forgot-password');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      await authAPI.resetPassword(email, token, newPassword);
      setMessage('Password updated successfully! Redirecting to login...');
      
      // Clear stored data
      localStorage.removeItem('resetEmail');
      localStorage.removeItem('resetToken');
      
      // Navigate to login page after success
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      setError(error.message || 'Failed to update password. Please try again.');
      console.error('Password reset error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  return (
    <div className="new-password-page-container">
      <div className="new-password-form-card">
        {/* Logo */}
        <img 
          src={logoImg} 
          alt="Scrble Logo" 
          className="new-password-logo" 
        />
        
        <h2 className="new-password-title">New password</h2>

        <form onSubmit={handleSubmit} className="new-password-form">
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

          {/* New Password Field */}
          <div className="form-group">
            <label htmlFor="newPassword">New password</label>
            <div className="password-input-group">
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                aria-required="true"
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={toggleNewPasswordVisibility}
                aria-label={showNewPassword ? 'Hide password' : 'Show password'}
              >
                {showNewPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="password-input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                aria-required="true"
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={toggleConfirmPasswordVisibility}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="remember-me-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          {/* Update Password Button */}
          <button type="submit" className="update-password-btn" disabled={loading}>
            {loading ? 'Updating...' : 'Update password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordPage;