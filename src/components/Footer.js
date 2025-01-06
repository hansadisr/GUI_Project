import React from 'react'
import "./Footer.css";
import logo from '../Images/LOGO.png'
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Jungle Odyssey Celon" className="footer-logo" />
          <p>+94 74 108 1008</p>
          <p>Hapugala, Galle, Sri Lanka</p>
          <p>Discover the beautiful South Coast of New South Wales.</p>
        </div>
        <div className="footer-center">
          <h3>WAKE UP IN NATURE</h3>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/Stay">STAY</Link></li>
            <li><Link to="/Activities">DO</Link></li>
            <li><Link to="/Book">BOOK</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="mailto:example@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2021 | Jungle Odyssey Celon | All Rights Reserved</p>
      </div>
    </footer>

  )
}
