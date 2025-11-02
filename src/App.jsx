import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Dance from "./components/Dance";
// import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/dance" element={<Dance />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/certifications" element={<div>Certifications</div>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
