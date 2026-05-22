"use client";

import { motion } from "framer-motion";
import styles from "./Letter.module.css";

export default function Letter({ isOpening }) {
  return (
    <motion.div
      className={styles.letterPaper}
      initial={{ y: "80%", scale: 0.9, opacity: 0 }}
      animate={{
        y: isOpening ? "-20%" : "80%",
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
        Happy Birthday Buddy!!
      </motion.h2>

      <motion.div
        className={styles.body}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isOpening ? 1 : 0, y: isOpening ? 0 : 10 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <p>
          Hieeee Buddy, I wanted to make your birthday a little more special. I know it’s just a simple website, but I still wanted to do something for you since we can’t meet 😭. I hope you like it and have the happiest birthday ever!! 💖
        </p>
        <p>

        </p>
      </motion.div>

      <motion.div
        className={styles.signature}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >

      </motion.div>
    </motion.div>
  );
}
