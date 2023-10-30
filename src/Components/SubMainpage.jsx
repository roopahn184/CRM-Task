import React from 'react';
import './mainpage.css';
import figma from '../images/figma-logo.png';
import insta from '../images/insta-logo.png';
import p from '../images/p-logo.png';
import spotify from '../images/spotify-app.png';
import w from '../images/w-1.png';
import fb from '../images/fb-app.png';
import google from '../images/google.png';
import {FaCheck} from 'react-icons/fa';
import {FaEllipsisV} from 'react-icons/fa';
import {FaLaptop} from 'react-icons/fa';
import {FaTabletAlt} from 'react-icons/fa';

const SubMainpage = () => {
  return (
       <div className="cards">
       <div className="card">
        <div className="circle-1">
          <div className="circle-2">
            <div className="circle-3">
            <img src={figma} alt="" height="30px" width="30px" className='image-1'/>
            <img src={insta} alt="" height="30px" width="30px" className='image-2'/>
            <img src={google} alt="" height="30px" width="30px" className='image-3' />
            <img src={p} alt=""  height="50px" width="50px" className='image-4'/>
            <img src={spotify} alt="" height="40px" width="30px"  className='image-5'/>
            <img src={w} alt=""  height="30px" width="30px" className='image-6'/>
             <img src={fb} alt=""  height="30px" width="30px"className='image-7' />
           
            </div>
          </div>
        </div>
        </div>
       <div className="card">
        <img src={spotify} alt="" height="30px" width="30px" />
         <p Style="font-size:12px; font-weight:600">accounts.spotify.com</p>
          <p>....... <span class="material-symbols-outlined">
            visibility
         </span> </p>
           <hr />
           <h5 Style="font-size:12px; font-weight:600">Styrong Password <span><FaCheck /></span></h5>
           <hr /> 
           <p Style="font-size:12px; font-weight:600">Your password is one of the most important lines  <br />
             of defense against online threats. it's crucial to <br />
             have a strong and secure password to keep your personal information safe.</p>
              
       </div>
       <div className="card">
       <h3 Style="font-size:12px; font-weight:600">Devices</h3>
              <p Style="font-size:12px; font-weight:600">account password connected on several devices at once.</p>
               <ul>
                <li Style="font-size:12px; font-weight:600">Iphone 8</li>
                 <span><FaTabletAlt /> </span>
                <p Style="font-size:12px; font-weight:600">Liverpool, UK-Aug 28 at 1:21 PM <span> <FaEllipsisV /></span></p>
               <li Style="font-size:12px; font-weight:600">Ipjone SE</li>
               <span><FaLaptop /></span>
               <p Style="font-size:12px; font-weight:600">Liverpool, UK-Aug 27 at 3:55 PM <span> <FaEllipsisV /></span></p>
                <li Style="font-size:12px; font-weight:600">iMac</li>
                 <p Style="font-size:12px; font-weight:600">Liverpool, UK-Aug 24 at 10:31 PM <span> <FaEllipsisV /></span></p>
                <li Style="font-size:12px; font-weight:600">Mac Studio</li>
                <p Style="font-size:12px; font-weight:600">Liverpool, UK-Aug 14 at 11:49 PM <span> <FaEllipsisV /></span></p>
              </ul>
       </div>
       </div>
  )
}

export default SubMainpage