import React from 'react';
import './Navbar.css';
import nav_logo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className="nav-logo" src={nav_logo} alt="logo" />
      <img className="nav-profile" src={navProfile} alt={navProfile} />
    </div>
  )
}

export default Navbar
