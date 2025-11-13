
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          N<span className="text-cyan-400">.</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
