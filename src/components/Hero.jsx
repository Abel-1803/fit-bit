import React from 'react'
import Contact from './Contact'
import Pricing from './Pricing'

const Hero = () => {
  return (
    <section className='hero'>
     <div className='content'>
        <div className="title">
          <h1>LET'S</h1>
          <h1>BURN IT UP</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey Starts Here</p>
          <p>Unleash Your Inner Demon </p>
        </div>
        <div className="buttons">
          <button><a className='journey' href="#contacts">Start Your Journey</a></button>
          <button><a  className='journey' href="#price">Discover Your Plan</a></button>
        </div>
     </div>
    </section>
  )
}

export default Hero