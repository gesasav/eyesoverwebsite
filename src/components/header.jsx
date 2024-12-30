import React, { useRef, useEffect } from "react";

export const Header = (props) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create script element for Setmore
    const script = document.createElement("script");
    script.id = "setmore_script";
    script.type = "text/javascript";
    script.src = "https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js";
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBookingClick = () => {
    window.open(
      "https://booking.setmore.com/scheduleappointment/6694bf83-dfd0-4f29-9109-820f748278a8",
      "_blank"
    );
  };

  return (
    <header id="header" style={{ position: "relative" }}>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
                <button
                  className="btn btn-next btn-custom btn-lg page-scroll"
                  onClick={handleBookingClick}
                  ref={buttonRef}
                >
                  Book now
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
