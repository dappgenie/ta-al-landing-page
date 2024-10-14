'use client';

import React, { useEffect, useState } from 'react';

import { Loader } from './Loader';

const Preloader = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(true);
    const rawData = localStorage.getItem('splashScreenShown');
    if (!rawData) {
      localStorage.setItem('splashScreenShown', JSON.stringify(true));
      const delay = async () => {
        // simulating a delay
        setShowSplash(true);
        await new Promise((resolve) => setTimeout(() => resolve(''), 3000));
        // After the delay, hide the splash screen
        setShowSplash(false);
      };
      delay();
    } else {
      setTimeout(() => setShowSplash(false), 3000);
    }
  }, []);

  return showSplash ? (
    <div
      style={{ zIndex: 1000 }}
      className='z-100 bg-white/90 backdrop-blur-sm h-screen w-screen flex fixed top-0 left-0 pointer-events-none'
    >
      <Loader />
    </div>
  ) : (
    <></>
  );
};

export default Preloader;
