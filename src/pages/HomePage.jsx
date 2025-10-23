import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/common/Hero';
import TopPicksSection from '../components/products/TopPicksSection';
import CollectionsSection from '../components/common/CollectionsSection';
import CommunityEventsSection from '../components/common/CommunityEventsSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Top Picks Section */}
        <TopPicksSection />

        {/* Collections Section */}
        <CollectionsSection />

        {/* Community Events Section */}
        <CommunityEventsSection />

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;