import React from 'react';
// import { Link } from 'react-router-dom';
// import BannerImage from "../assets/Foto1.jpg";
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About'
import Landing from '../components/Landing'
import Landing2 from '../components/Landing2'
import Spotify from '../components/Spotify'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      {/* <Landing />
      <Landing2 />
      <Spotify /> */}
    </>

    // <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    // <div className="headerContainer">
    //   <h1>Podcast Name</h1>
    //   <p>Die Branding Experten</p>
    //   <Link to="/">
    //   <button> Jetzt Reinhören </button>
    //   </Link>
    // </div>
    // </div>
  )
}

export default Home;
