import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { useState } from 'react';

function App() {
  const [currTab, setCurrTab] = useState("Home")

  return (
    <div>
      <Router>
        <Navbar currTab={currTab} setCurrTab={setCurrTab}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About currTab={currTab} setCurrTab={setCurrTab} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
