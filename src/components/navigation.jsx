import React, { useEffect } from "react";

export const Navigation = (props) => {
  useEffect(() => {
    const navbar = document.querySelector("#menu");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    const observerOptions = {
      root: null,
      rootMargin: `-${navbarHeight}px 0px 0px 0px`,
      threshold: 0.25,  // Adjust as needed for better results
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLink) {
            navLink.classList.add("active");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
          </button>
          <div className="navbar-brand-container">
            <div className="navbar-icons-left">
              <a href="https://www.instagram.com/eyesover.aesthetics?igsh=MXVnaW5wZm9iOTR0aQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@eyesoverr?_t=8nutQhwkAPR&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
            <a className="navbar-brand page-scroll" href="#page-top">
              EYESOVER <span className="brand-subtext">AESTHETICS</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Lash styles
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
