import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, desc, img, github, tools }) => {
  return (
    <motion.div
      className="project-card"
      // uncomment when you wanna let it loose :P
      /*
      whileHover={{
        y: -15,
        scale: 1.1,
        boxShadow: "0 15px 30px rgba(210, 160, 100, 0.45)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: -1,
      }}
        */
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
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
        {/* {desc}</p> */}

        {/* 🧩 Skills / Tools section */}
        {tools.length > 0 && (
          <div className="tool-tags">
            {tools.map((tool, index) => (
              <span key={index} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        )}
        <a href={github} className="github-link">
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
