import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='navcontainer'>
        <div className='logo'><p>My Portfilio</p></div>
        <div className='nav-menu'>
          <ul className='nav-item'>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/" className='nav-link'>About us</Link></li>
            <li><Link to="/" className='nav-link'>Skills</Link></li>
            <li><Link to="/" className='nav-link'>Experience</Link></li>
            <li><Link to="/" className='nav-link'>Qualification</Link></li>
            <li><Link to="/" className='nav-link'>Project</Link></li>
            <li><Link to="/" className='nav-link'>Contact us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav