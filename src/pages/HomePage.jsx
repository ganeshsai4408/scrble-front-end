import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/common/Hero';
import TopPicksSection from '../components/products/TopPicksSection';
import CollectionsSection from '../components/common/CollectionsSection';
import CommunityEventsSection from '../components/common/CommunityEventsSection';
import Footer from '../components/layout/Footer';
import './HomePage.css';

const HomePage = () => {
  try {
    return (
      <div className="home-page">

        <Header />
        <main>
          <Hero />
          <TopPicksSection />
          <CollectionsSection />
          <CommunityEventsSection />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error in HomePage:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error Loading Page</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default HomePage;