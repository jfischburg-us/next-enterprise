import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <svg ref={logoRef} className="logo w-full h-full flex items-center justify-center" viewBox="0 -50 100 300">
      <text fill="white" className="font-inter" textAnchor="middle" dominantBaseline="middle">trAIdmark</text>
    </svg>
  );
};

export default SupernovaLogo;
