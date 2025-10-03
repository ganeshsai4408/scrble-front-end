import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import QuantityButton from '../components/common/QuantityButton';
import { topPicksData } from '../utils/data';
import { FaHeart, FaTruck, FaLock, FaSync } from 'react-icons/fa';
import './ProductDetailPage.css';

// --- Dynamic Data Fetching Function ---
const fetchProductDetails = (id) => {
  // Find the product from topPicksData based on ID
  const foundProduct = topPicksData.find(product => product.id === parseInt(id));
  
  if (!foundProduct) {
    return null; // Product not found
  }

  // Convert the basic product data to detailed product format
  const product = {
    id: foundProduct.id,
    name: foundProduct.name,
    collection: "Main Character collection",
    currentPrice: parseFloat(foundProduct.price.replace('$', '')),
    originalPrice: parseFloat(foundProduct.price.replace('$', '')) + 5, // Add $5 as original price
    rating: 4.5,
    sizes: [8, 10, 12, 14, 16, 18, 20],
    image: foundProduct.image,
    tagline: foundProduct.tagline,
    description: [
      "1. High-quality materials and craftsmanship.",
      "2. Perfect for everyday wear and special occasions.",
      "3. If you have a custom request, please contact us at scrble@gmail.com or connect us at whatsapp.",
      "4. Machine washable and long-lasting design."
    ],
    youMayLike: topPicksData.filter(product => product.id !== foundProduct.id) // Show other products except current one
  };
  return product;
};

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the ID from the URL (not used here, but good practice)
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(10);
  const [quantity, setQuantity] = useState(1);

  // Load dynamic product data on mount
  useEffect(() => {
    const productData = fetchProductDetails(productId);
    setProduct(productData);
  }, [productId]);

  if (!product) {
    return (
      <>
        <Header />
        <main className="product-page-main" style={{ textAlign: 'center', padding: '5rem' }}>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <a href="/" style={{ color: '#6a4c93', textDecoration: 'underline' }}>Go back to Home</a>
        </main>
        <Footer />
      </>
    );
  }

  // Helper functions for quantity buttons
  const incrementQuantity = () => setQuantity(prev => prev < 10 ? prev + 1 : prev);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : prev);
  
  // Placeholder for cart logic
  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of Size ${selectedSize} ${product.name} to cart.`);
  };

  return (
    <>
      <Header />
      <main className="product-page-main" role="main">
        <div className="product-detail-layout">
          
          {/* LEFT COLUMN: Image Display */}
          <section className="product-image-display">
            <img src={product.image} alt={product.name} />
          </section>

          {/* RIGHT COLUMN: Info and Actions */}
          <section className="product-info-form">
            <p className="collection-name">{product.collection}</p>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-tagline">{product.tagline}</p>
            
            <div className="price-rating-row">
              <div className="price-group">
                <span className="current-price">${product.currentPrice.toFixed(2)}</span>
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              </div>
              <div className="rating">
                <span className="rating-star">★</span>
                <span className="rating-value">{product.rating}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="size-selection-group">
              <span className="size-label">Size: <span className="selected-size-value">{selectedSize}</span></span>
              <a href="#" className="view-size-chart">View Size Chart</a>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-group">
              <span className="quantity-label">Quantity</span>
              <QuantityButton 
                quantity={quantity}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
                min={1}
                max={10}
              />
            </div>

            {/* Action Buttons */}
            <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button className="buy-now-btn">BUY NOW</button>
            
            {/* Service Policy */}
            <div className="service-policy-group">
              <h4>Service policy</h4>
              <ul className="service-list">
                <li><FaTruck /> Cash on delivery is available in all location</li>
                <li><FaLock /> Cash on delivery is available in all location</li>
                <li><FaSync /> Cash on delivery is available in all location</li>
              </ul>
            </div>

            {/* Product Description */}
            <div className="product-description-group">
              <h4>Product Description</h4>
              <ul className="description-list">
                {product.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        
        {/* You May Like Section (Reuses TopPicksSection structure) */}
        <section className="you-may-like-section">
          <h2 className="you-may-like-title">You may like</h2>
          <div className="product-list-suggestions">
            {product.youMayLike.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;