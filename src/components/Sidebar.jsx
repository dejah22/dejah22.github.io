import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import profilePic from "../assets/profile.jpeg";
import dancePic from "../assets/dance-profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

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
          Exploring the intersection of AI, dance, and emotion.
        </p>
      </div>

      <div className="contact-section">
        <a href="https://github.com/dejah22">
          <FaGithub />
        </a>
        <a href="https://scholar.google.com/citations?user=10rvNFUAAAAJ&hl=en&oi=ao">
          <FaGoogleScholar size={20} />
        </a>
        <a href="https://www.linkedin.com/in/dejah-madhusankar/">
          <FaLinkedin />
        </a>
        <a href="mailto:dejah9465@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.youtube.com/@ThaalamIndia">
          <FaYoutube size={20} />
        </a>
      </div>
      <footer
        style={{
          textAlign: "right",
          padding: "1rem 1rem",
          fontSize: "0.8rem",
          color: "#3a2d1fff",
          opacity: 0.7,
        }}
      >
        © 2025 Dejah Madhusankar. All rights reserved.
      </footer>
    </div>
  );
};

export default Sidebar;
