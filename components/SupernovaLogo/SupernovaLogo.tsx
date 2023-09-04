import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <svg ref={logoRef} className="logo w-full h-full flex items-center justify-center z-10" viewBox="0 -150 100 400">
      <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle" style={{fontSize: '3vw'}}>trAIdmark</text>
    </svg>
  );
};

export default SupernovaLogo;
