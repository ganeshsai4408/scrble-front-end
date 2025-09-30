import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { topPicksData } from '../utils/data'; // Importing dummy data
import './CollectionTwoPage.css';

// Duplicate the dummy data to simulate a large product listing
const collectionData = [
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData, 
  ...topPicksData
]; 

const CollectionTwoPage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area matching the home page pattern */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Collection Two</h1>
          <p>Embrace your unique style with our curated selection of standout pieces.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="Products in Collection Two">
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

export default CollectionTwoPage;