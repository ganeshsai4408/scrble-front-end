import React from 'react';
import './Hero.css';
import HeroBgUrl from '../../assets/images/hero-bg.png';

const Hero = () => {
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
        <button className="hero-btn">Shop now</button>
      </div>
    </section>
  );
};

export default Hero;