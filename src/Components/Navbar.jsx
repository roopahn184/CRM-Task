import React from 'react';
import logo from '../images/logo1-.png';
import '../Components/Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react';
import {FaAngleDown} from 'react-icons/fa';


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <nav ref={navRef} className='main-menu'>
       <div>
      <img src={logo} alt=""  height="150px" width="150px"/>
      </div>
     <div className='nav-elements'>
     <a href="/#">Pricing <span> <FaAngleDown /></span></a>
      <a href="/#">Resources</a>
      <a href="/#">Supports</a>
      <a href="/#">Partners</a>
      </div>
        <div>
      <button className='login-btn'>Login</button>
      <button className='signup-btn'>SignUp</button>
      </div>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}> <FaTimes/></button>
    
      </nav>
    
      <button className='nav-btn' onClick={showNavbar}> <FaBars /></button>
      </header>
  )
}

export default Navbar