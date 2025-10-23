import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import HeroBgUrl from '../../assets/images/hero-bg.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop');
  };

  return (
    <section 
      className="hero" 
      role="region" 
      aria-label="Hero Banner"
      style={{ 
        backgroundImage: `url(${HeroBgUrl})` // Apply the URL here
      }}
    >
      <div className="hero-content">
        <h1>Where Ambition Meets Aesthetic.</h1>
        <button className="hero-btn" onClick={handleShopNowClick}>Shop now</button>
      </div>
    </section>
  );
};

export default Hero;