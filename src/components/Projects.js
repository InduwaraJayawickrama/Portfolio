import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      name: "Bookify",
      category: "Software",
      description: "A service booking web application connecting consumers with providers to browse services and make bookings. Built with Spring Boot, Reactjs, and MySQL.",
      image: "/images/bookify_app_1778285731201.png"
    },
    {
      name: "Face2Face",
      category: "Software",
      description: "A browser-based peer-to-peer video chat application enabling users to join rooms, share streams, and toggle screen sharing. Built with WebRTC, Socket.IO, and Node.js.",
      image: "/images/face2face_app_1778285764666.png"
    },
    {
      name: "HVMS (SLT)",
      category: "Software",
      description: "A Hiring Vehicle Management System featuring three-level branch approvals and automated payment calculations based on vehicle rates.",
      image: "/images/hvms_app_1778285779995.png"
    },
    {
      name: "Facility Management (SLT)",
      category: "Software",
      description: "An automation system to manage civil engineering projects, strictly tracking project workflows, contractor details, and designated Engineer records.",
      image: "/images/facility_management_1778285818626.png"
    },
    {
      name: "Accident Detection",
      category: "IoT",
      description: "A smart embedded system utilizing ultrasonic sensors and ESP32 for real-time obstacle detection. Integrates GSM/GPS for automated emergency alerts.",
      image: "/images/accident_detection_1778285838115.png"
    },
    {
      name: "Blockchain IoT Security",
      category: "Research",
      description: "A lightweight blockchain framework utilizing AES-128 and ECDSA to secure resource-constrained IoT systems.",
      image: "/images/blockchain_iot_1778285855576.png"
    },
    {
      name: "Line Follower Robot",
      category: "Robotics",
      description: "A versatile line-following robot built by Team Eudora for performing complex automation tasks.",
      image: "/images/line_follower_1778285885901.png"
    },
    {
      name: "Automatic Stamping Machine",
      category: "Hardware",
      description: "An innovative automation prototype designed to efficiently apply stamps to paper documents.",
      image: "/images/stamping_machine_1778285900598.png"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card reveal">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
