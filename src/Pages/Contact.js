import React, { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  const [focused, setFocused] = useState('');

  return (
    <div className="contact-page">
      <div className="contact-top">
        <div className="top-content">
          <h1 style={{
                textAlign: "center",
                paddingBottom: "10px",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "60px",
              }} className="top-title">Let's Connect</h1>
          <p className="top-subtitle">Experience nature's luxury</p>
          <div className="quick-contact">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h3 style={{
                textAlign: "center",
                paddingBottom: "10px",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "21px",
              }}>Call Us</h3>
              <a href="tel:+94 74 108 1008">+94 74 108 1008</a>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <h3 style={{
                textAlign: "center",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "21px",
              }}>Visit Us</h3>
              <p>Jungle Odyssey Ceylon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <div className="booking-info">
          <h2 style={{
                textAlign: "center",
                paddingBottom: "10px",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "40px",
              }}>Ready to Book?</h2>
          <button className="instant-book">
            Book Online Instantly
            <span className="btn-shine"></span>
          </button>
          <div className="feature-cards">
            <div className="feature">
              
              <p>Eco-friendly Accommodation</p>
            </div>
            <br></br>
            <div className="feature">
               <p>Unique Camping Experience</p>
            </div>
            <br></br>
            <div className="feature">
              
              <p>Scenic Views</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h2 style={{
                textAlign: "center",
                paddingBottom: "10px",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "40px",
              }}>Personalise Your Stay</h2>
            <p>Tell us about your perfect getaway</p>
          </div>

          <form className="modern-form">
            <div className="form-grid">
              <div className={`input-container ${focused === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  id="name"
                  required
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="name">Full Name</label>
                <div className="input-border"></div>
              </div>

              <div className={`input-container ${focused === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  required
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="email">Email Address</label>
                <div className="input-border"></div>
              </div>

              <div className={`input-container ${focused === 'phone' ? 'focused' : ''}`}>
                <input
                  type="tel"
                  id="phone"
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="phone">Phone Number</label>
                <div className="input-border"></div>
              </div>

              <div className={`input-container ${focused === 'accommodation' ? 'focused' : ''}`}>
                <select
                  id="accommodation"
                  onFocus={() => setFocused('accommodation')}
                  onBlur={() => setFocused('')}
                >
                  <option value="">Select type...</option>
                  <option value="Camp Site">Camp Site</option>
                  <option value="Cabin">Cabin</option>
                  <option value="Tree House">Tree House</option>
                  <option value="Caravan">Caravan</option>
                </select>
                <label htmlFor="accommodation">Accommodation</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className="date-container">
              <div className={`input-container ${focused === 'checkin' ? 'focused' : ''}`}>
                <input
                  type="date"
                  id="checkin"
                  onFocus={() => setFocused('checkin')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="checkin">Check In</label>
                <div className="input-border"></div>
              </div>

              <div className={`input-container ${focused === 'checkout' ? 'focused' : ''}`}>
                <input
                  type="date"
                  id="checkout"
                  onFocus={() => setFocused('checkout')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="checkout">Check Out</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className={`input-container message-container ${focused === 'message' ? 'focused' : ''}`}>
              <textarea
                id="message"
                rows="4"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
              ></textarea>
              <label htmlFor="message">Special Requests</label>
              <div className="input-border"></div>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-shine"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}