import React from "react";
import Hero from "../../Component/Hero/Hero";
import About from "../../Component/AboutUs/About";
import Navbar from "../../Component/Navbar/Navbar";
export const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About /> 
    </div>
  );
};

