import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "C", "Python", "PHP", "HTML", "CSS", "JavaScript", "MATLAB"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Express.js", "Spring Boot"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Postman", "Vercel", "Firebase", "Railway", "Google Colab", "Jupyter Notebook"]
    },
    {
      title: "Network and Security",
      skills: ["Wireshark", "WebRTC", "Cisco Packet Tracer"]
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Embedded C"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card reveal">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
