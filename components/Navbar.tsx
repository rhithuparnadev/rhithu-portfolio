
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  setView: (view: 'home' | 'about' | 'skills' | 'contact' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass">
      <button 
        onClick={() => setView('home')}
        className="text-white font-extrabold text-xl tracking-tighter focus:outline-none"
      >
        RHITHUPARNA<span className="text-black">DEV</span>
      </button>
      <div className="hidden md:flex space-x-8 text-white/80 font-medium">
        <button 
          onClick={() => setView('about')} 
          className="hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
        >
          About
        </button>
        <button 
          onClick={() => setView('skills')} 
          className="hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
        >
          Skills
        </button>
        <button 
          onClick={() => setView('projects')} 
          className="hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
        >
          Projects
        </button>
        <button 
          onClick={() => setView('contact')} 
          className="hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
        >
          Contact
        </button>
      </div>
      <a 
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white text-red-600 font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-tighter"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
