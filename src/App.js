import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBars/Navbar";
import Hero from "./Components/Heros/Hero";
import OurWork from "./Components/OurWorks/OurWork";  // Use uppercase 'W' here
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
         
        </Routes>
        <OurWork />
      </>
    </Router>
  );
}

export default App;

