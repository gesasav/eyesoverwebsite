// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Booking from "./pages/Booking";
import ModelCall from "./pages/ModelCall";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/model-call" element={<ModelCall />} />
        <Route path="/download-page" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
