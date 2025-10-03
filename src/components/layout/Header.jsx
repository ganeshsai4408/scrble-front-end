import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
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
        <a href="/cart" aria-label="Cart" className="icon-link"><FiShoppingCart /></a>
        <a href="/profile" aria-label="Profile" className="icon-link"><FiUser /></a>
      </div>
    </header>
  );
};

export default Header;