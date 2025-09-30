import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import CollectionOnePage from './pages/CollectionOnePage';
import CollectionTwoPage from './pages/CollectionTwoPage';
import CollectionThreePage from './pages/CollectionThreePage';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Home Page Route */}
        <Route path="/" element={<HomePage />} />
        
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
  );
};

export default App;
