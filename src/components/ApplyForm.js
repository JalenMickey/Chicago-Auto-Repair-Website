import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from './Button';
import emailjs from '@emailjs/browser';
import './ApplyForm.css';

function ApplyForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [attemptedSubmission, setAttemptedSubmission] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState(false);
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

    if (isEmptyField) {
      console.log('One or more fields are empty');
      setEmptyFieldError(true);
      setAttemptedSubmission(true);
      return;
    }

    emailjs.sendForm('service_ihs8ixp', 'template_5n46e07', form.current, 'luAOihhQu1NYdfZ2M')
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
        <h2 className="--text-center">Join The Team</h2>
        <form className="--form-control--card" ref={form}>
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="text" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Phone Number" name="user_number" required />
          <textarea name="message" placeholder="Tell us about yourself..." cols="10" rows="10" style={{ width: '80%' }}></textarea>
          <div className="file-upload">
            <p>Attach PDF or Word document (optional)</p>
            <input type="file" name="user_attachment" />
          </div>

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

export default ApplyForm;
