import React from "react";

export const Navigation = (props) => {
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
              {/* <li>
                <a href="#services" className="page-scroll">
                  Products
                </a>
              </li> */}
              {/* <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li> */}
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Reviews
                </a>
              </li> */}
              {/* <li>
                <a href="#team" className="page-scroll">
                  Lash Maps
                </a>
              </li> */}
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
