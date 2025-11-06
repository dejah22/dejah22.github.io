import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import noteAppPic from "../assets/noteApp.png";
import carbonFootprintPic from "../assets/carbonFootprint.png";
import nmapPic from "../assets/nmap.png";
import digitalPaperNotesPic from "../assets/digitalPaperNotes.jpg";
import wordDevilPic from "../assets/wordDevil.png";
import personalPortfolioPic from "../assets/personalPortfolioPic.jpg"
import musicAutoSkipperPic from "../assets/musicAutoSkipperPic.png"
import { CiTextAlignLeft } from "react-icons/ci";

const Projects = () => {
  const projects = [
    {
      title:
        "Digital Paper-pad with Animated Writing and Interactive Sounds",
      desc: "As users type, text is rendered as animated handwriting strokes on digital lined paper, while synchronized pencil scratch audio creates the illusion of physically writing on a notebook. Tech used: React, Tailwind CSS, Typescript, Howler.js",
      img: digitalPaperNotesPic,
      github: "https://github.com/dejah22/digital_paper_notes",
    },
    {
      title: "NetMapper",
      desc: "An Nmap clone that simulates popular Network Protocols and Attack. Tech used: C/C++, POSIX Networking APIs",
      img: nmapPic,
      github: "https://github.com/dejah22/NetMapper",
    },
    {
      title: "Pretty Notes app",
      desc: "End-to-end note-making app similar to Google Keep. Tech used: React, CSS, Springboot, Axios",
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
      desc: "Real-time intelligent tutor for perfecting Bharatanatyam poses.  Identifies and matches poses while providing live feedback with corrections. Switch on your webcam and strike a pose!. Tech used: Python, MediaPipe, OpenCV, Numpy, TensorFlow.",
      img: wordDevilPic,
      github: "https://github.com/dejah22/live-pose-estimation-feedback-for-dance-poses",
    },
    {
      title: "Personal Portfolio",
      desc: "My personal portfolio website to showcase my projects, skills, and experience. Tech used: React, Vite, CSS",
      img: personalPortfolioPic,
      github: "https://github.com/dejah22/dejah22.github.io",
    },
    {
      title: "Automatic Music Skipper",
      desc: "An Android app that automatically skips songs on YouTube Music or Spotify after a specified percentage of playback.",
      img: musicAutoSkipperPic,
      github: "https://github.com/dejah22/AutomaticMusicSkipper",
    }
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
