import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import QuantityButton from '../components/common/QuantityButton';
import { useCart } from '../context/CartContext';
import { topPicksData, toteBagsData, teesData, tumblersData, shopAllData } from '../utils/data';
import { FaHeart, FaTruck, FaLock, FaSync } from 'react-icons/fa';
import './ProductDetailPage.css';

// --- Dynamic Data Fetching Function ---
const fetchProductDetails = (id) => {
  // Combine all product data arrays
  const allProducts = [
    ...topPicksData,
    ...toteBagsData,
    teesData,
    ...tumblersData,
    ...shopAllData
  ];
  
  // Find the product from all data based on ID
  const foundProduct = allProducts.find(product => product.id === parseInt(id));
  
  if (!foundProduct) {
    return null; // Product not found
  }

  // Determine collection name based on category
  let collectionName = "Scrble Collection";
  if (foundProduct.category === "tote-bags") {
    collectionName = "Tote Bags Collection";
  } else if (foundProduct.category === "tees") {
    collectionName = "Clothing Collection";
  } else if (foundProduct.category === "tumblers") {
    collectionName = "Tumblers Collection";
  } else if (foundProduct.category === "featured") {
    collectionName = "Featured Products";
  }

  // Dynamic product description based on product type
  let productDescription = [];
  
  if (foundProduct.category === "tote-bags") {
    productDescription = [
      "100% Cotton Canvas — durable and eco-friendly.",
      "Zipper Closure — keeps your essentials secure.",
      "Spacious & Sturdy — perfect for daily use.",
      "Custom Printed Design — made to match your vibe."
    ];
  } else if (foundProduct.category === "tumblers") {
    productDescription = [
      "304 Stainless Steel — durable and rust-free.",
      "Double-Wall Insulation — keeps drinks hot or cold for hours.",
      "20 oz Capacity — includes splash-proof lid and metal straw.",
      "High-Quality Print — fade-proof Scrble design made to last."
    ];
  } else if (foundProduct.category === "tees") {
    // Check if it's the Certified Yapper Sweatshirt
    if (foundProduct.id === 201) {
      productDescription = [
        "400 GSM Fabric — thick, soft, and premium quality.",
        "Unisex Oversized Fit — relaxed and comfy for all.",
        "Pre-Shrunk & Bio-Washed — stays perfect after every wash.",
        "High-Quality Print — long-lasting Scrble design."
      ];
    } else {
      // For all other clothing items
      productDescription = [
        "100% Cotton (180 GSM) — soft, breathable, and premium quality.",
        "Perfect Fit — cropped length with double-stitched seams for durability.",
        "Vibrant Print Quality — high-definition DTF/DTG printing that lasts.",
        "Pre-Shrunk & Bio-Washed — stays smooth and true to size after wash."
      ];
    }
  } else {
    // Default description
    productDescription = [
      "1. High-quality materials and craftsmanship.",
      "2. Perfect for everyday use and special occasions.",
      "3. If you have a custom request, please contact us at scrble@gmail.com or connect us at whatsapp.",
      "4. Durable design built to last."
    ];
  }

  // Convert the basic product data to detailed product format
  const product = {
    id: foundProduct.id,
    name: foundProduct.name,
    collection: collectionName,
    currentPrice: parseFloat(foundProduct.price.replace('₹', '').replace('$', '')),
    originalPrice: parseFloat(foundProduct.price.replace('₹', '').replace('$', '')) + 5, // Add 5 as original price
    rating: 4.5,
    sizes: foundProduct.category === "tumblers" ? ["12oz", "16oz", "20oz", "24oz"] : ["S", "M", "L", "XL", "XXL"],
    image: foundProduct.image,
    tagline: foundProduct.tagline,
    description: productDescription,
    youMayLike: allProducts.filter(product => product.id !== foundProduct.id).slice(0, 3) // Show 3 other products
  };
  return product;
};

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the ID from the URL (not used here, but good practice)
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
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
  
  // Add to cart logic
  const handleAddToCart = () => {
    addToCart(product.id, selectedSize.toString(), quantity);
    console.log(`Added ${quantity} of Size ${selectedSize} ${product.name} to cart.`);
  };

  // Buy now logic - navigate to login page
  const handleBuyNow = () => {
    navigate('/login');
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
                <span className="current-price">₹{product.currentPrice.toFixed(2)}</span>
                <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
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
            <button className="buy-now-btn" onClick={handleBuyNow}>BUY NOW</button>
            
            {/* Service Policy */}
            <div className="service-policy-group">
              <h4>Service policy</h4>
              <ul className="service-list">
                <li><FaTruck /> Cash on delivery is available</li>
                <li><FaLock /> Nationwide Shipping — We deliver all over India</li>
                <li><FaSync /> Additional Delivery Charge:₹79</li>
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