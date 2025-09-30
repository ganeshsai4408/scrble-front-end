import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🛑 NEW: Import useNavigate
import './CollectionsSection.css';

const CollectionsSection = () => {
  const navigate = useNavigate(); // 🛑 Initialize navigate hook
  
  // Function to handle navigation to Collection One
  const handleExploreCollectionOne = () => {
    navigate('/collections/one');
    // Additional scroll to top (backup method)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to handle navigation to Collection Two
  const handleExploreCollectionTwo = () => {
    navigate('/collections/two');
    // Additional scroll to top (backup method)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to handle navigation to Collection Three
  const handleExploreCollectionThree = () => {
    navigate('/collections/three');
    // Additional scroll to top (backup method)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="collections-section">
      <h2 className="section-title">Collections</h2>
      <div className="collections-grid">
        
        {/* Collection Card 1 */}
        <article className="collection-card">
          <div className="card-content">
            <h3>Collection One</h3>
            <p>Our favorite picks to make you the star of the show.</p>
            {/* Updated button with Collection One navigation */}
            <button onClick={handleExploreCollectionOne}>Explore</button>
          </div>
        </article>
        
        {/* Collection Card 2 (Text Only) */}
        <article className="collection-card-text">
          <h3>Collection Two</h3>
          {/* Updated button with Collection Two navigation */}
          <button onClick={handleExploreCollectionTwo}>Explore</button>
        </article>
        
        {/* Collection Card 3 */}
        <article className="collection-card">
          <div className="card-content">
            <h3>Collection Three</h3>
            <p>Step into the spotlight with our trending picks that make you shine.</p>
            {/* Updated button with Collection Three navigation */}
            <button onClick={handleExploreCollectionThree}>Explore</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CollectionsSection;
