import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
import './ModelCall.css'


const ModelCall = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bk6yra", // Replace with your EmailJS service ID
        "template_7lan8lf", // Replace with your EmailJS template ID
        e.target, // The form object
        "1l53LXLP3GtXelnpL" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set submission status to true on success
          setIsLoading(false); // Hide loading spinner
          setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false); // Hide loading spinner on error
        }
      );
  };

  return (
    <><div className="model-container">
      <header className="header">
      <nav className="nav">
  <div className="logo-container">
    <img className="logo-image" src="/images/logo_green.jpg" alt="Zeynep" />
  </div>

  <div className="nav-links">
    <Link to="/" className="nav-link" id="home-link">
      Home
    </Link>
    <a href="#contact" className="nav-link" id="contact-link">
      Contact
    </a>
  </div>
</nav>
      </header>
      <section className="banner">
        <div className="image">
          <img className="intro-image" src="/images/banner-model.jpg" alt="Zeynep" />
        </div>
      </section>
    </div>
    <div className="container my-5">
        <h2 className="text-center mb-4">What is a Model Slot?</h2>
        <p>
          A model slot is a unique opportunity to receive a <strong>complimentary</strong> lash set while allowing me to refine and experiment with new lash techniques. These sessions are designed for practice, creativity, and content creation, meaning the final lash style will be based on the specific techniques I’m working on at the time.
        </p>

<div className="model-slot-container">
  <div className="info-section">
    <div className="info-block">
      <h4>What to Expect:</h4>
      <ul>
        <li>✔  A full lash application (2–4 hours)</li>
        <li>✔  My choice of style to experiment with new techniques</li>
        <li>✔  Content creation for social media (must be comfortable being featured)</li>
        <li>✔  A polished and professional experience</li>
      </ul>
    </div>
    <div className="info-block">
      <h4>Model Requirements:</h4>
      <ul>
        <li>✔  Must have healthy lashes</li>
        <li>✔  Available for a 2–4 hour session</li>
        <li>✔  Comfortable being photographed/filmed for social media</li>
        <li>✔  Willing to let me choose the lash style</li>
        <li>✔  Arrive with clean lashes and no eye makeup</li>
        <li>✔  Wear a neutral outfit (dark/light brown or cream)</li>
      </ul>
    </div>
  </div>

  <form
        className="model-form"
        onSubmit={handleSubmit} // Use handleSubmit function
      >
    <h4>MODEL APPLICATION</h4>
    {isSubmitted ? (
        <p>Thanks! Your application has been submitted.</p>
      ) : (
    <>
    <label>Full Name:</label><input type="text" name="fullName" required />
    <label>Phone Number:</label><input type="tel" name="phone" required />
    <label>Email Address:</label><input type="email" name="email" required />
    <label>Instagram Handle (if applicable):</label><input type="text" name="instagram" />
    <h5>Availability:</h5><h6>Select all that apply</h6><div className="availability-block">
                  <label>Weekdays:</label>
                  <div className="inline">
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekdays" value="morning" />
                      <span className="fake-radio"></span> Morning
                    </label>
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekdays" value="afternoon" />
                      <span className="fake-radio"></span> Afternoon
                    </label>
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekdays" value="evening" />
                      <span className="fake-radio"></span> Evening
                    </label>
                  </div>

                  <label>Weekends:</label>
                  <div className="inline">
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekends" value="morning" />
                      <span className="fake-radio"></span> Morning
                    </label>
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekends" value="afternoon" />
                      <span className="fake-radio"></span> Afternoon
                    </label>
                    <label className="custom-radio-style">
                      <input type="checkbox" name="weekends" value="evening" />
                      <span className="fake-radio"></span> Evening
                    </label>
                  </div>
                </div><h5>Lash History</h5><label>Have you had lash extensions before?</label><div className="inline">
                    <label><input type="radio" name="hadLashesBefore" value="Yes" /> Yes</label>
                    <label><input type="radio" name="hadLashesBefore" value="No" /> No</label>
                  </div><label>Do you have any allergies or sensitivities?</label><div className="inline">
                    <label><input type="radio" name="allergies" value="Yes" /> Yes</label>
                    <label><input type="radio" name="allergies" value="No" /> No</label>
                  </div><label>Do you have any eye conditions or recent treatments?</label><div className="inline">
                    <label><input type="radio" name="eyeConditions" value="Yes" /> Yes</label>
                    <label><input type="radio" name="eyeConditions" value="No" /> No</label>
                  </div><h5>Consent & Agreement</h5><label><input type="radio" name="Consent" required /> I agree to let the lash artist choose the set.</label><label><input type="radio" name="Training" required /> I understand this is a training/model session and results may vary.</label><label><input type="radio" name="Photos" required /> I consent to being photographed/videoed for social media.</label><label><input type="radio" name="Health" required /> I confirm that I have no contraindications (allergies, infections, etc.)</label><button type="submit" className="submit-btn">Submit Application</button></>
      )}
      </form>
       {/* Loading Spinner */}
       {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Sending...</p>
        </div>
      )}
</div>

</div></>


    
  );
}

export default ModelCall;