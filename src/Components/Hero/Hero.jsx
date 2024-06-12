import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import profile_img from '../../assets/profile_img.svg'
import DP from '../../assets/DP.png'

const Hero = () => {
  return (
    <div className='hero'>
    <img src={DP} alt=""/>
      <h1> <span>I'm Bharath</span>, Software developer based in USA</h1>
      <p>I am a Software developer with 3 Years of Industry experience in developing and maintaing applications in MERN stack</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  )
}

export default Hero