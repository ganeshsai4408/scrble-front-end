import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import only the Home Page for now
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Home Page Route */}
        <Route path="/" element={<HomePage />} />
        
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
  );
};

export default App;
