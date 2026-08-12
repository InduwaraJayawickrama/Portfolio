import React from 'react';
import './Skills.css';
import { StarIcon } from './Icons';

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript / HTML / CSS", level: 95 },
    { name: "React.js / Node.js / Express.js", level: 90 },
    { name: "Java / C++ / C / Python", level: 88 },
    { name: "MySQL / MongoDB / PostgreSQL", level: 82 },
    { name: "Git / Postman / Vercel", level: 88 },
    { name: "Firebase / Railway / Google Colab / Jupyter Notebook", level: 82 },
    { name: "PHP / Spring Boot / Flutter", level: 78 },
    { name: "Wireshark / WebRTC / Cisco Packet Tracer", level: 73 },
    { name: "Arduino / Embedded C / MATLAB", level: 78 }
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking", "Communication Skills",
    "Teamwork", "Flexibility", "Creativity", "Leadership", "Adaptability"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Skills</h2>
        <div className="technical-skills-grid reveal">
          {technicalSkills.map((skill, idx) => (
            <div key={idx} className="skill-bar-wrapper">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ '--level': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title sub-section-title reveal">Soft Skills</h3>
        <div className="soft-skills-grid reveal">
          {softSkills.map((skill, idx) => (
            <div key={idx} className="soft-skill-card">
              <StarIcon className="soft-skill-icon" size={16} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

