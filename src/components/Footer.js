import React from 'react';
import './Footer.css';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, FacebookIcon, WhatsappIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        
        {/* Profile / Branding Column */}
        <div className="footer-col branding-col">
          <h3 className="footer-logo">Induwara</h3>
          <p className="footer-title">BSc. (Hons) in Computer Engineering (UG)</p>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/induwara-jayawickrama/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://github.com/InduwaraJayawickrama" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://web.facebook.com/induwara.jayawickrama" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn facebook"
              title="Facebook Profile"
            >
              <FacebookIcon size={20} />
            </a>
            <a 
              href="https://wa.me/94772112683" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn whatsapp"
              title="WhatsApp Chat"
            >
              <WhatsappIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#volunteering">Volunteering</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h4>Contact Details</h4>
          <div className="footer-contact-info">
            <p>
              <MailIcon className="contact-icon" size={16} />
              <a href="mailto:induwaraayeshkantha@gmail.com">induwaraayeshkantha@gmail.com</a>
            </p>
            <p>
              <PhoneIcon className="contact-icon" size={16} />
              <a href="tel:+94772112683">+94 772 112 683</a>
            </p>
            <p>
              <MapPinIcon className="contact-icon" size={16} />
              <span className="contact-text">Galwaduwagama, Galkulama, Anuradhapura</span>
            </p>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Induwara Jayawickrama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
