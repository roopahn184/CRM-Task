import React from 'react';
import './feedbackpage.css';
import img2 from '../images/img2.png';
import logo1 from '../images/spotify_logo.png';
import logo2 from '../images/Microsoft-logo.png';
import logo3 from '../images/McAfree-logo.png';
import logo4 from '../images/salesforce_logo.png';
import logo5 from '../images/Hubspot-logo.png';
import logo6 from '../images/loom-logo.png';
import logo7 from '../images/Netflix-logo.png';
import logo8 from '../images/Livechat-logo.png';
import tabimg from '../images/hybp.jpg';
import {FaSpinner } from 'react-icons/fa';
import {FaArrowRightLong} from 'react-icons/fa6';

const FeedbackPage = () => {
  return (
    <div className='feedback-div'>
        <h2 className='h2-pop'>Be a part of the satisfied WebGuard users today and hear <br />
        firsthand what our customers are saying about us!</h2>
        <p className='p-pop'>Join the satisfied community WebGuard users today and discover why our customers rave about our services! Hear <br />
        firsthand what they have to say and experience the peace of mind that comes with top-notch online security</p>
        <div className='card-pop'>
            <p>This password manager is hands down the best on the 
            market. it's easy to use, affordable, and has saved me 
            from the headache of managing my passwords on
            my own</p>
            <div className='customer-pop'>
                <img src={img2} alt="" />
                <p>Hassan Momayed</p> <br />
               <p className='Ui-w'>UI/UX Designer at Kopo Creativeo</p>
            
            </div>
        </div>
        <div className='logo-flex'>
            <img src={logo1} alt="" height="50px" width="100px"  />
            <img src={logo2} alt="" height="50px" width="100px" />
            <img src={logo3} alt="" height="50px" width="100px"/>
            <img src={logo4} alt="" height="40px" width="60px" />
            <img src={logo5} alt=""  height="50px" width="100px"/>
            <img src={logo6} alt=""  height="50px" width="100px"/>
            <img src={logo7} alt="" height="50px" width="100px" />
            <img src={logo8} alt="" height="50px" width="100px" />
        </div>

        <div className='card-pop-1'>
            <div>
          <h1 className='h1-tag'>Experience a sense of calm and 
            security no matter where youare with WebGuard.
          </h1>
          <p className='p-tag'>Our platform uses advances encryption and other security measures to product your <br />
            sensitive data from online threats that you can enjoy browsing the internetwithout any worries.
          </p>
                <button className='left-button mw'>Try WebGuard Now <span><FaSpinner /></span></button>
                <button className='right-button mm'>Learn more <span><FaArrowRightLong /></span></button>
                </div>
           
              <div className='right-card-img'>
              <img src={tabimg} alt="" height="100%" width="100%" />
              </div>
        </div>
    </div>
  )
}

export default FeedbackPage