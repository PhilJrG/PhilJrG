import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Values from "./components/Values";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrayerRequest from "./components/PrayerRequest";
import Donate from "./components/Donate";
import LiveStream from "./components/LiveStream";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Values />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pray" element={<PrayerRequest />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/live" element={<LiveStream />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;