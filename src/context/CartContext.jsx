import React, { createContext, useContext, useState, useEffect } from 'react';
import { topPicksData } from '../utils/data';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Calculate total cost
  const totalCost = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // Calculate total items count
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  // Add item to cart
  const addToCart = (productId, size = 'M', quantity = 1) => {
    const product = topPicksData.find(p => p.id === productId);
    if (!product) return;

    const cartItemId = `${productId}-${size}`;
    const existingItem = cartItems.find(item => item.id === cartItemId);

    if (existingItem) {
      // Update quantity if item already exists
      updateQuantity(cartItemId, existingItem.quantity + quantity);
    } else {
      // Add new item to cart
      const newItem = {
        id: cartItemId,
        productId: product.id,
        name: product.name,
        tagline: product.tagline,
        price: typeof product.price === 'string' 
          ? parseFloat(product.price.replace('$', '')) 
          : product.price,
        image: product.image,
        size: size,
        quantity: quantity
      };
      setCartItems(prev => [...prev, newItem]);
    }
    
    // Automatically open the cart drawer when item is added
    setIsDrawerOpen(true);
  };

  // Update quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const value = {
    cartItems,
    totalCost,
    totalItems,
    isDrawerOpen,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    toggleDrawer
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};