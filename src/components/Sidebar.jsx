import React from "react";
import "../styles/Sidebar.css";
// import profilePic from "../../assets/profile.jpg"; // your image file
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
        <p className="name">Dejah Madhusankar</p>
        <p className="bio">
          Researcher • Dancer • Developer <br />
          Exploring the intersection of AI, creativity, and emotion.
        </p>
      </div>

      <div className="contact-section">
        <a href="https://github.com/yourgithub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin">
          <FaLinkedin />
        </a>
        <a href="mailto:yourmail@example.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
