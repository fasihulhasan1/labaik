import React from "react";
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

const App = ()=>{

  return(
    <div className={`bg-gradient-to-r from-[#5594be] to-[#dd5243] min-h-screen min-w`}>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={"staff"} />
        <Route path="/facility" element={"facility"} />
        <Route path="/about" element={"about"} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;