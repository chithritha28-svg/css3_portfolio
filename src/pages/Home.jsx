import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../components/AnimatedCard";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

export default function Home() {
  const skills = ["React", "JavaScript", "CSS", "UI/UX", "Framer Motion", "Responsive Design"];
  const services = ["Web Design", "Frontend Development", "Interactive Animation", "Performance Optimization"];

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div className="page" initial="hidden" animate="visible" exit="exit" variants={pageVariants}>
      <motion.header className="hero" variants={heroVariants}>
        <h1>Chithritha Portfolio</h1>
        <p>Frontend developer & designer crafting beautiful, interactive web experiences</p>
        <motion.button
          className="cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.assign('/contact')}
          type="button"
        >
          Let's Work Together
        </motion.button>
      </motion.header>

      <motion.section className="info-section" variants={containerVariants}>
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div key={skill} className="skill-tag" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="info-section" variants={containerVariants}>
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <AnimatedCard key={idx}>
              <h3>{service}</h3>
              <p>High-quality {service.toLowerCase()} to bring your vision to life.</p>
            </AnimatedCard>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="info-section contact-section" variants={containerVariants}>
        <h2>Contact</h2>
        <p>Ready to build your next project? Reach out and let's make something great together.</p>
      </motion.section>
    </motion.div>
  );
}
