import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo" data-nav-name="HOME">Induwara</a>

        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#volunteering" onClick={closeMobileMenu}>Volunteering</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
