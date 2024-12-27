import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import logo from '../Images/LOGO.png'

export default function Navbar() {
  return (
    
      
<nav className="navbar">
    <div className="navbar-logo">
    <img src={logo} alt="Logo" />

    </div>
    <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Stay">Stay</Link></li>
        <li><Link to="/Activities">Do</Link></li>
        <li><Link to="/Book">Book</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </ul>
</nav> 


      
    
  )
}
