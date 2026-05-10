"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import styles from "./EnvelopeSurprise.module.css";
import Letter from "./Letter";

export default function EnvelopeSurprise({ onOpenComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleTap = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // After the letter fully slides out, we can signal the parent to show the gallery
    setTimeout(() => {
      setIsOpened(true);
      if (onOpenComplete) onOpenComplete();
    }, 2500); // Wait for the whole cinematic sequence
  };

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.envelopeWrapper}
        onClick={handleTap}
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: isOpening ? 80 : 0, // Moves gently downward when opening
          scale: isOpening ? 1.05 : 1, // Smoothly enlarge slightly
          opacity: 1 
        }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }} // Apple-style smooth easing
        whileHover={!isOpening ? { y: -5 } : {}}
      >
        <div className={styles.envelopeBack}></div>

        {/* The Letter emerging from the envelope */}
        <div className={styles.letterContainer}>
          <Letter isOpening={isOpening} />
        </div>

        <motion.div 
          className={styles.envelopeFlap}
          animate={{ 
            rotateX: isOpening ? 180 : 0,
            zIndex: isOpening ? 1 : 5
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut", 
            delay: 0.2,
            zIndex: { delay: isOpening ? 0.6 : 0 }
          }}
        />

        <div className={styles.envelopePocket}>
          <div className={styles.envelopeLeft}></div>
          <div className={styles.envelopeRight}></div>
          <div className={styles.envelopeBottom}></div>
        </div>

        <motion.div 
          className={styles.heartSeal}
          initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
          animate={isOpening ? { x: "-50%", y: "-50%", opacity: 0, scale: 0 } : { x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Heart fill="#fff" color="#fff" size={20} className={styles.sealHeart} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.p 
            className={styles.tapText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tap to Open Your Surprise
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
