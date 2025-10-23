import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authAPI } from '../services/apiService';

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth context
const AuthContext = createContext();

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    
    default:
      return state;
  }
};

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user on app start
  useEffect(() => {
    // Set loading to false immediately to not block the app
    const timer = setTimeout(() => {
      const token = localStorage.getItem('token');
      if (token) {
        // You could add a loadUser function here if you have a /me endpoint
        dispatch({ type: 'USER_LOADED', payload: { id: 'temp', role: 'user' } });
      } else {
        dispatch({ type: 'AUTH_ERROR', payload: null }); // Don't show error, just not authenticated
      }
    }, 100); // Small delay to prevent flash

    return () => clearTimeout(timer);
  }, []);

  // Login user
  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      console.log('API login response:', response);
      
      const userData = {
        ...response.user,
        role: response.role
      };
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token: response.token, user: userData } });
      return response;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.message });
      throw error;
    }
  };

  // Register user
  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      // For registration, we don't automatically log the user in since email verification is required
      // Just return the response with success message
      return response;
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.message });
      throw error;
    }
  };

  // Logout user
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Clear errors
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};