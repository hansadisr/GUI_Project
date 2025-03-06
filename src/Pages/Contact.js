import React, { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  const [focused, setFocused] = useState('');
  /* validation form*/
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accommodation: '',
    checkin: '',
    checkout: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
  setFormData({ ...formData, [id]: value });
  console.log(`Updated ${id}:`, value); // Debug log
  console.log("Current formData:", formData); // Debug log
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};

    console.log("Validating formData:", formData); // Debug log

    // Name validation
    console.log("Name:", formData.name);
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    console.log("Email:", formData.email);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional field, but if provided, validate format)
    console.log("Phone:", formData.phone);
    if (formData.phone && !/^\+?\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (9-15 digits)";
    }

    // Accommodation validation
    console.log("Accommodation:", formData.accommodation);
    if (!formData.accommodation) {
      newErrors.accommodation = "Please select an accommodation type";
    }

    // Check-in date validation
    console.log("Check-in:", formData.checkin);
    const today = new Date().toISOString().split("T")[0];
    if (!formData.checkin) {
      newErrors.checkin = "Check-in date is required";
    } else if (formData.checkin < today) {
      newErrors.checkin = "Check-in date cannot be in the past";
    }

    // Check-out date validation
    console.log("Check-out:", formData.checkout);
    if (!formData.checkout) {
      newErrors.checkout = "Check-out date is required";
    } else if (formData.checkout <= formData.checkin) {
      newErrors.checkout = "Check-out date must be after check-in date";
    }
    // Log errors to debug
    console.log("Validation Errors:", newErrors)

    // Message is optional, so no validation required

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData); // Replace with your submission logic
      alert("Booking request sent successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        accommodation: '',
        checkin: '',
        checkout: '',
        message: ''
      }); // Reset form
      setErrors({});
    }
  };

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

          <form className="modern-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className={`input-container ${focused === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  required
                  
                  
                />
                <label htmlFor="name">Full Name</label>
                <div className="input-border"></div>
                {errors.name && <span className="error">{errors.name}</span>}

              </div>

              <div className={`input-container ${focused === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
        onChange={handleChange}
        onFocus={() => setFocused('email')}
        onBlur={() => setFocused('')}
        required
                  
                />
                <label htmlFor="email">Email Address</label>
                <div className="input-border"></div>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className={`input-container ${focused === 'phone' ? 'focused' : ''}`}>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
        onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="phone">Phone Number</label>
                <div className="input-border"></div>
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className={`input-container ${focused === 'accommodation' ? 'focused' : ''}`}>
                <select
                  id="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
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
                {errors.accommodation && <span className="error">{errors.accommodation}</span>}
              </div>
            </div>

            <div className="date-container">
              <div className={`input-container ${focused === 'checkin' ? 'focused' : ''}`}>
                <input
                  type="date"
                  id="checkin"
                  value={formData.checkin}
        onChange={handleChange}
                  onFocus={() => setFocused('checkin')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="checkin">Check In</label>
                <div className="input-border"></div>
                {errors.checkin && <span className="error">{errors.checkin}</span>}
              </div>

              <div className={`input-container ${focused === 'checkout' ? 'focused' : ''}`}>
                <input
                  type="date"
                  id="checkout"
                  value={formData.checkout}
        onChange={handleChange}
                  onFocus={() => setFocused('checkout')}
                  onBlur={() => setFocused('')}
                />
                <label htmlFor="checkout">Check Out</label>
                <div className="input-border"></div>
                {errors.checkout && <span className="error">{errors.checkout}</span>}
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
              {errors.message && <span className="error">{errors.message}</span>}
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