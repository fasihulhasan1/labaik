import React from "react";
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Facility from "./components/Facility"
import Footer from "./components/Footer";

const App = ()=>{

  return(
    <div className={`bg-gradient-to-r from-[#5594be] to-[#dd5243] min-h-screen min-w`}>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={"staff"} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;