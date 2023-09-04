import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg ref={logoRef} className="logo z-10" viewBox="-100 -50 240 200" style={{margin: 'auto'}}>
        <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle" style={{fontSize: 'calc(1vw + 1em)'}}>trAIdmark</text>
        <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle" dy="2em" style={{fontSize: 'calc(0.2vw + 0.5em)'}}>An AI Value Creation Agency</text>
      </svg>
    </div>
  );
};

export default SupernovaLogo;
