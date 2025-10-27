import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
// import proj1 from "../assets/project1.jpg";
// import proj2 from "../assets/project2.jpg";
// import proj3 from "../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Caption Generator",
      desc: "Real-time system that generates scene-aware captions.",
      //   img: proj1,
      github: "https://github.com/yourusername/ai-caption-generator",
    },
    {
      title: "Dance Pose Estimator",
      desc: "ML model trained to recognize classical dance postures from.",
      //   img: proj2,
      github: "https://github.com/yourusername/dance-pose-estimator",
    },
    {
      title: "Emotion Classifier",
      desc: "NLP-based multi-label classifier for emotional tone detection in Urdu text.",
      //   img: proj3,
      github: "https://github.com/yourusername/emotion-classifier",
    },
  ];

  return (
    <motion.div
      className="page-container"
      style={{ padding: "10rem 5rem 0rem 3rem" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
