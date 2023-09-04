import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 p-6 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-2">
        <div className="w-8 h-1 bg-white mb-1 transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}></div>
        <div className="w-8 h-1 bg-white mb-1 transition-opacity duration-200 ease-in-out" style={{opacity: isOpen ? '0' : '1'}}></div>
        <div className="w-8 h-1 bg-white transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50">
          <ul className="fixed top-0 right-0 p-6 list-none text-white text-2xl">
            <li>Placeholder 1</li>
            <li>Placeholder 2</li>
            <li>Placeholder 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
