import { useState } from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      toast.success("Your message has been sent!");
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error submitting your message', {
        position: "top-center",
        style: {
          background: '#ff4444',
          fontWeight: '500'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        flexDirection: 'column', // Mobile default
      }}>
        <div className="hero-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(58,97,237,0.8) 0%, rgba(137,37,214,0.8) 100%)',
          zIndex: 1
        }}></div>

        <div className="container hero-content" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column', // Mobile default
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>

          {/* Text Content */}
          <div className="hero-text" style={{
            flex: 1,
            paddingRight: '0',
            color: 'white',
            marginBottom: '2rem', // spacing when stacked
            textAlign: 'center' // center align on mobile
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>Get in Touch</h1>
            <p className="hero-subtitle" style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>Have questions or suggestions about AI tools? Our team is ready to help you!</p>
            <button style={{
              background: 'white',
              color: '#3a61ed',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
              onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}>
              Contact Us Now
            </button>
          </div>

          {/* Image Content */}
          <div className="hero-image" style={{
            flex: 1,
            textAlign: 'center'
          }}>
            <img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Contact Us"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container contact-container" id='contact'>
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="section-title">
              <span className="title-icon">✉️</span>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title">
              <span className="title-icon">📱</span>
              Contact Information
            </h2>

            <div className="info-card">
              <div className="info-icon email">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>support@aitoolshub.com</p>
                <p>feedback@aitoolshub.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon address">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>123 AI Innovation Center</p>
                <p>Tech Park, Bangalore 560001</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon phone">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p>Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <div className="map-header">
          <h3><i className="bi bi-map-fill"></i> Our Location</h3>
          <p>Visit our office or drop us a message</p>
        </div>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003168749709!2d77.59451431482193!3d12.97196299085632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf5df53c8e6b6f6b!2sBangalore%20International%20Tech%20Park!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}

export default Contact;