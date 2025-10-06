import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItemCard from './CartItemCard';
import { FiX } from 'react-icons/fi';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isDrawerOpen, cartItems, totalCost, toggleDrawer } = useCart();
  const isEmpty = cartItems.length === 0;

  return (
    <>
      {/* Backdrop for click-to-close */}
      <div 
        className={`cart-backdrop ${isDrawerOpen ? 'open' : ''}`} 
        onClick={toggleDrawer} 
        aria-hidden={!isDrawerOpen}
      ></div>

      {/* Main Drawer Container */}
      <div className={`cart-drawer ${isDrawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Your Shopping Cart">
        <header className="drawer-header">
          <h2 className="drawer-title">Your Cart</h2>
          <button className="close-btn" onClick={toggleDrawer} aria-label="Close cart">
            <FiX />
          </button>
        </header>

        {isEmpty ? (
          /* Empty Cart View */
          <div className="empty-cart-view">
            <p className="empty-cart-message">Your cart's waiting for something special!!</p>
            <button onClick={toggleDrawer} className="continue-shopping-btn">Continue Shopping</button>
          </div>
        ) : (
          /* Full Cart View */
          <>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>

            <footer className="drawer-footer">
              <div className="cost-row">
                <span 
                  className="estimated-cost-label"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.1rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    color: '#49426B'
                  }}
                >
                  Estimated Cost
                </span>
                <span 
                  className="estimated-cost-value"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#6A4C93'
                  }}
                >
                  ₹{totalCost.toFixed(2)}
                </span>
              </div>
              <button className="buy-now-btn-drawer">BUY NOW</button>
            </footer>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;