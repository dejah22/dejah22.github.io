import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import noteAppPic from "../assets/noteApp.png";
import carbonFootprintPic from "../assets/carbonFootprint.png";
import nmapPic from "../assets/nmap.png";
import digitalPaperNotesPic from "../assets/digitalPaperNotes.jpg";
import wordDevilPic from "../assets/wordDevil.png";
import personalPortfolioPic from "../assets/personalPortfolioPic.jpg"
import { CiTextAlignLeft } from "react-icons/ci";

const Projects = () => {
  const projects = [
    {
      title:
        "Cutesy Digital Paper-pad with Animated Writing and Scratch Sounds",
      desc: "As users type, text is rendered as animated handwriting strokes on digital lined paper, while synchronized pencil scratch audio creates the illusion of physically writing on a notebook. Tech used: React, Tailwind CSS, Typescript, Howler.js",
      img: digitalPaperNotesPic,
      github: "https://github.com/dejah22/digital_paper_notes",
    },
    {
      title: "NetMapper",
      desc: "Practical Experiments in Network Protocols and Attacks (Similar to Nmap). Tech used: C/C++, POSIX Networking APIs",
      img: nmapPic,
      github: "https://github.com/dejah22/NetMapper",
    },
    {
      title: "Pretty Notes app",
      desc: "An intuitive, minimalist and visually appealing note-making app for seamless note-taking. Tech used: React, CSS, Springboot, Axios",
      img: noteAppPic,
      github: "https://github.com/dejah22/Pretty_Notes-FE",
    },
    {
      title: "Carbon Footprint Tracker",
      desc: "End-to-end browser app that calculates and tracks your carbon footprint, with the aim of fostering a greener planet. Tech used: Apache Tomcat Servlet Container, Java, MySQL, HTML, CSS",
      img: carbonFootprintPic,
      github: "https://github.com/dejah22/Carbon-Footprint-Tracker",
    },
    {
      title: "Word devil",
      desc: "A spooky twist to the popular game Hangman, built using primitive Turbo C++ during my school days!. Tech used: Turbo C++",
      img: wordDevilPic,
      github: "https://github.com/dejah22/Word-Devil",
    },
    {
      title: "Live Pose Estimation and Feedback for Bharatanatyam Dance Poses",
      desc: "This project uses computer vision and AI-based similarity scoring to evaluate Bharatanatyam dance postures in real-time. By normalizing human body landmarks, the system provides pose-invariant comparisons and dynamic feedback to learners and practioners. Switch on your webcam and strike a pose!. Tech used: Python, MediaPipe, OpenCV, Numpy, TensorFlow.",
      img: wordDevilPic,
      github: "https://github.com/dejah22/live-pose-estimation-feedback-for-dance-poses",
    },
    {
      title: "Personal Portfolio",
      desc: "A modern, responsive personal portfolio website built to showcase my projects, skills, and experience. The portfolio serves as a central hub where visitors can learn more about me, explore my work, and get in touch. Tech used: React, Vite, CSS",
      img: personalPortfolioPic,
      github: "https://github.com/dejah22/dejah22.github.io",
    },
  ];

  return (
    <div>
      <h1
        style={{
          padding: "8rem 3rem 0rem 3rem",
          fontFamily: "Poppins",
          fontSize: "2rem",
          textAlign: "left",
          color: "#3d2b1f",
        }}
      >
        Personal Projects
      </h1>
      <motion.div
        className="page-container"
        style={{ padding: "0rem 5rem 0rem 3rem" }}
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
    </div>
  );
};

export default Projects;
