import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { topPicksData } from '../utils/data'; // Importing dummy data
import './CollectionThreePage.css';

// Duplicate the dummy data to simulate a large product listing
const collectionData = [
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData
]; 

const CollectionThreePage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Collection Three</h1>
          <p>Step into the spotlight with our trending picks that make you shine.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Products in Collection Three">
          {collectionData.map((product, index) => (
            // Use a unique key by combining product ID and index
            <ProductCard 
              key={`${product.id}-${index}`} 
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