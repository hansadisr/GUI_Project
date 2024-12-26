import React from 'react'
import './Navbar.css'
import logo from'../Images/logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
      
<nav className="navbar">
    <div className="navbar-logo">MyWebsite</div>
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
