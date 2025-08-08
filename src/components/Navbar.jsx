import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css' // Assuming you have a CSS file for styling the Navbar

const Navbar = () => {
  return (
   <>
   <nav className="navbar">
    <div className="logo">
        <Link to="/">TripEase</Link>
    </div>
    <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li> <Link to='/destinations'>Dstinations</Link></li>
        <li> <Link to='/booking'>Booking</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li> <Link to='/contact'>Contact</Link></li>
        <li> <Link to='/login'>Login</Link></li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar
