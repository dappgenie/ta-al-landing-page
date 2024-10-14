import React, { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update the state with the current window dimensions
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set size at the initial mount
    updateSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateSize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty dependency array means this effect runs once on mount

  return screenSize;
};

export default useScreenSize;
