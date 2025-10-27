import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import profilePic from "../assets/profile.jpeg";
import dancePic from "../assets/dance-profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const isDancePage = location.pathname.includes("/dance");
  return (
    <div className={`sidebar${isDancePage ? "-dance" : ""}`}>
      <div className="profile-section">
        <div className={`profile-pic-wrapper${isDancePage ? "-dance" : ""}`}>
          <img
            src={isDancePage ? dancePic : profilePic}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <p className="name">Dejah Madhusankar</p>
        <p className="bio">
          • Student Researcher • Engineer • Dancer <br />
          Exploring the intersection of AI, movement, and emotion.
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
