import React from "react";
import { motion } from "framer-motion";

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      className="card"
      initial={false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
