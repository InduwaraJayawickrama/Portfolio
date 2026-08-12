import React from 'react';
import './Credentials.css';
import { TrophyIcon, CertificationIcon, MembershipsIcon } from './Icons';

const Credentials = () => {
  const certifications = [
    "Lead Yourself Certificate of Completion Personality Development Program",
    "Time Management (From Chegg)",
    "YarlInsight 2.0 - Summer School on Full Stack Web Development with the MERN Stack"
  ];

  const memberships = [
    {
      role: "Student Member",
      organization: "Institution of Engineers Sri Lanka (IESL)",
      detail: "Membership ID: S-29538",
      duration: "2023 - Present"
    },
    {
      role: "Student Member",
      organization: "IEEE Sri Lanka Section",
      detail: "Active engagement in IEEE technical societies",
      duration: "2023 - Present"
    }
  ];

  const competitions = [
    { name: "IEEEXtreme 18.0", result: "108th all island & 6th place of UOJ SBC", year: "2024" },
    { name: "CodeRally 5.0", result: "Rank 12", year: "2024" },
    { name: "SLRC / Line Following Robotics", result: "Participant & Competitor", year: "2024" },
    { name: "MoraXtreme", result: "Competitor", year: "2023, 2024" }
  ];

  return (
    <section id="credentials" className="credentials-section">
      <div className="container">
        <h2 className="section-title reveal">Achievements & Credentials</h2>
        <div className="credentials-grid">
          
          {/* Competitions */}
          <div className="credential-card reveal">
            <div className="card-header">
              <TrophyIcon className="card-icon" />
              <h3>Competitions</h3>
            </div>
            <div className="competitions-list">
              {competitions.map((comp, idx) => (
                <div key={idx} className="comp-item">
                  <div className="comp-info">
                    <span className="comp-name">{comp.name}</span>
                    <span className="comp-result">{comp.result}</span>
                  </div>
                  <span className="comp-year">{comp.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="credential-card reveal">
            <div className="card-header">
              <CertificationIcon className="card-icon" />
              <h3>Certifications</h3>
            </div>
            <ul className="certs-list">
              {certifications.map((cert, idx) => (
                <li key={idx} className="cert-item">{cert}</li>
              ))}
            </ul>
          </div>

          {/* Memberships */}
          <div className="credential-card reveal">
            <div className="card-header">
              <MembershipsIcon className="card-icon" />
              <h3>Memberships</h3>
            </div>
            <div className="memberships-list">
              {memberships.map((memb, idx) => (
                <div key={idx} className="memb-item">
                  <h4 className="memb-role">{memb.role}</h4>
                  <h5 className="memb-org">{memb.organization}</h5>
                  <span className="memb-id">{memb.detail}</span>
                  <span className="memb-duration">{memb.duration}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;
