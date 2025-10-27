import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ paddingTop: "6rem", textAlign: "center" }}
    >
      <h1
        style={{
          fontFamily: "Sacramento",
          fontSize: 70,
          opacity: 0.8,
          marginBottom: -20,
        }}
      >
        Welcome
      </h1>
      <p>
        I'm Dejah, a Software Developer at Sagent Ltd. M&C. Feel free to
        explore.
      </p>
    </motion.div>
  );
};

export default Home;
