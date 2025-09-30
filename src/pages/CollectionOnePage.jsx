import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { topPicksData } from '../utils/data'; // Importing dummy data
import './CollectionOnePage.css';

// Duplicate the dummy data to simulate a large product listing
const collectionData = [
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData
]; 

const CollectionOnePage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Collection One</h1>
          <p>Discover the latest trendsetting products that define your aesthetic.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Products in Collection One">
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

export default CollectionOnePage;