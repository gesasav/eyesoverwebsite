import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/lashStyles";
import { About } from "./components/about";
//import { Services } from "./components/products";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/reviews";
// import { Team } from "./components/lashMaps";
import { SetmoreBookingWidget } from "./components/SetmoreBookingWidget";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <SetmoreBookingWidget/>
      
    </div>
    
  );
};

export default App;
