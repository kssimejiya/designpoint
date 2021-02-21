import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { SiHomeassistant } from 'react-icons/si';
import logo from '../images/LOGO.png'




function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false)
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='nav-logo'>
            <Link to='/' className='navbar-logo'>
              Design Point < SiHomeassistant className='SiHomeassistant' />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes className='FaTimes' /> : <FaBars className='FaBars' />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <NavLink to='/contactUs' className='nav-link' onClick={closeMobileMenu} activeClassName="navbar__link--active">
                ContactUs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar
