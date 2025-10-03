import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import story1Img from '../assets/images/about/story-1.jpg';
import story2Img from '../assets/images/about/story-2.jpg';
import missionImg from '../assets/images/about/mission.jpg';
import founderImg from '../assets/images/about/founder.png';
import founderMessageBgImg from '../assets/images/about/founder-message-bg.png';
import './AboutPage.css';

const AboutPage = () => {
  const storyText = "Scrble was born from a love of cute little things that make every day brighter. From tote bags that carry your world, to tumblers that make your coffee breaks prettier, to clothes that let little girls twirl with joy — we create pieces that feel fun, stylish, and full of confidence.";
  const founderQuote = "Heyy iam pravallike so founder is big word i i started scrble Scrble was born from a love of cute little things that make every day brighter. From tote bags that carry your world, to tumblers that make your coffee breaks prettier, to clothes that let little girls twirl with joy — we create pieces that feel fun, stylish, and full of confidence.";

  return (
    <>
      <Header />
      <main className="about-page-main" role="main">
        <section className="about-section" aria-labelledby="our-story-title">
          <h2 id="our-story-title" className="section-title">Our story</h2>
          
          {/* Story Block 1: Text Left, Image Right */}
          <div className="content-block">
            <div className="text-content">
              <p>{storyText}</p>
            </div>
            <div className="image-content">
              <img src={story1Img} alt="Two women holding tote bags" />
            </div>
          </div>
          
          {/* Story Block 2: Image Left, Text Right (Reversed) */}
          <div className="content-block reverse">
            <div className="text-content">
              <p>{storyText}</p>
            </div>
            <div className="image-content">
              <img src={story2Img} alt="Woman standing outside with a white tote bag" />
            </div>
          </div>
        </section>

        <section className="about-section" aria-labelledby="mission-title">
          <h2 id="mission-title" className="section-title">Mission</h2>
          
          {/* Mission Block: Text Left, Image Right */}
          <div className="content-block">
            <div className="text-content">
              <p>{storyText}</p>
            </div>
            <div className="image-content">
              <img src={missionImg} alt="Woman walking in a park with a tote bag" />
            </div>
          </div>
        </section>
        
        {/* Founder's Note Section */}
        <section className="founder-section" aria-label="Founder's Note">
            <div className="founder-note-container">
                <div className="founder-message-content">
                    <p>{founderQuote}</p>
                </div>
                <div className="founder-image">
                    <img src={founderImg} alt="Illustration of the company founder" />
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AboutPage;