import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We will be in touch soon.');
    // Reset form after submission
    setFormData({ firstName: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Header />
      <div className="contact-page-wrapper">
        <main className="contact-page-main" role="main">
          <div className="contact-grid-container">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="contact-info-wrapper">
              <section className="contact-info-card">
                <h2 className="info-title">Contact Information</h2>
              
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <p>+91 9963450845</p>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <p>Scrble6@gmail.com</p>
              </div>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <p>J97+239, Silver Oak Bungalows,<br/>Cherlapalli, Secunderabad,<br/>Telangana 501302</p>
              </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <section className="contact-form-section">
              <h2 className="form-title">Let's connect</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Field: First name */}
                <label htmlFor="firstName">First name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange}
                  required
                />

                {/* Field: Email */}
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                />

                {/* Field: Phone number */}
                <label htmlFor="phone">Phone number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                />

                {/* Field: Message */}
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>

                <button type="submit" className="send-btn">Send</button>
              </form>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
