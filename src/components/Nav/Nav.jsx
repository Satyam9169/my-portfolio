import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='navcontainer'>
        <div className='logo'><p>my Portfilio</p></div>
        <div className='nav-menu'>
          <ul className='nav-item'>
            <li><Link>Home</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>Skills</Link></li>
            <li><Link>Experience</Link></li>
            <li><Link>Qualification</Link></li>
            <li><Link>Project</Link></li>
            <li><Link>Contact us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav