import React from 'react';
import './subscriptionpage.css';
import {FaCheck} from 'react-icons/fa';
import {BsArrowUpRight} from 'react-icons/bs';
export const SubscriptionPage = () => {
  return (
    <div>
        <div className="container">
                <div className='sub-one'>
               
                    <p className='for-inner'>For individuals</p>
                    <h3 className='h3-tag'>Individual Starter Pack</h3>
                    <p className='sub-tag'>Password management for one type of device that is easy to <br /> use and is reliable, secure, and easy to use.</p>
                    <p><span Style="font-size:25px; font-weight:600">$12</span>/month</p>
                    <button className='get-btn'>Get Started <span> <BsArrowUpRight /> </span></button>
                </div>
                <div className='sub-two'>
                    <h3 className='h3-tag'>What's included</h3>
                    <div className='card-top'>
                           
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> Unlimited Passwords</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>1 User Account</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck/></span>Access on 1 Device Type</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> Save and Autofill Passwords</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> One-to-One Sharing</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Password Generator</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck/></span>Security Dashboard</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck/></span>Dark Web Monitoring</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Passwordless Login</p>
    
                    </div>
                </div>
                <div className='sub-three'>
                    
                    <p className='for-inner'>For Enterprise</p>
                    <h3 className='h3-tag'>Enterprise Starter Pack</h3>
                    <p className='sub-tag'>A full range of buisness features as well as services<br /> customized to your large buisness needs.</p>
                    <p><span Style="font-size:30px; font-weight:600">$94</span>/month</p>
                    <button className='get-btn'>Get Started <span> <BsArrowUpRight /></span></button>
                </div>
                <div className='sub-two'>
                    <h3 className='h3-tag'>What's included</h3>
                    <div className='card-top'>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> Unlimited Passwords</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>1 User Account</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck/></span>Access on 1 Device Type</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> Save and Autofill Passwords</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span> One-to-One Sharing</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Password Generator</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Security Dashboard</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Dark Web Monitoring</p>
                            <p> <span Style="color:green" className='span-tag'><FaCheck /></span>Passwordless Login</p>
                    </div>
                </div>
           
            </div>
            <div className='down-content'>
              <h4 className='h4-tag'>Get know about all products pricing</h4>
              <div className='flex-down'>
              <p className='p-down'>Our platform offers a range of subscription plans that are tailored to <br />
              your unique requirements, allowing you to find the perfect fit for you</p>
              <button className='btn-down'>See more pricing  <span> <BsArrowUpRight /> </span></button>
              </div>
            </div>
    </div>
  )
} 
export default SubscriptionPage
