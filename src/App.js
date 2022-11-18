import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [currTab, setCurrTab] = useState("Home")

  return (
    <div>
      <Router>
        <Navbar currTab={currTab} setCurrTab={setCurrTab}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;