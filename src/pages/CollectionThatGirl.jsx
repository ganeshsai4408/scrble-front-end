import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { thatGirlCollectionData } from '../utils/data';
import './CollectionThatGirl.css';

const CollectionThatGirl = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">That Girl Collection</h1>
          <p>Channel your inner "that girl" energy with our exclusive collection that celebrates confidence and style.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="That Girl Collection Products">
          {thatGirlCollectionData.map((product) => (
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

export default CollectionThatGirl;