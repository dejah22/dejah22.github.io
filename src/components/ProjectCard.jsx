import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, desc, img, github }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(106,90,205,0.15)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
