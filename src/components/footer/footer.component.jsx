import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-top-first">
          <li className="footer-item">
            <Link to="/" className="footer-link">Site Map</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Terms and Condition</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Privacy policy</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Help</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Affiliate</Link>
          </li>
        </ul>
        <ul className="footer-top-second">
          <li className="footer-item">
            <Link to="/" className="footer-link">Our Location</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Career</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">About</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Contact</Link>
          </li>
        </ul>
        <ul className="footer-top-third">
          <li className="footer-item">
            <Link to="/" className="footer-link">FAQs</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Blog</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Car Blog</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Location</Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">Press</Link>
          </li>
        </ul>
        <div className="footer-top-fourth">
          <h2>Sign up to get our newsletter</h2>
          <div className="form-input">
            <input type="email" placeholder="Your email…" />
            <FontAwesomeIcon
              icon="paper-plane"
              className="icon"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <FontAwesomeIcon icon={['fab', 'facebook-square']} className="footer-icon" size="sm" color="#9b9b9b" />
        <FontAwesomeIcon icon={['fab', 'twitter']} className="footer-icon" size="sm" color="#9b9b9b" />
        <FontAwesomeIcon icon={['fab', 'google-plus-square']} className="footer-icon" size="sm" color="#9b9b9b" />
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="footer-icon" size="sm" color="#9b9b9b" />
        <FontAwesomeIcon icon={['fab', 'instagram']} className="footer-icon" size="sm" color="#9b9b9b" />
      </div>
    </footer>

  );
}
