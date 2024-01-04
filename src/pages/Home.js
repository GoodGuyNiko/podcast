import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/Foto1.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
    <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1>Podcast Name</h1>
      <p>Die Branding Experten</p>
      <Link to="/">
      <button> Jetzt Reinhören </button>
      </Link>
    </div>
    </div>
  )
}

export default Home;
