import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      const titles = document.querySelectorAll('.section-title');
      titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const dist = Math.sqrt(x * x + y * y);
        if (dist < 400) {
          const force = (400 - dist) / 400;
          // Reduce the distortion effect specifically for the Contact Me section title
          const isContact = title.closest('.contact-section') !== null;
          const translateScale = isContact ? 0.02 : 0.1;
          const skewScale = isContact ? 0.004 : 0.02;
          const shadowScale = isContact ? 0.01 : 0.05;

          title.style.transform = `translate(${x * translateScale * force}px, ${y * translateScale * force}px) skew(${x * skewScale * force}deg, ${y * skewScale * force}deg)`;
          title.style.textShadow = `${-x * shadowScale * force}px ${-y * shadowScale * force}px 10px var(--shadow-color)`;
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
        const name = anchor.getAttribute('data-nav-name') || anchor.innerText || anchor.textContent || id;
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
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Credentials />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
