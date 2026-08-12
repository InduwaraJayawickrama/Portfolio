import React, { useState } from 'react';
import './Contact.css';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, FacebookIcon, WhatsappIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      ...formData,
      access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-desc">Have an exciting idea or a project you want to implement? Let's collaborate and bring it to life!</p>
        </div>
        <div className="contact-container reveal">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <MailIcon size={24} />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p><a href="mailto:induwaraayeshkantha@gmail.com">induwaraayeshkantha@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <PhoneIcon size={24} />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p><a href="tel:+94772112683">+94 77 211 2683</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <MapPinIcon size={24} />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Anuradhapura, Sri Lanka</p>
              </div>
            </div>

            <div className="social-connect animate-in">
              <h3>Follow me on social media</h3>
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
          </div>
          
          <div className="contact-form-placeholder">
            <h3>Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="form-status success">
                <span className="status-icon">✓</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button className="btn primary-btn" onClick={() => setSubmitStatus(null)}>Send Another Message</button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-status error">
                <span className="status-icon">✗</span>
                <h4>Something went wrong</h4>
                <p>Could not deliver your message. Please try again or email me directly.</p>
                <button className="btn secondary-btn" onClick={() => setSubmitStatus(null)}>Try Again</button>
              </div>
            )}

            {submitStatus === null && (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className={`btn primary-btn ${isSubmitting ? 'submitting' : ''}`} 
                  style={{width: '100%'}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
