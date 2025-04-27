import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import './DownloadPage.css'


const DownloadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
const [fullName, setFullName] = useState("");

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
    </div> 
    <div className="container my-5">
   <div className="model-slot-container">
  <div className="info-section">
    <div className="info-block">
    <img class="intro-image-download" src="/images/ebook-cover.jpg" alt="Zeynep" />
    </div>
    <div className="info-block">
    <div className="form-wrapper">
    {isLoading ? (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Sending...</p>
    </div>
  ) : (
    <form className="model-form" id="model-form" onSubmit={(e) => e.preventDefault()}>

  <div className="guide-header">
    <p className="subheading">YOUR</p>
    <h2>ultimate guide to</h2>
    <h1>WISPY LASH SETS WITH CLASSICS FOR BEGINNERS & PROS</h1>
  </div>
  <p>Inside, you’ll learn how to identify different lash layers, place extensions for maximum impact, and build custom styles that flatter every client.</p>
  <p>Whether you're new to lashing or want to refine your technique, this guide will help you layer with confidence and intention.</p>
  <strong>Download your free copy now and start transforming your lash sets today.</strong>

  <label>Full Name: <span className="required-indicator">*</span> </label>
  <input type="text" name="fullName" required id="fullName" value={fullName}
  onChange={(e) => setFullName(e.target.value)}/>
  <label>Phone Number:</label>
  <input type="tel" name="phone" required id="phone" />
  <label>Email Address: <span className="required-indicator">*</span></label>
  <input type="email" name="email" required id="email"  value={email}
  onChange={(e) => setEmail(e.target.value)}/>

  <button
  type="button"
  className="cta-button-download"
  disabled={!email.trim() || !fullName.trim()} 
  onClick={(e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById("email").value.trim();
    const fullNameInput = document.getElementById("fullName").value.trim();
    const form = document.getElementById("model-form");

    if (!emailInput || !fullNameInput) {
      alert("Please fill in your name and email before downloading.");
      return;
    }
    if (!emailInput ) {
        alert("Please fill in your email before downloading.");
        return;
      }

      if (!fullNameInput) {
        alert("Please fill in your name before downloading.");
        return;
      }


    // ✅ Immediately open PDF (MOBILE SAFE)
    window.open("https://eyesoveraesthetics.co.uk/Ebooks/WispyE-book.pdf", "_blank");

    // ✅ Then after that, start async work
    setIsLoading(true);

    emailjs.sendForm(
      "service_8bk6yra",
      "template_7luj9v8",
      form,
      "1l53LXLP3GtXelnpL"
    )
    .then(() => {
      setIsLoading(false);
      alert("Thank you! Your eBook download has started.");
      setTimeout(() => {
        window.location.href = "/";
      }, 20);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error("EmailJS submission failed:", error);
      alert("Something went wrong. Please try again.");
    });
  }}
>
  Download E-Book
</button>



    </form> )}
    </div>
</div>
  </div>
</div>

</div></>


    
  );
}

export default DownloadPage;