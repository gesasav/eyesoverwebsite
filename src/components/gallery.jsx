import React, { useEffect, useState } from "react";
import { Image } from "./image";
import { fetchInstagramMedia } from "./fetchInstagramContent";

export const Gallery = () => {
  const [mediaData, setMediaData] = useState(null);
  const accessToken = "IGQWRNUUVtSmMzNkxMZAkFoQ2NIdzZAXM3AtZAmVVanZAwd3Fpc1RNM2IzaWs1c2FFS1B2NjRzcjNuUV9FX0w5eG1na2ZA0RHZAnWXhZATEpDTnVkNHJEQklJM0VrYW1aQlQ4T0p3M25NNy0tMS1qaHNXX3p4SkRNWHN0V252Q0s1bzc3VzZA4QQZDZD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaItems = await fetchInstagramMedia(accessToken);
        setMediaData(mediaItems);
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <a
            href="https://www.instagram.com/eyesoveraesthetics/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <h2>
              Follow us on Instagram <i className="fab fa-instagram"></i>
            </h2>
            <p>@eyesoveraesthetics</p>
          </a>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {mediaData
              ? mediaData.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image 
                      smallImage={d.smallImage} 
                      permalink={d.permalink} 
                      mediaType={d.media_type}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};