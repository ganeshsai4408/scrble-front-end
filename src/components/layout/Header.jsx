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
  const [isThemedCollectionsOpen, setIsThemedCollectionsOpen] = useState(false);
  const location = useLocation();

  const handleCartClick = (e) => {
    e.preventDefault();
    toggleDrawer();
  };

  const toggleCollectionsDropdown = () => {
    setIsCollectionsOpen(!isCollectionsOpen);
  };

  const toggleThemedCollectionsDropdown = () => {
    setIsThemedCollectionsOpen(!isThemedCollectionsOpen);
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
            <li><Link to="/shop" className={isActivePath('/shop') ? 'active' : ''}>Shop all</Link></li>
            <li className="collections-dropdown">
              <button 
                className={`dropdown-trigger ${isActivePath('/categories') ? 'active' : ''}`}
                onClick={toggleCollectionsDropdown}
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                Categories <FaChevronDown className={`dropdown-icon ${isCollectionsOpen ? 'rotated' : ''}`} />
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
            <li className="collections-dropdown">
              <button 
                className={`dropdown-trigger ${isActivePath('/collections') ? 'active' : ''}`}
                onClick={toggleThemedCollectionsDropdown}
                onMouseEnter={() => setIsThemedCollectionsOpen(true)}
                onMouseLeave={() => setIsThemedCollectionsOpen(false)}
              >
                Collections <FaChevronDown className={`dropdown-icon ${isThemedCollectionsOpen ? 'rotated' : ''}`} />
              </button>
              <div 
                className={`dropdown-menu ${isThemedCollectionsOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsThemedCollectionsOpen(true)}
                onMouseLeave={() => setIsThemedCollectionsOpen(false)}
              >
                <Link to="/collections/main-character" className="dropdown-item">Main Character</Link>
                <Link to="/collections/that-girl" className="dropdown-item">That Girl</Link>
                <Link to="/collections/self-obsessed" className="dropdown-item">Self-Obsessed</Link>
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