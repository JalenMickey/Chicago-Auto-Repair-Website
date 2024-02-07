// Footer.js

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [attemptedSubmission, setAttemptedSubmission] = useState(false);
  const [email, setEmail] = useState('');
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const form = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Check if the email field is empty
    if (!email.trim()) {
      console.log('Email field is empty');
      setEmptyFieldError(true);
      setAttemptedSubmission(true);
      return;
    }

    // Perform the emailJS API call to send the subscription email
    emailjs.sendForm('service_ihs8ixp', 'template_khbqdxo', form.current, 'luAOihhQu1NYdfZ2M')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  if (formSubmitted) {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="success-message">
            <h3>Thank you for subscribing!</h3>
            <p>You have successfully joined our mailing list.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 8AM - 6PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
        <div className="footer-subscribe">
          <h3>Join Our Mailing List</h3>
          <form className="--form-control--card" ref={form}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            {attemptedSubmission && emptyFieldError && (
              <p className="error-message">Please provide your email address before subscribing.</p>
            )}

            <button className="btn--outline" onClick={handleSubscribe}>
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com/p/Chicago-Auto-Repair-Services-100057419531133/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/chicagoautosrepair/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
