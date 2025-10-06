import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'; // Import the thin Plus icon
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevent card navigation when clicking add to cart
    addToCart(product.id, 'M', 1); // Add with default size M and quantity 1
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <article className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="image-container">
        {/* Placeholder for the light purple background behind the image */}
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {/* New Tagline element */}
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-price">{product.price}</p>
      </div>
      
      {/* Updated Add-to-Cart Button */}
      <button 
        className="add-to-cart-btn" 
        aria-label={`Add ${product.name} to cart`}
        onClick={handleAddToCartClick}
      >
        <FiPlus className="plus-icon" />
      </button>
    </article>
  );
};

export default ProductCard;