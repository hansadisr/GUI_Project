import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <h3>Your Website Name</h3>
        <p>Providing the best camping and hiking experiences.</p>
        <ul className="socials">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website Name | Designed by You</p>
      </div>
    </footer>

      
    </div>
  )
}
