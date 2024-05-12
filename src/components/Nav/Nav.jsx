import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
      <nav className='navcontainer'>
        <div className='logo'><p>&lt;My Portfilio&#47;&gt;</p></div>
        <div className='nav-menu'>
          <ul className='nav-item'>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/" className='nav-link'>About us</Link></li>
            <li><Link to="/" className='nav-link'>Skills</Link></li>
            <li><Link to="/" className='nav-link'>Experience</Link></li>
            <li><Link to="/" className='nav-link'>Qualification</Link></li>
            <li><Link to="/" className='nav-link'>Project</Link></li>
            <li><Link to="/" className='nav-link'>Contact us</Link></li>
            <li><i className="fa-solid fa-bars" width={20} height={20}></i></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav