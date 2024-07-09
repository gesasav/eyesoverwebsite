import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [state, setState] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const googleMapsUrl = `https://www.google.com/maps?q=MapeltonCrescentEnfield&output=embed`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    emailjs
      .sendForm("service_8bk6yra", "template_7luj9v8", e.target, "1l53LXLP3GtXelnpL")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setIsSubmitted(true); // Set submission status to true on success
          setIsLoading(false); // Hide loading spinner
          setTimeout(() => setIsSubmitted(false), 20000); // Revert to form after 30 seconds
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false); // Hide loading spinner on error
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                {!isSubmitted && !isLoading && (
                    <p>
                      Please fill out the form below to send us an email and we will
                      get back to you as soon as possible.
                    </p>
                )}
              </div>
              {isLoading ? (
                <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading...</p>
              </div>
              ) : (
                <>
                  {isSubmitted ? (
                    <div className="thank-you-message">
                      <h3>Thanks! We will be in touch soon.</h3>
                    </div>
                  ) : (
                    <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Name"
                              required
                              value={state.name}
                              onChange={handleChange}
                            />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                              required
                              value={state.email}
                              onChange={handleChange}
                            />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="4"
                          placeholder="Message"
                          required
                          value={state.message}
                          onChange={handleChange}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                      <div id="success"></div>
                      <button type="submit" className="btn btn-custom btn-lg">
                        Send Message
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
          <h3>Contact Info</h3>
          <div className="address-container">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i>  Address
                </span>{" "}
              </p>
              <div className="map-container">
                <iframe
                  className="responsive-iframe"
                  loading="lazy"
                  allowFullScreen
                  src={googleMapsUrl}
                ></iframe>
              </div>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Eyesover aesthetics. Design by{" "}
            <a href="www.linkedin.com/in/orgesasvarca" rel="nofollow">
              Orgesa Svarca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
