import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { toteBagsData } from '../utils/data'; // Import tote bags data
import './CollectionOnePage.css';

const CollectionOnePage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Tote Bags</h1>
          <p>Carry your essentials in style with our trendy and functional tote bag collection.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Tote Bags Collection">
          {toteBagsData.map((product) => (
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

export default CollectionOnePage;