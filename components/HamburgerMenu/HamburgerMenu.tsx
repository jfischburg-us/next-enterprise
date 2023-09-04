import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 p-6 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <div className="w-8 h-1 bg-white mb-1 transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}></div>
        <div className="w-8 h-1 bg-white mb-1 transition-opacity duration-200 ease-in-out" style={{opacity: isOpen ? '0' : '1'}}></div>
        <div className="w-8 h-1 bg-white transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default HamburgerMenu;
