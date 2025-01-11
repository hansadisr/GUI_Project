import React from 'react'
import "./Contact.css"
import map from "../Images/map.jpeg"

export default function Contact() {
  return (
    <div >
        <section className="c_top-img">
        <div className="c_first_text">
          
            CONTACT US
          
        </div>
        </section>

        {/* Left Section */}
      <div className='contact-container'> 
      <div className="left-section">
        <h2>CONTACT US</h2>
        <button className="instant-book-button">BOOK ONLINE INSTANTLY</button>
        <p className="description">
          Book ahead and be one of the first to experience our new Black
          Cockatoo cabins and Koala Eco tents.
        </p>
        <p className="booking-note">Taking Bookings Now.</p>
        <p className="contact-info">📞 (02) 6494 4773</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3>Contact Us To Personalise Your Stay</h3>
        <form  className="booking-form">
          <label>
            Name*:
            <input type="text" required className="form-input" />
          </label>

          <label>
            Email*:
            <input type="email" required className="form-input" />
          </label>

          <div className="form-group">
            <label>
              Check In:
              <input type="date" className="form-input" />
            </label>
            <label>
              Check Out:
              <input type="date" className="form-input" />
            </label>
          </div>

          <label>
            Phone:
            <input type="tel" className="form-input" />
          </label>

          <label>
            Accommodation Type:
            <select className="form-input">
              <option>Camp Site</option>
              <option>Cabin</option>
              <option>Tree House</option>
              <option>Caravan</option>
            </select>
          </label>

          <label>
            Message:
            <textarea rows="4" className="form-input"></textarea>
          </label>

          

          <button type="submit" className="submit-button">
            SEND
          </button>
        </form>
      </div>
      </div> 

    </div>    
  )
}
