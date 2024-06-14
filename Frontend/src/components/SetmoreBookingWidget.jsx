import React, { useEffect } from 'react';

export const SetmoreBookingWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.id = 'setmore_script';
    script.type = 'text/javascript';
    script.src = 'https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js';
    document.body.appendChild(script);

    // Create anchor element
    const anchor = document.createElement('a');
    anchor.id = 'Setmore_button_iframe';
    anchor.href = 'https://booking.setmore.com/scheduleappointment/6694bf83-dfd0-4f29-9109-820f748278a8';
    anchor.style.cssText = 'float:none;position:fixed;right:-2px;top:25%;display:block;z-index:20000';

    // Create image element
    const img = document.createElement('img');
    img.border = 'none';
    img.src = 'https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png';
    img.alt = 'Click here to book the appointment using setmore';
    img.style.cssText = 'width:40px;height:auto';

    // Append image to anchor and anchor to body
    anchor.appendChild(img);
    document.body.appendChild(anchor);

    // Cleanup function to remove elements when component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(anchor);
    };
  }, []);

  return null; 
};

