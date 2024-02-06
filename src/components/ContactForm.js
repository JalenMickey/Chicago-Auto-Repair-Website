import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from './Button';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [attemptedSubmission, setAttemptedSubmission] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const form = useRef();
  const recaptchaRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaVerified) {
      console.log('reCAPTCHA validation failed');
      setAttemptedSubmission(true);
      return;
    }

    // Check if any required field is empty
    const requiredFields = ['user_name', 'user_email', 'user_number', 'message'];
    const isEmptyField = requiredFields.some((fieldName) => !form.current[fieldName].value.trim());

    if (isEmptyField || !selectedContactMethod || !selectedService) {
      console.log('One or more fields are empty');
      setEmptyFieldError(true);
      setAttemptedSubmission(true);
      return;
    }

    emailjs.sendForm('service_bnue848', 'template_ndt3tu8', form.current, 'rytfGePAZdJV_sy98')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  if (formSubmitted) {
    return (
      <section>
        <div className="container">
          <h2 className="--text-center success-message">
            Thank you for contacting us!
          </h2>
          <p className="success-message">
            Your message has been successfully submitted. We will get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact Us</h2>
        <form className="--form-control--card" ref={form}>
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="text" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Phone Number" name="user_number" required />
          <div className="select-contact-method">
            <p>Select Preferred Contact Method</p>
            <select
              name="contact_method"
              value={selectedContactMethod}
              onChange={(e) => setSelectedContactMethod(e.target.value)}
              required
            >
              <option value="">Select Contact Method</option>
              <option value="phoneCall">Phone Call</option>
              <option value="textMessage">Text Message</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="contact-car-info">
            <p>Please enter your car's make and model.</p>
            <input type="text" placeholder="Make" name="user_make" required />
            <input type="text" placeholder="Model" name="user_model" required />
          </div>
          <div className="select-service">
            <p>Select Your Service</p>
            <select
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="performance">Performance</option>
              <option value="service">Service</option>
              <option value="repair">Repair</option>
              <option value="collision & paint">Collision & Paint</option>
              <option value="suspension">Suspension</option>
              <option value="wraps">Wraps</option>
              <option value="wheels">Wheels</option>
              <option value="carbon fiber">Carbon Fiber</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea name="message" placeholder="If selected 'other', please specify with detail. You can also include any extra information here." cols="10" rows="10"></textarea>

          {attemptedSubmission && emptyFieldError && (
            <p className="error-message">Please fill in all required fields before submitting the form.</p>
          )}

          {attemptedSubmission && !recaptchaVerified && (
            <p className="error-message">Please complete the reCAPTCHA before submitting the form.</p>
          )}

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lc6ZiwpAAAAANsFY7hvxZejnGbnLFgNZzJEW1wY"
            onChange={() => setRecaptchaVerified(true)}
          />

          <Button buttonStyle='btn--outline' disabled={!recaptchaVerified} onClick={handleFormSubmit}>
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
