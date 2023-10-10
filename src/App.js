import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import Fleet from "./Pages/Fleet/Fleet";
import Home from "./Pages/Home/Home";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Services from "./Pages/Services/Services";
import "./styles.css";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/getting-started-with-framer-motion
 */
export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/our_team" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
