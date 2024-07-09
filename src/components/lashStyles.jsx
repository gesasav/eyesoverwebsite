import React, { useState } from 'react';

export const Features = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Lash styles</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 feature-item"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={d.icon} className={d.icon} alt={d.title} />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {hoveredIndex === i && (
                    <div className="gallery-popup">
                      <button className="close-button" onClick={() => setHoveredIndex(null)}>×</button>
                      <h3>{d.title} lashes</h3> {/* Title shown in the popup */}
                      <div className="gallery-content">
                        {d.galleryImages.map((img, j) => (
                          <img key={j} src={img} className="gallery-img" alt={`Gallery ${j}`} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

