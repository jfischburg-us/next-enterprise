import React, { useState, useEffect } from 'react';

const HamburgerMenu = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    onMenuToggle(isOpen);
  }, [isOpen]);

  return (
    <div className="fixed top-0 right-0 p-6 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-2">
        <div className="w-8 h-1 bg-white mb-1 transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}></div>
        <div className="w-8 h-1 bg-white mb-1 transition-opacity duration-200 ease-in-out" style={{opacity: isOpen ? '0' : '1'}}></div>
        <div className="w-8 h-1 bg-white transition-transform duration-200 ease-in-out transform origin-center" style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsOpen(false)}>
          <ul className="fixed top-0 right-0 p-6 list-none text-white text-2xl w-full flex flex-col items-center">
            <li onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}>Services</li>
            {activeMenu === 'services' && (
              <ul className="list-none text-white text-xl">
                <li>AI Consulting</li>
                <li>Guru Sessions</li>
              </ul>
            )}
            <li onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}>Industries</li>
            {activeMenu === 'industries' && (
              <ul className="list-none text-white text-xl">
                <li>Retail/CPG</li>
                <li>Government</li>
                <li>Healthcare</li>
                <li>Biotech</li>
                <li>Software/SaaS</li>
              </ul>
            )}
            <li onClick={() => setActiveMenu(activeMenu === 'about' ? null : 'about')}>About</li>
            {activeMenu === 'about' && (
              <ul className="list-none text-white text-xl">
                <li>Team</li>
                <li>Partnership</li>
                <li>Press</li>
              </ul>
            )}
            <li onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}>Resources</li>
            {activeMenu === 'resources' && (
              <ul className="list-none text-white text-xl">
                <li>Blog</li>
                <li>eBooks</li>
                <li>Webinars</li>
              </ul>
            )}
            <li onClick={() => setActiveMenu(activeMenu === 'contact' ? null : 'contact')}>Contact</li>
            {activeMenu === 'contact' && (
              <ul className="list-none text-white text-xl">
                <li>Inquire</li>
                <li>Book</li>
              </ul>
            )}
            <li>Press</li>
            <li>Investors</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
