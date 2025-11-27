import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import noteAppPic from "../assets/noteApp.png";
import carbonFootprintPic from "../assets/carbonFootprint.jpg";
import nmapPic from "../assets/nmap.png";
import digitalPaperNotesPic from "../assets/digitalPaperNotes.jpg";
import wordDevilPic from "../assets/wordDevil.png";
import personalPortfolioPic from "../assets/portfolio.png";
import musicAutoSkipperPic from "../assets/musicAutoSkipperPic.png";
import skeleton from "../assets/skeleton.jpeg";
import videoCaptionProjPic from "../assets/VideoCaptionProjPic.jpg";
import emotionProjPic from "../assets/EmotionProjPic.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "NetMapper",
      desc: "A from-scratch Nmap clone that simulates popular Network Protocols and performs active and passive attacks. Use it at your own risk!",
      img: nmapPic,
      github: "https://github.com/dejah22/NetMapper",
      tools: ["C/C++", "Socket Programming", "OS/Networks", "UNIX Scripting"],
    },
    {
      title: "PosePerfect",
      desc: "Real-time AI tutor for perfecting your classical dance pose! Identifies, matches and fixes your poses with live feedback",
      img: skeleton,
      github:
        "https://github.com/dejah22/live-pose-estimation-feedback-for-dance-poses",
      tools: ["Python", "OpenCV", "TensorFlow", "Mediapipe", "NumPy"],
    },
    {
      title: "Video Descriptor",
      desc: `Streamlit app that deploys the DL architecture (from my <a href="../#/research">paper</a>) to generate captions for user-uploaded videos.`,
      img: videoCaptionProjPic,
      github: "https://github.com/dejah22/Video-Descriptor",
      tools: ["Python", "OpenCV", "Streamlit", "TensorFlow", "Deep learning"],
    },
    {
      title: "EmotiNet - Affective Dataset Generation & Annotation",
      desc: "Full-stack ML system that autonomously generates structured, emotion-labeled datasets from live facial video input.",
      img: emotionProjPic,
      github: "https://github.com/dejah22/EmotiNet",
      tools: ["Python", "Flask", "OpenCv", "TensorFlow"],
    },
    {
      title: "Carbon Footprint Tracker",
      desc: "End-to-end app that calculates and tracks your carbon footprint, with the aim of fostering a greener planet",
      img: carbonFootprintPic,
      github: "https://github.com/dejah22/Carbon-Footprint-Tracker",
      tools: [
        "Java",
        "Tomcat JDBC Servlets",
        "MySQL",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      title: "Automatic Music Skipper",
      desc: "An Android app that automatically skips songs on YouTube Music or Spotify after a specified percentage of playback.",
      img: musicAutoSkipperPic,
      github: "https://github.com/dejah22/AutomaticMusicSkipper",
      tools: ["Java", "Android Studio"],
    },

    {
      title: "NoteBoard",
      desc: "Minimalistic Note-Making app to pin up your quick notes, similar to Google Keep",
      img: noteAppPic,
      github: "https://github.com/dejah22/Pretty_Notes-FE",
      tools: ["React", "Java SpringBoot", "PostgreSQL", "Docker", "Typescript"],
    },
    {
      title: "Word devil",
      desc: "A spooky twist to the popular game Hangman, built using primitive Turbo C++ during my school days!",
      img: wordDevilPic,
      github: "https://github.com/dejah22/Word-Devil",
      tools: ["Turbo C++", "MSDOS"],
    },
    {
      title: "Personal Portfolio",
      desc: "My personal portfolio website that I am constantly updating (you're on it right now!)",
      img: personalPortfolioPic,
      github: "https://github.com/dejah22/dejah22.github.io",
      tools: ["React", "Vite", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Digital Paper Notes",
      desc: "As users type, text is rendered as animated strokes with synchronized pencil scratch audio that creates the illusion of writing on a notebook",
      img: digitalPaperNotesPic,
      github: "https://github.com/dejah22/digital_paper_notes",
      tools: ["JavaScript", "React", "Howler"],
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
      <p
        style={{
          padding: "0rem 3rem 0rem 5rem",
          fontSize: "clamp(1rem, 0.7vw + 0.4rem, 5rem)",
        }}
      >
        These are some of the personal projects I managed to save, over the
        years. As an anti-Github, pre-AI-era coder, while I did lose much of my
        early and side projects, I did learn to build them purely through
        textbooks and after-class library sessions! That's right!
        <i> Textbooks.</i> Old-school much? Click on the github icon to view the
        complete READMEs and contribute to my codebase!
      </p>
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

export default Projects;
