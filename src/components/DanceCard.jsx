import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube } from "react-icons/fa";
import "../styles/ProjectCard.css";
import danceCover from "../assets/dance-cover-ann.jpg";

const DanceCard = ({ title, desc, img, youtube }) => {
  return (
    <motion.div
      className="dance-card"
      whileHover={{
        y: -15,
        scale: 1.1,
        boxShadow: "0 15px 30px rgba(176, 132, 78, 0.45)",
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 3,
      }}
    >
      <img src={img} alt={title} />
      <div className="dance-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        {youtube && (
          <a href={youtube} className="youtube-link">
            <FaYoutube color="red" size={30} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default DanceCard;
