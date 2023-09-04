import React, { useEffect, useRef } from 'react';

const SupernovaLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // TODO: Add code here to animate the logo
  }, []);

  return (
    <svg ref={logoRef} className="logo">
      <text x="0" y="45" fill="white">trAIdmark</text>
    </svg>
  );
};

export default SupernovaLogo;
