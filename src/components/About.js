import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-content reveal">
          <p>
            I am an enthusiastic, self-motivated, and reliable computer engineering undergraduate with a strong passion for software engineering. 
            I thrive in both collaborative team environments and when working independently. 
            I am highly adaptable to new and challenging situations, approaching problems with a proactive mindset and a keen attention to detail. 
            I perform well under pressure, consistently meeting tight deadlines while maintaining quality and precision. 
            Your goal is to contribute meaningfully to innovative projects while continuing to learn and grow in the software engineering domain.
          </p>
          
          <div className="about-cards-container">
            <div className="education-card">
              <h3>Education</h3>
              <div className="edu-timeline">
                <div className="edu-item">
                  <span className="edu-degree">Bachelor of Science in Computer Engineering (UG)</span>
                  <span className="edu-university">University of Jaffna, Sri Lanka</span>
                  <span className="edu-year">2022 to Present</span>
                </div>
                
                <div className="edu-item">
                  <span className="edu-degree">Secondary Education</span>
                  <span className="edu-university">Central College Anuradhapura</span>
                  <span className="edu-year">2011 to 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
