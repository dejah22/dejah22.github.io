import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, desc, img, github }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -15,
        scale: 1.1,
        boxShadow: "0 15px 30px rgba(200, 150, 255, 0.45)",
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 40,
      }}
    >
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={github} className="github-link">
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
