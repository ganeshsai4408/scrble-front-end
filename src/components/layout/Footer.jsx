import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from 'react-icons/fa';
import './Footer_new.css';
import logoImg from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section: Join our community - UPDATED STRUCTURE */}
      <div className="footer-community-join">
        <div className="join-content">
          <h3>Join our community</h3>
          <p className="join-marketing-text">
            “Step into the spotlight—this collection is made for the ones who own their story.”
            “Step into the spotlight—this collection is made for the ones who own their story”
          </p>
        </div>
        <div className="subscribe-form-container">
          <p className="stay-up-to-date-text">Stay up to date</p>
          <div className="subscribe-form">
            {/* Input with the light pink background matching the design */}
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email address for subscription" 
              className="subscribe-input"
            />
            {/* Subscribe button with light purple/pink background matching the design */}
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links and Copyright - LOGO UPDATED */}
      <div className="footer-links-section">
        <div className="footer-column logo-column">
          <div className="footer-logo">
            {/* 🛑 Replaced FaHeart with the logo image */}
            <img 
              src={logoImg} 
              alt="Scrble Logo" 
              className="footer-logo-img" 
            />
          </div>
          <p className="footer-tagline">“This big marketing text should bring people to join the community and subscribe for cool updates.”</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
          </div>
          <p className="copyright-text">© 2024 Scrble. All Rights Reserved.</p>
        </div>

        <div className="footer-column quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop All</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-column support">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/support/shipping">Shipping Details</a></li>
            <li><a href="/support/returns">Returns & Exchanges</a></li>
            <li><a href="/support/sizing">Sizing Guide</a></li>
            <li><a href="/support/privacy">Privacy Policy</a></li>
            <li><a href="/support/terms">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
