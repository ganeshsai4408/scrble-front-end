import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';
import logoImg from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const { toggleDrawer, totalItems } = useCart();
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const location = useLocation();

  const handleCartClick = (e) => {
    e.preventDefault();
    toggleDrawer();
  };

  const toggleCollectionsDropdown = () => {
    setIsCollectionsOpen(!isCollectionsOpen);
  };

  // Helper function to check if a path is active
  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="header" role="banner">
        {/* Logo: Assuming a heart icon/image */}
        <Link to="/" className="logo-link" aria-label="Home">
          <img 
            src={logoImg} 
            alt="Scrble Logo - Pink Heart" 
            className="logo-img" 
          />
        </Link>

        {/* Primary Navigation */}
        <nav className="nav" aria-label="Primary">
          <ul>
            <li><Link to="/" className={isActivePath('/') ? 'active' : ''}>Home</Link></li>
            <li><a href="/shop" className={isActivePath('/shop') ? 'active' : ''}>Shop all</a></li>
            <li className="collections-dropdown">
              <button 
                className={`dropdown-trigger ${isActivePath('/collections') ? 'active' : ''}`}
                onClick={toggleCollectionsDropdown}
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                Collections <FaChevronDown className={`dropdown-icon ${isCollectionsOpen ? 'rotated' : ''}`} />
              </button>
              <div 
                className={`dropdown-menu ${isCollectionsOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <Link to="/collections/one" className="dropdown-item">Tote bags</Link>
                <Link to="/collections/two" className="dropdown-item">Clothing</Link>
                <Link to="/collections/three" className="dropdown-item">Tumbler</Link>
              </div>
            </li>
            <li><Link to="/about" className={isActivePath('/about') ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={isActivePath('/contact') ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>

        {/* Icon Group */}
        <div className="icon-group">
          <a href="/search" aria-label="Search" className="icon-link"><FiSearch /></a>
          <button 
            onClick={handleCartClick} 
            aria-label={`Cart with ${totalItems} items`} 
            className="icon-link cart-button"
          >
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
          <Link to="/login" aria-label="Profile" className="icon-link"><FiUser /></Link>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Header;