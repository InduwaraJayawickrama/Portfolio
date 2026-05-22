import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import LiquidTransition from './components/LiquidTransition';

function App() {
  const [transitionTrigger, setTransitionTrigger] = useState(0);
  const [destinationName, setDestinationName] = useState('');

  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    // Elastic title distortion
    const handleMouseMove = (e) => {
      const titles = document.querySelectorAll('.section-title, .hero-content h1');
      titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        
        const dist = Math.sqrt(x*x + y*y);
        if (dist < 400) {
          const force = (400 - dist) / 400;
          title.style.transform = `translate(${x * 0.1 * force}px, ${y * 0.1 * force}px) skew(${x * 0.02 * force}deg, ${y * 0.02 * force}deg)`;
          title.style.textShadow = `${-x * 0.05 * force}px ${-y * 0.05 * force}px 10px var(--shadow-color)`;
        } else {
          title.style.transform = '';
          title.style.textShadow = '';
        }
      });
    };

    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const id = anchor.hash.slice(1);
        const name = anchor.innerText || anchor.textContent || id;
        handleNavClick(id, name);
      }
    };

    window.addEventListener('scroll', handleScrollReveal);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleGlobalClick);
    handleScrollReveal();
    
    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleNavClick = (id, name) => {
    setDestinationName(name);
    setTransitionTrigger(prev => prev + 1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 250); // Faster scroll trigger
  };

  return (
    <div className="App">
      <LiquidTransition trigger={transitionTrigger} destination={destinationName} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Volunteering />
      <Contact />
      
      <footer style={{ padding: '2rem 0', background: 'var(--bg-secondary)', marginTop: 'auto' }}>
        <div className="container">
          <p style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Induwara Jayawickrama. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
