import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
};

export default function About() {
  return (
    <motion.div className="page" initial="hidden" animate="visible" exit="exit" variants={pageVariants}>
      <motion.section style={{ maxWidth: 720, margin: "0 auto", textAlign: "left" }} variants={contentVariants}>
        <h2>About Me</h2>
        <p>
          I build accessible, responsive front-end experiences and focus on
          performance and beautiful interactions.
        </p>
      </motion.section>
    </motion.div>
  );
}
