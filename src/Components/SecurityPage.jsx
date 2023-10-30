import React from 'react';
import './securitypage.css';
import tabimg from '../images/hybp.jpg';
import phone1 from '../images/phone1.jpeg';
import phone2 from '../images/phone.jpeg';
 
const SecurityPage = () => {
  return (
    <div className='page-outer'>
        <h1 className='h1-tag'>Experience a sense of calm and security no matter <br />
            where you are with WebGuard.
        </h1>
        <p className='p-tag'>Our platform uses advanced encryption and other security measures to protect your sensitive data from online threats. <br />
        ensuring that you can enjoy browsing the internet without any worries. Whether you're at home, at work, or on-the-go.</p>
        <div>
        <div className='toggle'>
        <h3 className='h3-taggle'>The ultimate password protection</h3>
        <img src={tabimg} alt=""  className='tab-img' height="50%" width="70%"/>
        </div>
       </div>
       <div className='flex-img'>
            <div className='phone-left'>
             <h3 className='h3-taggle'>Efficient on tablet</h3>
            <img src={phone1} alt="" height="60%" width="100%"/>
            </div>
            <div className='phone-right'>
                <h3 className='h3-taggle'>Secure your password</h3>
            <img src={phone2} alt="" height="80%" width="100%" />
            </div>
        </div>
    </div>
    
  )
}

export default SecurityPage