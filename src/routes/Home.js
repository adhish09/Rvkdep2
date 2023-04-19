import React, { useState, useEffect } from 'react';
import HomeD from './HomeD.js';
import HomeM from './HomeM.js';
function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 668);
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <HomeM /> : <HomeD />}
    </div>
  );
}

export default Home;
