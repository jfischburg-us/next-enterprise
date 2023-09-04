import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <svg ref={logoRef} className="logo w-full h-full">
      <text x="50%" y="50%" fill="white" className="font-inter text-9xl" textAnchor="middle" dominantBaseline="middle">trAIdmark</text>
    </svg>
  );
};

export default SupernovaLogo;
