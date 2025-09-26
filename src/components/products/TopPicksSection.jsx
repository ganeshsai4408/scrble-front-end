import React from 'react';
import ProductCard from './ProductCard';
import { topPicksData } from '../../utils/data';
import './TopPicksSection.css';

const TopPicksSection = () => {
  return (
    <section className="top-picks-section">
      <h2 className="section-title">Top picks</h2>
      <div className="product-list">
        {topPicksData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TopPicksSection;