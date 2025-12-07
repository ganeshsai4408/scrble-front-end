import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { teesData } from '../utils/data'; // Import tees data
import './CollectionTwoPage.css';

const CollectionTwoPage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Clothing</h1>
          <p>Express yourself with our comfortable and stylish tee collection that speaks your language.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Clothing Collection">
          {teesData.map((product) => (
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

export default CollectionTwoPage;