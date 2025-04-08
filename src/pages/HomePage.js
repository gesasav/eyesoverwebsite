import React, { useState } from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';
import MailchimpForm from "../components/MailchimpForm";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="homepage-container">
    <header className="header">
    <nav className="nav">
  <div className="logo-container">
    <img className="logo-image" src="/images/logo_green.jpg" alt="Zeynep" />
  </div>

  <div className="nav-links">
    <Link to="/" className="nav-link" id="home-link">
      Home
    </Link>
    <a href="tel:+447787142131" className="nav-link" id="contact-link">
  Contact
</a>
  </div>
</nav>
</header>


      <section className="intro">
        <div className="intro-text">
          <h2>WELCOME TO EYESOVER AESTHETICS</h2>
          <h3>WHERE BEAUTY MEETS BUSINESS GROWTH</h3>
          <img class="intro-image mobile-only" src="/images/zeynep.jpg" alt="Zeynep" />
          <p>Hello, I’m Zeynep. I’ve been in the beauty industry for 4+ years. My <strong>mission is to empower</strong> beauty professionals like <em>you</em> to turn passion into profit with expert guidance, digital tools and resources designed to <strong>elevate</strong> your beauty career just like I have.</p>
          <p>Whether you're looking to <strong>sharpen</strong> your skills, <strong>scale</strong> your business or step confidently into the <strong>digital world</strong>, your success starts here.</p>
          
          <p className="highlight">I’ve done the hard work so you can skip the guesswork and focus on growing your lash business.</p>
          <p className="long-text">Starting a lash business is very exciting, turning your passion into a profession and watching your vision come to life each day is an incredible feeling. 
                                    However, if you ask me becoming a lash artist is the easy part, the real challenge starts after. 

                                    The part where you have to stay consistent, keep the business running, stay motivated and continue improving your skills.
                                    Success in this industry isn’t just about mastering techniques, it’s also about learning how to market yourself, attract clients and stay ahead of trends.</p>                                  
        </div>
        <div className="image">
          <img className="intro-image desktop-only" src="/images/zeynep.jpg"  alt="Zeynep" />
        </div>
        </section>

        <section className="cta-section">

        <h2>Unleash Your <em>True Potential</em></h2>
        <button onClick={() => setShowForm(true)} className="cta-button">SHOP MY DIGITAL PRODUCTS</button>
      </section>

      <section className="banner">
      <div className="image">
          <img className="intro-image" src="/images/banner.jpg" alt="Zeynep" />
        </div>
      <p>EYESOVER AESTHETICS</p>
      <div className = "logo">
      <a href="https://www.instagram.com/eyesover.aesthetics?igsh=MXVnaW5wZm9iOTR0aQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:enquiries@eyesoveraesthetics.com">
  <i className="fa fa-envelope"></i> Email Us
</a>

        <a href="https://www.tiktok.com/@eyesoverr?_t=8nutQhwkAPR&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
      </div>
      </section>
      
      <section className="services">
      <div className="appointment">
        <div className="text_app">
        <h3>Appointments</h3>
        <p>You’re just a few clicks away from booking your customised lash appointments or 1:1 trainings here.</p>
        <a href="https://booking.setmore.com/scheduleappointment/6694bf83-dfd0-4f29-9109-820f748278a8"><button className="outline-button">BOOK NOW</button></a>
        </div>
        <div className="image_app">
          <img src="images/appointment.jpg" alt="Lash appointment" className="appointment-image" />
        </div>
      </div>

      <div className="model-call">
      <div className="text_model">  <h3>Model Call</h3>
        <p>Are you ready to be part of an exclusive lash transformation? I’m looking for models every so often to refine new lash styles and techniques.</p>
        <Link to="/model-call">
        <button className="outline-button">APPLY NOW</button>
      </Link>
        </div>
      <div className="image_model"><img src="/images/model.jpg" alt="Model" className="model-image" /></div>
      </div>
  
  <div className="digital-products">
  <div className="text_digital"> <h3>Digital Products</h3>
    <p>Take your lash career to the next level with my specifically crafted digital products designed to help you grow, learn, and succeed.</p>
    <button onClick={() => setShowForm(true)} className="outline-button">SHOP NOW</button>
    </div>
  <div className="image_digital"> <img src="/images/ebook.jpg" alt="E-book" className="ebook-image" /></div>
  </div>
</section>

<div className="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Eyesover aesthetics. Design by{" "}
            <a
            style={{ textDecoration: 'none', color: 'white' }} 
              href="www.linkedin.com/in/orgesasvarca"
              rel="nofollow"
            >
              Orgesa Svarca
            </a>
          </p>
          <p>
          <a style={{ textDecoration: 'none',  color: 'white' }}  href="/privacypolicy.html">Privacy Policy</a>
              </p>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowForm(false)}>
              ✕
            </button>
            <MailchimpForm />
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;
