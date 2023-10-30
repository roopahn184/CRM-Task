import React from 'react';
import './mainpage.css';
import {FaArrowRightLong} from 'react-icons/fa6';
import {FaSpinner} from 'react-icons/fa';

const Mainpage = () => {
  return (
   <div className='nav-mainpage'>
            <h1 className='h1-main'>Say goodbye to the stress of forgotten <br />
              passwords and the fear of data breaches</h1>
              <p className='p-tag'>Say goodbye to the stress of forgotten
              passwords and the fear of data breaches. Our password manager is designed to <br />
              keep your degital life and secure, while simplying the process of password management.</p>
              <div className='mainpage-btn'>
                <button className='left-btn'>Try WebGuard Now <span><FaSpinner /></span></button>
                <button className='right-btn'>Learn more <span><FaArrowRightLong /></span></button>
              </div>
      </div>
  )
}

export default Mainpage