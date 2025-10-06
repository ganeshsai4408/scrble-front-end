import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';
import logoImg from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const { toggleDrawer, totalItems } = useCart();

  const handleCartClick = (e) => {
    e.preventDefault();
    toggleDrawer();
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
            <li><Link to="/">Home</Link></li>
            <li><a href="/shop">Shop all</a></li>
            <li className="categories-dropdown">
              <a href="/categories">
                Categories <FaChevronDown className="dropdown-icon" />
              </a>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/contact">Contact</a></li>
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