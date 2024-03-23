import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Eyes from "./components/Eyes.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  );
}

export default App;
