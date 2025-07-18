import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              HRInsights<span>KSA</span>
            </h2>
            <p>Empowering HR professionals across Saudi Arabia with knowledge, tools, and community.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/knowledge-base">Knowledge Base</Link></li>
                <li><Link to="/discussions">Community</Link></li>
                <li><Link to="/hr-tools">HR Tools</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">HR Templates</a></li>
                <li><a href="#">Compliance Guides</a></li>
                <li><a href="#">Salary Benchmarks</a></li>
                <li><a href="#">Training Programs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul className="contact-info">
                <li><i className="fas fa-envelope"></i> info@hrinsightsksa.com</li>
                <li><i className="fas fa-phone"></i> +966 11 XXX XXXX</li>
                <li><i className="fas fa-map-marker-alt"></i> Riyadh, Saudi Arabia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 HRInsights KSA. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;