import React from 'react'
// import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src='../assets/brandit_background_video.mp4' autoPlay loop muted />
     <h1>brandit.</h1>
        <p>Der Branding Podcast</p>
        <div className='hero-btns'>
        {/* <Link to="/"> */}
        <button> Jetzt Reinhören </button>
        {/* </Link> */}
        </div> 
    </div>
  )
}

export default HeroSection
