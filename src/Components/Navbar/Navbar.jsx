import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Bharath from '../../assets/Bharath.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className="logo"src={Bharath} alt=""/>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>

      </ul>
      <div className="nav-connect">
        Connect with Me
      </div>
    </div>
  )
}

export default Navbar