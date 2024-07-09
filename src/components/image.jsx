import React from "react";

export const Image = ({ smallImage, permalink, mediaType }) => (
  <div className="image-container">
    <a href={permalink} target="_blank" rel="noopener noreferrer">
      {mediaType === 'VIDEO' || mediaType === 'REEL' ? (
        <video 
          src={smallImage} 
          className="img-responsive" 
          autoPlay 
          loop 
          muted 
          playsInline 
          controls
        />
      ) : (
        <img src={smallImage} alt="Instagram media" className="img-responsive" />
      )}
    </a>
  </div>
);
