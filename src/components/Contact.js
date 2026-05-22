import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        <div className="contact-container reveal">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">📧</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:induwaraayeshkantha@gmail.com">induwaraayeshkantha@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+94772112683">+94 77 211 2683</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Anuradhapura, Sri Lanka</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-placeholder">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn primary-btn" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
