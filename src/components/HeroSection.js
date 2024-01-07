import React from 'react'
import { Button } from '../components/Button'
import '../styles/HeroSection.css';
import videoBg from '../assets/brandit_background_video.mp4'
import logoHead from '../assets/brandit_logo_white.png'

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src={videoBg} autoPlay loop muted />
     <img className='headerLogo' src={logoHead} alt='Brandit. Logo White' />
        <p>Der Branding Podcast</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            ABOUT
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
         SPOTIFY 
        </Button>
        </div> 
    </div>
  )
}

export default HeroSection
