import React, { useState } from "react";

export const Services = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="row">
            <img
              src="img/Waitlist.png"
              alt="Products"
              style={{
                width: "100%",  
                height: "auto",
                borderRadius: "8px",
                marginTop: "20px",
                paddingBottom: "20px"
              }}
            />
        </div>
        {showPopup && (
  <div
    className="popup-overlay"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      className="popup-content"
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        position: "relative",
        width: "90%", // Use percentage for responsive width
        maxWidth: "600px", // Set a max-width for larger screens
        boxSizing: "border-box", // Ensure padding is included in width
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={togglePopup}
      >
        ×
      </button>

      {/* Mailchimp Form */}
      <div id="mc_embed_shell">
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
          {`
            #mc_embed_signup {
              clear: left;
              font: 14px Helvetica, Arial, sans-serif;
              width: 100%; // Make it responsive
              max-width: 600px; // Set max-width for larger screens
            }
          `}
        </style>
        <div id="mc_embed_signup">
          <form
            action="https://eyesoveraesthetics.us20.list-manage.com/subscribe/post?u=ef26ed3a7370defca102a1fca&amp;id=8a57d06d74&amp;f_id=009708e3f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                  style={{ width: "100%" }} // Make input fields responsive
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name</label>
                <input
                  type="text"
                  name="FNAME"
                  className="text"
                  id="mce-FNAME"
                  style={{ width: "100%" }} // Make input fields responsive
                />
              </div>
              <div hidden="">
                <input type="hidden" name="tags" value="3986857" />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_ef26ed3a7370defca102a1fca_8a57d06d74"
                  tabIndex="-1"
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                  style={{
                    width: "100%", // Make submit button responsive
                    fontSize: "16px",
                    backgroundColor: "#F5F3ED",
                    color: "black",
                    border: "none",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

        <button className="page-scroll" onClick={togglePopup}   style={{
    all: "unset", // Resets all default button styles
    cursor: "pointer", // Ensures it still looks clickable
    width: "100%",
  }}>
         <div className="scrolling-text" style={{ textDecoration: "none", color: "#000", fontSize: "19px", fontStyle: "italic", fontWeight:"bold"}}>
          <span>SIGN UP TO THE WAITLIST TODAY!</span>
        </div>
        </button>
      </div>
    </div>
  );
};

