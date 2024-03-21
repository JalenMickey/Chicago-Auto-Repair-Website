import '../../App.css';
import HeroSection from '../HeroSection';
import GoogleSection from '../GoogleSection';
import GoogleLocation from '../GoogleLocation';
import React from 'react';

function Home() {
  return (
    <>
        <HeroSection />
        <GoogleLocation />
        <GoogleSection />
    </>
  )
}

export default Home