import React from 'react'
import './heroSection.scss'

import heroImg from '../../assets/hero.webp'

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className="heroItem">
        <img className='Img' src={heroImg} alt="" />
       
       <div className="btn">
       <button>View all packages</button>
       </div>
       </div>

        <div className="packages">
           <h1>reserve your stay</h1>

           <div className="dateInput">
              
              <div className="input">
                <input className="input" list="packages" placeholder='Packages'/>
    
                <datalist id="packages">
                <option value="packages1" />
                <option value="packages2" />
                <option value="packages3" />
                <option value="packages4" />
              </datalist>
                
              </div>

              <div className="input">
                <input className="input" placeholder='Date' type="date" id="date" />
              </div>

              <div className="input">
                <input className="input" list='guest' placeholder='Guest'/>
                <datalist id="guest">
                <option value="guest1" />
                <option value="guest2" />
                <option value="guest3" />
                <option value="guest4" />
              </datalist>
              </div>

              <div className="input">
                <button className="input" type="submit" id="date">BOOK NOW</button>
              </div>

      
           </div>


       </div>
      
      

    </section>
  )
}

export default HeroSection