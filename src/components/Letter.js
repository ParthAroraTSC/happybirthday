"use client";

import { motion } from "framer-motion";
import styles from "./Letter.module.css";

export default function Letter({ isOpening }) {
  return (
    <motion.div 
      className={styles.letterPaper}
      initial={{ y: "80%", scale: 0.9, opacity: 0 }}
      animate={{ 
        y: isOpening ? "0%" : "80%", 
        scale: isOpening ? 1.05 : 0.9,
        opacity: isOpening ? 1 : 0
      }}
      transition={{ 
        duration: 1.5, 
        ease: [0.25, 1, 0.5, 1], // Cinematic smooth slide up
        delay: isOpening ? 0.6 : 0 // Delay slide until flap is open
      }}
    >
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 10 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        My Dearest,
      </motion.h2>
      
      <motion.div 
        className={styles.body}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 10 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <p>
          I wanted to create something beautiful for you. Something that captures a tiny fraction of the warmth and elegance you bring into my life every single day.
        </p>
        <p>
          May this year bring you as much joy, peace, and love as you give to the world.
        </p>
      </motion.div>
      
      <motion.div 
        className={styles.signature}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        With all my love.
      </motion.div>
    </motion.div>
  );
}
