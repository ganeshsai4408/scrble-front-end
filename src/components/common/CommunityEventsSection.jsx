import React from 'react';
import './CommunityEventsSection.css';
import { communityEventsData } from '../../utils/data'; 

// Note: Ensure your utility data.js has placeholders for four items 
// matching the grid structure (image, text, text, image).

const CommunityEventsSection = () => {
  return (
    <section className="community-events-section" aria-labelledby="events-title">
      <h2 id="events-title" className="section-title">Community Events</h2>
      <div className="events-grid">
        {/* Item 1: Large Image Block */}
        <div className="event-item event-item-1">
          <img src={communityEventsData[0].image} alt={communityEventsData[0].alt} />
        </div>
        
        {/* Item 2: Light Purple Text Block */}
        <div className="event-item event-item-2 text-block purple-bg">
          <p className="event-quote">{communityEventsData[1].quote}</p>
        </div>
        
        {/* Item 3: Light Pink Text Block */}
        <div className="event-item event-item-3 text-block pink-bg">
          <p className="event-quote">{communityEventsData[2].quote}</p>
        </div>
        
        {/* Item 4: Bottom Right Image Block */}
        <div className="event-item event-item-4">
          <img src={communityEventsData[3].image} alt={communityEventsData[3].alt} />
        </div>
      </div>
    </section>
  );
};

export default CommunityEventsSection;