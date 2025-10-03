import React from 'react';
import './QuantityButton.css';

const QuantityButton = ({ quantity, onIncrement, onDecrement, min = 1, max = 10 }) => {
  return (
    <div className="quantity-button-container">
      <button 
        className="quantity-btn decrement" 
        onClick={onDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="quantity-display">{quantity}</span>
      <button 
        className="quantity-btn increment" 
        onClick={onIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;