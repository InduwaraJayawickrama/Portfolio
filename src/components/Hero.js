import React from 'react';
import './Hero.css';
import ParticleCanvas from './ParticleCanvas';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <ParticleCanvas />
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <h1>Induwara Jayawickrama</h1>
          <h2 className="typing-effect">BSc. (Hon's) in Computer Engineering (UG)</h2>
          <p className="tagline">Passionate about Cyber Security, IoT Systems, Software Engineering, and Embedded systems.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Projects</a>
            <a href="/images/Induwara Jayawickrama.pdf" className="btn secondary-btn" download="Induwara_Jayawickrama_Resume.pdf">Download Resume</a>
          </div>
        </div>
        <div className="hero-image reveal active">
          <div className="image-placeholder">
            <img
              src="/images/WhatsApp Image 2025-07-25 at 12.08.42_cf708b8d.jpg"
              alt="Induwara Jayawickrama"
              className="hero-portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
