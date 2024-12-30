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
                      width: "600px",
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
                            false;
                            clear: left;
                            font: 14px Helvetica, Arial, sans-serif;
                            width: 600px;
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
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-FNAME">First Name</label>
                              <input
                                type="text"
                                name="FNAME"
                                className="text"
                                id="mce-FNAME"
                              />
                            </div>
                            <div hidden=""><input type="hidden" name="tags" value="3986857"/></div>
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
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <script
                      type="text/javascript"
                      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                    ></script>
                    <script
                      type="text/javascript"
                    >{`
                        (function($) {
                          window.fnames = new Array();
                          window.ftypes = new Array();
                          fnames[0] = 'EMAIL';
                          ftypes[0] = 'email';
                          fnames[1] = 'FNAME';
                          ftypes[1] = 'text';
                          fnames[4] = 'PHONE';
                          ftypes[4] = 'phone';
                          fnames[2] = 'LNAME';
                          ftypes[2] = 'text';
                          fnames[3] = 'ADDRESS';
                          ftypes[3] = 'address';
                          fnames[5] = 'BIRTHDAY';
                          ftypes[5] = 'birthday';
                          fnames[6] = 'COMPANY';
                          ftypes[6] = 'text';
                        })(jQuery);
                        var $mcj = jQuery.noConflict(true);
                    `}</script>
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

