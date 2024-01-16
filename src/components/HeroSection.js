import React from 'react'
import { Button } from '../components/Button'
import '../styles/HeroSection.css';
import videoBg from '../assets/brandit_video.mp4'
import logoHead from '../assets/brandit_logo_white.png'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src={videoBg} autoPlay loop muted />
     <div className='heroText'>
     <img className='headerLogo' src={logoHead} alt='Brandit. Logo White' />
        <p className='pHead'>Der Branding Podcast</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            ABOUT
        </Button>
        <Link to='https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8' target="_blank" rel="noopener noreferrer"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
         SPOTIFY 
        </Button></Link>
        </div>
        </div> 
    </div>
  )
}

export default HeroSection
