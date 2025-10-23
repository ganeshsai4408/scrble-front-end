import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logoImg from '../assets/images/logo.png';
import { useAuth } from '../context/AuthContext';
import './SignUpPage.css';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { register, error: authError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const userData = {
        name: fullName,
        email,
        password,
        phoneNumber
      };

      const response = await register(userData);
      setMessage('Account created successfully! Please check your email for verification.');
      
      // Redirect to home page after successful registration
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  return (
    <div className="signup-page-container">
      <div className="signup-form-card">
        {/* Logo */}
        <img 
          src={logoImg} 
          alt="Scrble Logo" 
          className="signup-logo" 
        />
        
        <h2 className="signup-title">Create an account</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Error Display */}
          {(error || authError) && (
            <div style={{ 
              color: 'red', 
              marginBottom: '1rem', 
              padding: '0.5rem', 
              border: '1px solid red', 
              borderRadius: '4px',
              backgroundColor: '#ffebee'
            }}>
              {error || authError}
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

          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              aria-required="true"
            />
          </div>

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

          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="phoneNumber">Enter your phone number</label>
            <div className="phone-input-group">
              <div className="country-code-section">
                <div className="flag-icon">
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="5" fill="#FF9933"/>
                    <rect y="5" width="20" height="5" fill="#FFFFFF"/>
                    <rect y="10" width="20" height="5" fill="#138808"/>
                    <circle cx="10" cy="7.5" r="2" stroke="#000080" strokeWidth="0.3" fill="none"/>
                    <g transform="translate(10,7.5)">
                      {/* Ashoka Chakra spokes */}
                      {Array.from({length: 24}, (_, i) => (
                        <line 
                          key={i}
                          x1="0" 
                          y1="0" 
                          x2={1.8 * Math.cos(i * Math.PI / 12)} 
                          y2={1.8 * Math.sin(i * Math.PI / 12)}
                          stroke="#000080" 
                          strokeWidth="0.1"
                        />
                      ))}
                    </g>
                  </svg>
                </div>
                <span className="country-code">+91</span>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Mobile number"
                required
                aria-required="true"
                className="phone-number-input"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
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

          {/* Password Requirements */}
          <p className="password-requirements">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>

          {/* Show Password Checkbox */}
          <div className="show-password-group">
            <input
              type="checkbox"
              id="showPasswordCheckbox"
              checked={showPassword && showConfirmPassword}
              onChange={(e) => {
                setShowPassword(e.target.checked);
                setShowConfirmPassword(e.target.checked);
              }}
            />
            <label htmlFor="showPasswordCheckbox">Show password</label>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign in'}
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;