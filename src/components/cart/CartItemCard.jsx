import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './CartItemCard.css';

const CartItemCard = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  
  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () => item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : removeItem(item.id);

  return (
    <article className="cart-item-card">
      {/* Left: Image */}
      <div className="cart-item-image-container">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Right: Info and Controls */}
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-tagline">{item.tagline}</p>
        <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
        <p className="cart-item-size">Size: {item.size}</p>

        <div className="cart-item-controls">
          {/* Quantity Controls */}
          <div className="cart-quantity-control">
            <button onClick={decrement} aria-label="Decrease quantity">−</button>
            <span>{item.quantity}</span>
            <button onClick={increment} aria-label="Increase quantity">+</button>
          </div>
          
          {/* Remove Button */}
          <button 
            className="cart-remove-btn" 
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItemCard;