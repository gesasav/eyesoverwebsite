import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DownloadPage.css'


const DownloadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    <form className="model-form" id="model-form" onSubmit={(e) => e.preventDefault()}>
  <div className="guide-header">
    <p className="subheading">YOUR</p>
    <h2>ultimate guide to</h2>
    <h1>WISPY LASH SETS WITH CLASSICS FOR BEGINNERS & PROS</h1>
  </div>
  <p>Inside, you’ll learn how to identify different lash layers, place extensions for maximum impact, and build custom styles that flatter every client.</p>
  <p>Whether you're new to lashing or want to refine your technique, this guide will help you layer with confidence and intention.</p>
  <strong>Download your free copy now and start transforming your lash sets today.</strong>

  <label>Full Name:</label>
  <input type="text" name="fullName" required id="fullName" />
  <label>Phone Number:</label>
  <input type="tel" name="phone" required id="phone" />
  <label>Email Address:</label>
  <input type="email" name="email" required id="email" />


<button
  className="cta-button"
  onClick={async (e) => {
    e.preventDefault(); // prevent form submission
    const email = document.getElementById("email").value;
    const name = document.getElementById("fullName").value;

    if (!email && !name) {
      alert("Please fill in your name and email before downloading.");
      return;
    }
    if (!email) {
        alert("Please fill in your email before downloading.");
        return;
      }
      if (!name) {
        alert("Please fill in your name before downloading.");
        return;
      }

    setIsLoading(false);
    alert("Thank you for downloading!.");

    setTimeout(() => {
        window.location.href = "/";
      }, 2000);

    try {
        const link = document.createElement("a");
        link.href = "https://eyesoveraesthetics.co.uk/Ebooks/WispyE-book.pdf";
        link.download = "WispyEbook.pdf"; // Forces file download (not open in tab)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {

    }
  }}
>
 Download E-Book
</button></form>

       {/* Loading Spinner */}
       {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Sending...</p>
        </div>
      )}
</div>
  </div>
</div>

</div></>


    
  );
}

export default DownloadPage;