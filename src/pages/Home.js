import React from 'react';

import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About'
import LatestPodcast from '../components/LatestPodcast';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <LatestPodcast />
    </>
  )
}

export default Home;
