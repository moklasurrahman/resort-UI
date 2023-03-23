import React from 'react'
import './footer.scss'
import img from '../../assets/footerback.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

import logoimg from '../../assets/logo.png'
const Footer = () => {
  return (
    <>
  <section className='container'>
      <div className="overlay"></div>
      <img className='img' src={img} alt="" />
      
      <div className="Item">
      
       
       <h2>Discover speclal offers</h2>
        <p>make sure to check out thse special promotions</p>
      <div className="btn">
      <button>View all packages</button>
      </div>
      </div>
  </section>

  <section className='mainFooter'>
    <div className="footerAllItems">
      
    <div className="left">
      <div className="title">
        <img className='logo' src={logoimg} alt="" />
      </div>
      <div className="leftItems">
        <span className='location'><LocationOnIcon className='icon'/>Bandhabari, kaliakair, gazipur 1750 gazipur, dhaka divisionbangladesh</span>
        <span className='maill'><MailIcon className='icon'/>dhakadreamlandpark@gmail.com</span>
        <span className='phone'><CallIcon className='icon'/>+88001762-554444</span>
      </div>
    </div>

    <div className="center">
    <div className="col1">
    <div className="title">explore</div>

     <div className="centerItem">
     <span>About Us</span>
      <span>Eco Park</span>
      <span>Events</span>
      <span>Packages</span>
     </div>
    </div>

    <div className="col1">
    <div className="title">Resources</div>

    <div className="centerItem">
      <span>FAQ's</span>
      <span>terms & conditions</span>
      <span>Privacy policy</span>
      <span>Contact us</span>
    </div>
    </div>
    </div>

    <div className="right">
    <div className="title">Don't miss a thing</div>
      <div className="rightItem">
        <p>get update to special deals and 
          exclusive offers. sign up to our newsletter!
        </p>
        <div className="input">
         {/* <form> */}
         <input type="email" placeholder='Your Email Address'/>
         <button>subscribe</button>
         {/* </form> */}
        </div>
      </div>
    </div>
    </div>
    
    <div className='allRight'>
      <div className='item'>
    <span>Copyright 2023 <strong>Dhaka Resort</strong>. All right reserved</span>
   
    </div> </div>
  </section>

 
  </>
  )
}

export default Footer