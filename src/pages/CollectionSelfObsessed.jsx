import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { selfObsessedCollectionData } from '../utils/data';
import './CollectionSelfObsessed.css';

const CollectionSelfObsessed = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Self-Obsessed Collection</h1>
          <p>Unapologetically you. Celebrate yourself with our Self-Obsessed collection that's all about self-love and confidence.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Self-Obsessed Collection Products">
          {selfObsessedCollectionData.map((product) => (
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

export default CollectionSelfObsessed;