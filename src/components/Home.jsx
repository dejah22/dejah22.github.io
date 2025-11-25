import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          paddingTop: "8rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <h1
          style={{
            fontFamily: "Sacramento",
            fontSize: 80,
            opacity: 0.95,
            marginBottom: -10,
          }}
        >
          Welcome
        </h1>

        {/* ✨ contained paragraph box */}
        <div
          style={{
            borderRadius: "20px",
            maxWidth: "750px",
            textAlign: "center",
            color: "#3a2d1f",
            lineHeight: "1.7",
            fontSize: "1.1rem",
            backdropFilter: "blur(6px)",
            marginTop: "2rem",
          }}
        >
          <p>
            I'm Dejah, a Software Developer at Sagent Ltd. M&C and B.E Computer
            Science and Engineering graduate from Anna University (SSN College
            of Engineering).
          </p>
          <p>
            My broad interests lie in Machine Learning and Computer Vision, with
            a special curiosity for the intersections of logic and creativity.
            I've spent the past few years advancing vision models in research
            environments, and developing cross-disciplinary approaches to AI
            problems. I believe the most compelling ideas are born where worlds
            collide, and with that substantiated principle, I aim to use
            technology to build intelligent and inclusive ecosystems. Whether
            through a new model, a dataset, or a well-posed question, I'm drawn
            to work that makes computers a little more assistive, a little less
            dependent... and, perhaps, a little more human.
          </p>
          <p>Welcome, it's nice to meet you too.</p>
        </div>
      </motion.div>

      {/* Footer stays at the bottom of the page */}
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
    </>
  );
};

export default Home;
