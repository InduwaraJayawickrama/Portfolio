import React from 'react';
import './Volunteering.css';

const Volunteering = () => {
  const roles = [
    {
      role: "President of the Media Committee",
      organization: "Engineering Student Union, UOJ",
      duration: "08/2025 - 08/2026",
      summary: "Directed digital outreach and supervised promotional media creation, leading a creative team of designers and sub-editors.",
      details: "Led and managed the overall operations of the Media Committee, coordinating digital outreach strategies and supervising the production of promotional multimedia content for Union events. Spearedheaded a team of creative designers and sub-editors to maintain consistent content quality, enhance the Union's digital presence across platforms, and ensure clear, timely updates on all official student activities."
    },
    {
      role: "Web Master",
      organization: "IEEE PES Student Chapter, UOJ",
      duration: "04/2024 - 04/2026",
      summary: "Maintained the chapter website and supported virtual events and technical aspects of digital outreach.",
      details: "Managed and maintained the Chapter's website, organized virtual events via Zoom and Google Meet, and created Google Forms for registrations, feedback, etc. Ensured seamless online communication and timely updates of Chapter activities. Supported the team with technical aspects of digital outreach."
    },
    {
      role: "Sub Editor",
      organization: "Engineering Student Union, UOJ",
      duration: "08/2023 - 08/2024",
      summary: "Curated content and designed digital posts to communicate student union activities across social channels.",
      details: "Created and curated engaging posts for various events, ensuring clear communication and promotion of Union activities across digital platforms. Collaborated with the team to maintain consistent content quality and timeliness."
    },
    {
      role: "Sub Web Master",
      organization: "IEEE PES Student Chapter, UOJ",
      duration: "04/2023 - 04/2024",
      summary: "Assisted in web maintenance, site updates, and managing virtual meeting rooms for active events.",
      details: "Assisted in maintaining the Chapter's website and ensured regular updates. Supported the management of Zoom meetings for events and sessions."
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
              <div className="timeline-content-container">
                <div className="timeline-card">

                  {/* Front Side */}
                  <div className="timeline-card-front">
                    <div className="timeline-header">
                      <h3>{item.role}</h3>
                      <span className="duration">{item.duration}</span>
                    </div>
                    <h4>{item.organization}</h4>
                    <p className="volunteering-summary">{item.summary}</p>
                    <span className="flip-prompt">Hover for details ➜</span>
                  </div>

                  {/* Back Side */}
                  <div className="timeline-card-back">
                    <h3>Key Contributions</h3>
                    <div className="volunteering-details">
                      <p>{item.details}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
