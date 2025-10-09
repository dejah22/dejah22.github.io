import React from "react";
import { motion } from "framer-motion";

const Tab1 = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    style={{ paddingTop: "6rem", textAlign: "center" }}
  >
    <h1>Tab 1</h1>
    <p>Content for Tab 1 fades in nicely!</p>
  </motion.div>
);

export default Tab1;
