import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { mainCharacterCollectionData } from '../utils/data';
import './CollectionMainCharacter.css';

const CollectionMainCharacter = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Main Character Collection</h1>
          <p>Be the main character of your own story with our curated collection designed for those who love to shine.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Main Character Collection Products">
          {mainCharacterCollectionData.map((product) => (
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

export default CollectionMainCharacter;