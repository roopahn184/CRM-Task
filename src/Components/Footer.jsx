import React from 'react';
import './Footer.css';
import logo from '../images/logo1-.png';


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-grid-1'>
            <img src={logo} alt="" height="100px" width="100px"/>
            <p>Discover the full scope of our services <br />
                and see how we can help you
            </p>
        </div>
        <div className='footer-grid-2'>
            <p>Products</p>
            <p>Communication</p>
            <p>Remote Access</p>
            <p>View All Products</p>
        </div>
        <div className='footer-grid-2'>
            <p>Company</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Newsroom</p>
            <p>Contact Us</p>
        </div>
        <div className='footer-grid-2'>
            <p>Features</p>
            <p>Autofill</p>
            <p>Password Vault</p>
            <p>Digital Wallet</p>
            <p>Password Manager</p>
            <p>Dark Monitoring</p>
            <p>Authentication</p>
        </div>
        <div className='footer-grid-2'>
            <p>Resources</p>
            <p>My Account</p>
            <p>Support</p>
            <p>Blog</p>
            <p>Partners</p>
            <p>Community</p>
            <p>Privacy Plicy</p>

        </div>
    </div>
  )
}

export default Footer