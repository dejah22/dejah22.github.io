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
      <h1>Welcome Home</h1>
      <p>This is the home page with a smooth fade-in effect.</p>
    </motion.div>
  );
};

export default Home;
