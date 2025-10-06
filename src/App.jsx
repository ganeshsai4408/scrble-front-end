import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerificationPage from './pages/VerificationPage';
import NewPasswordPage from './pages/NewPasswordPage';
import SuccessPage from './pages/SuccessPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionOnePage from './pages/CollectionOnePage';
import CollectionTwoPage from './pages/CollectionTwoPage';
import CollectionThreePage from './pages/CollectionThreePage';
import ScrollToTop from './components/common/ScrollToTop';

// Import context
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Page Route */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Sign Up Page Route */}
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Forgot Password Page Route */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Verification Page Route */}
          <Route path="/verification" element={<VerificationPage />} />
          
          {/* New Password Page Route */}
          <Route path="/new-password" element={<NewPasswordPage />} />
          
          {/* Success Page Route */}
          <Route path="/success" element={<SuccessPage />} />
          
          {/* Product Detail Page Route */}
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          
          {/* Collections Page Routes */}
          <Route path="/collections/one" element={<CollectionOnePage />} />
          <Route path="/collections/two" element={<CollectionTwoPage />} />
          <Route path="/collections/three" element={<CollectionThreePage />} />
          
          {/* Optional: Simple 404 fallback */}
          <Route 
            path="*" 
            element={
              <div style={{ padding: '5rem', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
                <h1>404 | Page Not Found</h1>
                <p>The page you are looking for doesn't exist.</p>
              </div>
            } 
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
