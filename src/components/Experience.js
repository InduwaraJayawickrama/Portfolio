import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index, e) => {
    const card = e.currentTarget;
    const isCurrentlyExpanded = expanded[index];

    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));

    // Handle scroll positioning after state updates and DOM resizing
    setTimeout(() => {
      if (isCurrentlyExpanded) {
        // Collapsing: Scroll to the start of the Work Experience section
        const section = document.getElementById('experience');
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80; // 80px for sticky navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      } else {
        // Expanding: Scroll to the top of the clicked card
        const offsetTop = card.getBoundingClientRect().top + window.pageYOffset - 100; // 100px for navbar + padding
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    // Dispatch a scroll event to trigger the scroll-reveal active class re-evaluation
    // after the card height changes and React re-renders.
    window.dispatchEvent(new Event('scroll'));
  }, [expanded]);

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Sri Lanka Telecom",
      location: "Colombo, Sri Lanka",
      duration: "11/2025 - 05/2026",
      summary: "Led end-to-end delivery of enterprise solutions using PERN stack and Flutter, translating business requirements into actionable tasks and managing stakeholder expectations.",
      responsibilities: [
        "Served as primary Developer and Team Leader, managing daily team tasks, aligning development goals, and leading the end-to-end delivery of the project.",
        "Developed full stack enterprise solutions using the PERN stack (PostgreSQL, Express.js, React.js, Node.js) and Flutter, maintaining high performance and code reliability.",
        "Monitored DevOps workflows and facilitated deployments by providing infrastructure teams with critical system requirements, configuration details, and deployment specifications.",
        "Acted as the main technical point of contact for clients, translating business requirements into actionable development tasks and managing stakeholder expectations.",
        "Collaborated closely with Business Analysts (BAs) to gather initial requirements and assist in authoring comprehensive technical documentation and system specifications.",
        "Partnered with QA engineers to streamline bug tracking, accelerate issue resolution, and maintain rigorous application quality standards."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title reveal">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expanded[index];
            return (
              <div 
                key={index} 
                className={`experience-card reveal ${isExpanded ? 'expanded' : ''}`}
                onClick={(e) => toggleExpand(index, e)}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company} <span className="location">| {exp.location}</span></h4>
                  </div>
                  <span className="duration-badge">{exp.duration}</span>
                </div>
                
                {!isExpanded && (
                  <p className="experience-summary">{exp.summary}</p>
                )}
                
                {isExpanded && (
                  <div className="experience-details" onClick={(e) => e.stopPropagation()}>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="expand-indicator">
                  {isExpanded ? 'Show Less ᐱ' : 'Read More ᐯ'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
