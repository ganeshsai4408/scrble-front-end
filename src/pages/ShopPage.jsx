import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { shopAllData } from '../utils/data'; // Import shop all data
import './ShopPage.css';

const ShopPage = () => {
  return (
    <>
      <Header />
      <main className="collection-page-main" role="main">
        {/* Banner area */}
        <section className="collection-banner" aria-labelledby="collection-title">
          <h1 id="collection-title">Shop All</h1>
          <p>Discover our complete collection of trending products, from tote bags to clothing and tumblers.</p>
        </section>

        {/* Product Grid */}
        <section className="collection-product-grid" aria-label="All Products">
          {shopAllData.map((product) => (
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

export default ShopPage;