import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-content reveal">
          <p>
            I am an enthusiastic, self-motivated, and reliable undergraduate student. 
            I thrive in collaborative team environments and when working independently. 
            I perform well under pressure, consistently meeting tight deadlines while maintaining quality.
          </p>
          
          <div className="education-card">
            <h3>Education</h3>
            <div className="edu-item">
              <span className="edu-degree">Bachelor of Science in Computer Engineering</span>
              <span className="edu-university">University of Jaffna, Sri Lanka</span>
              <span className="edu-year">2022 to Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
