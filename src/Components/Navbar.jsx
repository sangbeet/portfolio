import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-bar'>
        <ul className='nav-buttons'>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500} style={{cursor:'pointer'}}><li>HOME</li></Link>
        <Link to="abt" spy={true} smooth={true} offset={150} duration={500} style={{cursor:'pointer'}}><li>ABOUT</li></Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} style={{cursor:'pointer'}}><li>PROJECTS</li></Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} style={{cursor:'pointer'}}><li>CONTACT ME</li></Link>
        </ul>
    </div>
  )
}

export default Navbar