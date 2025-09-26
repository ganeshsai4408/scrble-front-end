import React from 'react';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      {/* Logo: Assuming a heart icon/image */}
      <a href="/" className="logo-link" aria-label="Home">
        <img 
          src={logoImg} 
          alt="Scrble Logo - Pink Heart" 
          className="logo-img" 
        />
      </a>

      {/* Primary Navigation */}
      <nav className="nav" aria-label="Primary">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop all</a></li>
          <li className="categories-dropdown">
            <a href="/categories">
              Categories <FaChevronDown className="dropdown-icon" />
            </a>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Icon Group */}
      <div className="icon-group">
      <a href="/search" aria-label="Search" className="icon-link"><FiSearch /></a>
        <a href="/cart" aria-label="Cart" className="icon-link"><FiShoppingCart /></a>
        <a href="/profile" aria-label="Profile" className="icon-link"><FiUser /></a>
      </div>
    </header>
  );
};

export default Header;