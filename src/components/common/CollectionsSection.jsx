import React from 'react';
import './CollectionsSection.css';

const CollectionsSection = () => {
  return (
    <section className="collections-section">
      <h2 className="section-title">Collections</h2>
      <div className="collections-grid">
        <article className="collection-card">
          <div className="card-content">
            <h3>Main Character</h3>
            <p>Our favorite picks to make you the star of the show.</p>
            <button>Explore</button>
          </div>
        </article>
        <article className="collection-card-text">
          <h3>Main Character</h3>
          <button>Explore</button>
        </article>
        <article className="collection-card">
          <div className="card-content">
            <h3>Main Character</h3>
            <p>Step into the spotlight with our trending picks that make you shine.</p>
            <button>Explore</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CollectionsSection;