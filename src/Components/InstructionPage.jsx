import React from 'react';
import './instructionpage.css';
import card1 from '../images/cardimag1.jpeg';
import card2 from '../images/cardimag2.jpeg';
import card3 from '../images/cardimg3.jpeg';
import card4 from '../images/cardimag4.jpeg'

const InstructionPage = () => {
  return (
    <div className='main-container'>
        <h2 className='h2-left'>Automate the management of all your passwords <br />
        with our auto-pilot feature</h2>
        <p className='p-left'>Welcome to our password management platform, where you can put your password management on auto-pilot.With 
            <br /> our auto-pilot feature, you can effottlessly manage of your passwords in one place.</p>
            <div className="container">
                <div className='card-one'>
                    <h3 className='h3-tag'>Log in and go</h3>
                    <p className='sub-tag'>Once you save a password in WebGuard, you'll always have it <br />
                    when you need it logging in is fast and easy.</p>
                    <img src={card1} alt="" height="80%" width="100%" />
                </div>
                <div className='card-two'>
                    <h3 className='h3-tag'>Dark web monitoring</h3>
                    <p className='sub-tag'>Stop worrying about breaches. Get alerts if your personal <br />
                        information is at risk. </p>
                        <img src={card2} alt=""  height="80%" width="100%"/>
                </div>
                <div className='card-three'>
                    <h3 className='h3-tag'>Two-factor authentication</h3>
                    <p className='sub-tag'>Easily identify websites where you can turn on two-factor <br />
                    authentication and use WebGuard as an authenticator.</p>
                    <img src={card3} alt=""  height="70%" width="100%"  />
                </div>
                <div className='card-four'>
                    <h3 className='h3-tag'>Passwordless login</h3>
                    <p className='sub-tag'>Gain instant to your WebGuard vault by using the WebGuard Authentication instead of your master password.</p>
                    <img src={card4} alt=""  height="70%" width="100%" />
                </div>
            </div>
    </div>
  )
}

export default InstructionPage