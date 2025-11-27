import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Dance from "./components/Dance";
// import Blog from "./components/Blog";
import "./App.css";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/dance" element={<Dance />} />
            {/* <Route path="/certifications" element={<div>Certifications</div>} /> */}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
