import React from 'react';
import './Volunteering.css';

const Volunteering = () => {
  const roles = [
    {
      role: "Web Master",
      organization: "IEEE PES Student Chapter, University of Jaffna",
      duration: "04/2024 - Present"
    },
    {
      role: "Sub Editor",
      organization: "Engineering Student Union, University of Jaffna",
      duration: "08/2023 - 08/2024"
    }
  ];

  return (
    <section id="volunteering" className="volunteering-section">
      <div className="container">
        <h2 className="section-title reveal">Volunteering & Leadership</h2>
        <div className="timeline">
          {roles.map((item, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <h4>{item.organization}</h4>
                <span className="duration">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
