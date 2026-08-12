import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      name: "Bookify",
      category: "Software (Group Project)",
      duration: "01/2025 - 04/2025",
      technologies: ["Spring Boot", "React.js", "MySQL", "RESTful APIs"],
      summary: "A full-stack service booking platform connecting consumers with local service providers to schedule, manage, and track appointments.",
      description: "A collaborative group project. Connects consumers with service providers, allowing users to browse services, view provider profiles, check availability, and make bookings. Service providers can register on the platform, manage their profiles, and receive bookings dynamically.",
      image: "/images/bookify_app_1778285731201.png"
    },
    {
      name: "System Automation Project",
      category: "Software (SLT)",
      duration: "01/2026 - 05/2026",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "JWT", "Nodemailer"],
      summary: "An enterprise automation platform for Sri Lanka Telecom featuring analytical dashboards and secure role-based routing.",
      description: "Engineered a full-stack automation platform to manage regional evaluations and systemic task tracking for Sri Lanka Telecom. Developed a responsive administration dashboard using React, styled with Tailwind CSS, and integrated Recharts for dynamic analytical data visualization. Designed a secure backend architecture with Express.js utilizing PostgreSQL, JSON Web Token (JWT) role-based routing, and automated system alerts using Nodemailer.",
      image: "/images/facility_management_1778285818626.png"
    },
    {
      name: "Hiring Vehicle Management",
      category: "Software (SLT)",
      duration: "11/2025 - 05/2026",
      technologies: ["Flutter", "Node.js", "Express.js", "MySQL", "Firebase", "BLOC", "flutter_map"],
      summary: "A cross-platform Flutter application for managing vehicle logistics, tracking locations, and generating Excel reports.",
      description: "Developed a cross-platform vehicle logistics and management application utilizing Flutter with the BLOC pattern for state management. Built a scalable Node.js/Express backend with MySQL. Integrated Firebase Authentication for secure access and implemented geolocation mapping using flutter_map. Utilized Syncfusion DataGrid and CSV/Excel parsing to generate summary reports.",
      image: "/images/hvms_app_1778285779995.png"
    },
    {
      name: "Face2Face - Video Chat",
      category: "Software",
      duration: "02/2025 - 04/2025",
      technologies: ["WebRTC", "Socket.IO", "React.js", "Node.js", "Express.js", "Railway", "Firebase"],
      summary: "A WebRTC and Socket.IO peer-to-peer video chat app supporting text chat, screen sharing, and recording.",
      description: "Developed a browser-based peer-to-peer video chat application using WebRTC and Socket.IO. The platform enables users to join rooms, share video/audio streams, exchange text messages, and toggle screen sharing and recording functionality. Emphasized real-time media stream handling and client-server integration without third-party video services.",
      image: "/images/face2face_app_1778285764666.png"
    },
    {
      name: "Accident Detection System",
      category: "IoT",
      duration: "02/2025 - 04/2025",
      technologies: ["ESP32", "Ultrasonic Sensor", "GSM", "GPS", "Flame Sensor", "C++", "Google Maps API"],
      summary: "An IoT embedded system utilizing ESP32, GSM, GPS, and sensors to detect road accidents and send real-time coordinates.",
      description: "Developed a smart embedded system that detects potential road accidents and initiates emergency communication. Utilized ultrasonic sensors and ESP32 for real-time obstacle and pedestrian detection. Integrated GSM and GPS modules to send automated alerts with location data to emergency services, paired with Google Maps API real-time tracking.",
      image: "/images/accident_detection_1778285838115.png"
    },
    {
      name: "Blockchain Security for IoT",
      category: "Research",
      duration: "01/2025 - Present",
      technologies: ["IoT Blockchain", "ECDSA", "AES-128", "SHA-256", "MQTT", "Python", "Mininet"],
      summary: "A research project designing a lightweight PoS blockchain framework with ECDSA/AES to secure constrained IoT devices.",
      description: "Researching a lightweight blockchain framework to secure IoT systems in resource-constrained environments. Designed a three-layer architecture using AES-128 for encryption, ECDSA for authentication, and a simplified Proof of Stake consensus. Evaluated performance via Mininet and Wireshark simulation focusing on latency, energy, and attack resilience.",
      image: "/images/blockchain_iot_1778285855576.png"
    },
    {
      name: "Line Follower Robot",
      category: "Robotics",
      duration: "2024",
      technologies: ["Arduino", "C++", "Sensors", "PID Control"],
      summary: "An automated line-following robot built for executing precision paths and path-following tasks.",
      description: "A versatile line-following robot built by Team Eudora for performing complex automation tasks. Built using custom infrared sensor arrays and highly tuned PID (Proportional-Integral-Derivative) control logic for precise route navigation.",
      image: "/images/line_follower_1778285885901.png"
    },
    {
      name: "Automatic Stamping Machine",
      category: "Hardware",
      duration: "2024",
      technologies: ["Arduino", "Stepper Motors", "C++"],
      summary: "An Arduino-powered automation prototype designed to efficiently apply physical stamps to paper documents.",
      description: "An innovative automation prototype designed to efficiently apply stamps to paper documents. Features high-precision stepper motor control, mechanical alignment rails, and automated paper feed systems programmed in C++ on Arduino.",
      image: "/images/stamping_machine_1778285900598.png"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card-container reveal">
              <div className="project-card">
                
                {/* Front Side */}
                <div className="project-card-front">
                  <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                  <div className="project-info">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-duration">{project.duration}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <span className="flip-prompt">Hover for details ➜</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="project-card-back">
                  <h3>About the Project</h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-tech-tag">{tech}</span>
                    ))}
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

export default Projects;
