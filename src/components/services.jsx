import React from "react";
import { useState } from "react";

export const Services = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === props.data.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.data.length - 3 : prevIndex - 1));
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
        {props.data
          ? props.data.slice(currentIndex, currentIndex + 3).map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          : "loading"}
        </div>
        <div className="slider-arrows">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      </div>
    </div>
  );
};
