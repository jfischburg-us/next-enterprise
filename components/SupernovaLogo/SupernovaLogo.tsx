import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <svg ref={logoRef} className="logo w-full h-full flex items-center justify-center z-10" viewBox="0 -175 200 400">
      <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle" style={{fontSize: 'calc(3vw + 1em)'}}>trAIdmark</text>
      <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle" dy="2em" style={{fontSize: 'calc(1vw + 0.5em)'}}>An AI Value Creation Agency</text>
    </svg>
  );
};

export default SupernovaLogo;
