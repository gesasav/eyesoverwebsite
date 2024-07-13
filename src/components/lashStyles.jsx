// import React, { useState } from 'react';

// export const Features = (props) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Lash styles</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div
//                   key={`${d.title}-${i}`}
//                   className="col-xs-6 col-md-3 feature-item"
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <img src={d.icon} className={d.icon} alt={d.title} />
//                   <h3>{d.title}</h3>
//                   {/* <p>{d.text}</p> */}
//                   {hoveredIndex === i && (
//                     <div className="gallery-popup">
//                       <button className="close-button" onClick={() => setHoveredIndex(null)}>×</button>
//                       <h3>{d.title} lashes</h3> {/* Title shown in the popup */}
//                       <div className="gallery-content">
//                         {d.galleryImages.map((img, j) => (
//                           <img key={j} src={img} className="gallery-img" alt={`Gallery ${j}`} />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";

export const Features = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerRow = 3;
  const numRows = 2;
  const totalItemsPerPage = itemsPerRow * numRows;

  const totalPages = Math.ceil((props.data?.length || 0) / totalItemsPerPage);

  const nextSlide = () => {
    // Check if all items in the next row are populated
    let canAdvance = true;
    for (let i = 0; i < itemsPerRow; i++) {
      const indexToCheck = currentIndex + itemsPerRow + i;
      if (!props.data[indexToCheck]) {
        canAdvance = false;
        break;
      }
    }

    if (canAdvance) {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerRow >= (props.data?.length || 0) ? 0 : prevIndex + itemsPerRow
      );
    }
  };

  const prevSlide = () => {
    // Determine if previous button should be enabled
    const isFirstItemInData = currentIndex === 0;

    if (isFirstItemInData) {
      // Disable prevSlide if already at the beginning of the dataset
      return;
    }

    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerRow < 0
        ? (totalPages - 1) * totalItemsPerPage
        : prevIndex - itemsPerRow
    );
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Lash Styles</h2>
          <a
            href="https://www.instagram.com/eyesover.aesthetics?igsh=MXVnaW5wZm9iOTR0aQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <p>@eyesoveraesthetics</p>
          </a>
        </div>
        <div className="row">
          <div className="lashStyles-items">
            {Array.from({ length: numRows }, (_, rowIndex) => (
              <div key={rowIndex} className="row">
                {Array.from({ length: itemsPerRow }, (_, itemIndex) => {
                  const dataIndex =
                    currentIndex + rowIndex * itemsPerRow + itemIndex;
                  const item = props.data && props.data[dataIndex]; // Check for props.data

                  if (item) {
                    return (
                      <div
                        key={`${item.title}-${dataIndex}`}
                        className="col-sm-6 col-md-4 col-lg-4 lashStyles-item"
                      >
                        {item.mediaType === "image" && (
                          <a
                            href={item.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lashStyles-link"
                          >
                            <div className="image-container">
                              <img
                                src={item.smallImage}
                                alt={item.title}
                                className="img-responsive"
                              />
                              <div className="overlay">
                                <div className="title">{item.title}</div>
                              </div>
                            </div>
                          </a>
                        )}
                        {item.mediaType === "video" && (
                          <div className="video-container">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="video-responsive"
                            >
                              <source src={item.videoUrl} type="video/mp4" />
                            </video>
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={`blank-${rowIndex}-${itemIndex}`}
                        className="col-sm-6 col-md-4 col-lg-4 lashStyles-item"
                      ></div>
                    );
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Slider Arrows */}
      <div className="slider-arrows">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};