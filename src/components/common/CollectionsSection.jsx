import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🛑 NEW: Import useNavigate
import './CollectionsSection.css';

const CollectionsSection = () => {
  const navigate = useNavigate(); // 🛑 Initialize navigate hook
  
  // Function to handle navigation to Main Character Collection
  const handleExploreCollectionOne = () => {
    navigate('/collections/main-character');
    // Additional scroll to top (backup method)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to handle navigation to That Girl Collection
  const handleExploreCollectionTwo = () => {
    navigate('/collections/that-girl');
    // Additional scroll to top (backup method)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to handle navigation to Self-Obsessed Collection
  const handleExploreCollectionThree = () => {
    navigate('/collections/self-obsessed');
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
            <h3>Main Character</h3>
            <p>You were born to be the main character</p>
            {/* Updated button with Collection One navigation */}
            <button onClick={handleExploreCollectionOne}>Explore</button>
          </div>
        </article>
        
        {/* Collection Card 2 */}
        <article className="collection-card">
          <div className="card-content">
            <h3>That girl</h3>
            <p>Too glam to give a damn — because you chose herself.*</p>
            {/* Updated button with Collection Two navigation */}
            <button onClick={handleExploreCollectionTwo}>Explore</button>
          </div>
        </article>
        
        {/* Collection Card 3 */}
        <article className="collection-card">
          <div className="card-content">
            <h3>Self-obsessed</h3>
            <p>If you're not obsessed with yourself, you're doing it wrong.</p>
            {/* Updated button with Collection Three navigation */}
            <button onClick={handleExploreCollectionThree}>Explore</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CollectionsSection;
