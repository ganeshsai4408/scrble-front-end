import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { tumblersData } from '../utils/data'; // Import tumblers data
import './CollectionThreePage.css';

const CollectionThreePage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Tumblers</h1>
          <p>Stay hydrated in style with our premium tumbler collection designed for your active lifestyle.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Tumblers Collection">
          {tumblersData.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CollectionThreePage;