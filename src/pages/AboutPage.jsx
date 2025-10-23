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
  const firstStoryText = "Scrble isn't just a brand — it's a story. It's for the girl who felt out of place in school, the one who was judged for how she looked. For the girl who was called \"too much\" because she felt deeply, laughed loudly, and dreamed boldly. For the girl who learned to see her beauty through someone else's eyes before realizing she could define it herself. For the girl who tried to fit in when she was born to stand out. Scrble was born for her — the girl rewriting her own story.";
  const secondStoryText = "Every tote, tee, and tumbler we create is a quiet reminder that you are the main character in your movie. You don't need validation to be beautiful, or permission to be confident. Your flaws, quirks, and chaos are what make you unforgettable. So when you wear our tees, carry our totes, or sip from our tumblers — remember: you're not just holding a product. You're holding a statement — that you are bold, beautiful, and entirely your own. Scrble — for the girl still writing her story, her way.";
  const missionText = "At Scrble, our mission is to grow as a brand of self-expression and relatability — a space where real girls feel seen, confident, and connected. We aim to build a community-driven brand that goes beyond products — one that brings people together through events, conversations, and shared stories. From our totes to our tees and tumblers, every piece is a reminder to embrace who you are, express yourself freely, and celebrate your individuality.";
  const founderQuote = "Hey, I'm Pravallika. \"Founder\" is a big word, but I'm proud to say it. I started Scrble at 20, fulfilling a dream I'd had since I was 18. Designing and creating inspires me — it's my way of expressing myself, putting my thoughts and energy into something tangible. Scrble is a reminder for me (and for every girl) that we are capable of anything we set our minds to. Our products — totes, tees, and tumblers are Pinterest-coded cute, bold, and made to slay in your daily life. This is more than a brand; it's a community. So grab your favorite piece, express yourself, and stay hot.";

  return (
    <>
      <Header />
      <main className="about-page-main" role="main">
        <section className="about-section" aria-labelledby="our-story-title">
          <h2 id="our-story-title" className="section-title">Our story</h2>
          
          {/* Story Block 1: Text Left, Image Right */}
          <div className="content-block">
            <div className="text-content">
              <p>{firstStoryText}</p>
            </div>
            <div className="image-content">
              <img src={story1Img} alt="Two women holding tote bags" />
            </div>
          </div>
          
          {/* Story Block 2: Image Left, Text Right (Reversed) */}
          <div className="content-block reverse">
            <div className="text-content">
              <p>{secondStoryText}</p>
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
              <p>{missionText}</p>
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