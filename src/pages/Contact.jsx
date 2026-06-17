import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
};

export default function Contact() {
  return (
    <motion.div className="page" initial="hidden" animate="visible" exit="exit" variants={pageVariants}>
      <section className="contact-page">
        <h2>Contact</h2>
        <p>If you have a project in mind, I’d love to hear from you.</p>
        <div className="contact-card">
          <a href="mailto:chithritha28@gmail.com">chithritha28@gmail.com</a>
          <p>
            Or connect through LinkedIn and let’s start a conversation.
          </p>
          <a href="https://www.linkedin.com/in/chithritha28" target="_blank" rel="noreferrer">
            www.linkedin.com/in/chithritha28
          </a>
        </div>
      </section>
    </motion.div>
  );
}
